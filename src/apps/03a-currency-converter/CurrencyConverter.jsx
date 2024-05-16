// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import { useEffect, useState } from "react";
import { useTitle } from "../../globalContexts/TitleContext";

export default function CurrencyConverter() {
  const { setAppTitle } = useTitle();
  const [currencies, setCurrencies] = useState(null);
  const [value, setValue] = useState(0);
  const [error, setError] = useState("");
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [output, setOutput] = useState("");

  useEffect(() => {
    setAppTitle("Currency Converter");
  }, [setAppTitle]);

  useEffect(() => {
    async function getCurrencies() {
      const res = await fetch(`https://api.frankfurter.app/currencies`);
      const data = await res.json();
      setCurrencies(data);
    }
    getCurrencies();
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchConvertedValue() {
      setOutput("");
      try {
        setError("");
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${value}&from=${fromCurrency}&to=${toCurrency}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("Something went wrong fetching");
        const data = await res.json();
        setOutput(data.rates[toCurrency]);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      }
    }

    if (!value || typeof value !== "number") {
      setOutput("");
      return;
    }
    if (fromCurrency === toCurrency) {
      setOutput(value);
    } else {
      fetchConvertedValue();
    }
  }, [value, fromCurrency, toCurrency]);

  function handleSetValue(newValue) {
    setValue(Number(newValue));
  }

  function handleChangeFromCurrency(newFromCurrency) {
    setFromCurrency(newFromCurrency);
  }

  function handleChangeToCurrency(newToCurrency) {
    setToCurrency(newToCurrency);
  }

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      <input type="text" onChange={(e) => handleSetValue(e.target.value)} />
      <select
        value={fromCurrency}
        onChange={(e) => handleChangeFromCurrency(e.target.value)}
      >
        {currencies &&
          Object.entries(currencies).map(([key, val]) => (
            <option value={key} key={key}>
              {key}({val})
            </option>
          ))}
      </select>
      <select
        value={toCurrency}
        onChange={(e) => handleChangeToCurrency(e.target.value)}
      >
        {currencies &&
          Object.entries(currencies).map(([key, val]) => (
            <option value={key} key={key}>
              {key}({val})
            </option>
          ))}
      </select>
      <p>{error || (output && output + toCurrency) || ""}</p>
    </div>
  );
}
