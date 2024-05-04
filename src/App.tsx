import { useState } from "react";

// function useGeolocation(lat: number, lng: number) {}
import { useGeolocation } from "./hooks/useGeolocation";

// interface IPosition {
//   lat: number;
//   lng: number;
// }

export default function App() {
  const [countClicks, setCountClicks] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);
  // const [position, setPosition] = useState<IPosition>({ lat: 0, lng: 0 });
  // const [error, setError] = useState<string | null>(null);

  const { isLoading, position, error } = useGeolocation();
  const { lat, lng } = position;

  function getPosition() {
    setCountClicks((count) => count + 1);

    //   if (!navigator.geolocation)
    //     return setError("Your browser does not support geolocation");

    //   setIsLoading(true);
    //   navigator.geolocation.getCurrentPosition(
    //     (pos) => {
    //       setPosition({
    //         lat: pos.coords.latitude,
    //         lng: pos.coords.longitude,
    //       });
    //       setIsLoading(false);
    //     },
    //     (error: any) => {
    //       setError(error.message);
    //       setIsLoading(false);
    //     }
    //   );
  }

  return (
    <div>
      <button onClick={getPosition} disabled={isLoading}>
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
