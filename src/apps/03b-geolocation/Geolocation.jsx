import { useEffect, useState } from "react";
import { useGeolocation } from "../../globalHooks/useGeolocation";
import { useTitle } from "../../globalContexts/TitleContext";

export default function Geolocation() {
  const { setAppTitle } = useTitle();
  const [countClicks, setCountClicks] = useState(0);
  const {
    isLoading,
    position: { lat, lng },
    error,
    getPosition,
  } = useGeolocation();

  useEffect(() => {
    setAppTitle("Geolocation");
  }, [setAppTitle]);

  function handleClick() {
    setCountClicks((count) => count + 1);
    getPosition();
  }

  return (
    <div style={{ fontSize: "48px" }}>
      <button
        disabled={isLoading}
        style={{ fontSize: "32px" }}
        onClick={handleClick}
      >
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
}
