import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  AppLayout,
  Homepage,
  Login,
  PageNotFound,
  Pricing,
  Product,
} from "../pages/index";
import "../worldwise.css";
import CityList from "./CityList";
import CountryList from "./CountryList";
import City from "./City";
import Form from "./Form";

Worldwise.propTypes = {
  setAppTitle: PropTypes.func,
};

const BASE_URL = "http://localhost:8000";

function Worldwise({ setAppTitle }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        console.error(err, "need to run npm run cities");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  useEffect(() => {
    setAppTitle("Worldwise");
  }, [setAppTitle]);

  return (
    <div className="worldwise-container">
      {/* <Link to="/Worldwise/pricing">Pricing</Link>
      <a href="/Worldwise/pricing">Pricing</a> */}
      <BrowserRouter>
        <Routes>
          <Route path="Worldwise" element={<Homepage />} />
          <Route path="Worldwise/product" element={<Product />} />
          <Route path="Worldwise/pricing" element={<Pricing />} />
          <Route path="Worldwise/login" element={<Login />} />
          <Route path="Worldwise/app" element={<AppLayout />}>
            {/* redirect */}
            <Route index element={<Navigate replace to="cities" />} />
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            {/* when calling useParams inside <City /> we will get the url parameter
            named id because we wrote :id here */}
            <Route path="cities/:id" element={<City />} />
            <Route
              path="countries"
              element={<CountryList cities={cities} isLoading={isLoading} />}
            />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="Worldwise/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Worldwise;
