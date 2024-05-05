import { useState } from "react";

interface IPosition {
  lat: number;
  lng: number;
}

export const useGeolocation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState<IPosition>({ lat: 0, lng: 0 });
  const [error, setError] = useState<string | null>(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error: any) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }
  return { getPosition, isLoading, position, error };
};
