import { useEffect, useState } from "react";

import { ILocation } from "@/interfaces/ILocations";
import { getDirections } from "@/utils/map/route";

interface Params {
  origin: ILocation;
  destination: ILocation;
}

export const useRoute = ({ origin, destination }: Params) => {
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);
  const [distanceTotal, setDistanceTotal] = useState<number>(0);
  const [placeLocation, setPlaceLocation] = useState<{
    lat: number;
    lng: number;
  }>({ lat: 0, lng: 0 });
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const directionRequest = {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.WALKING,
      };

      const result = await getDirections(directionRequest);
      const distance = result?.routes[0].legs[0].distance?.value || 0;
      const time = result?.routes[0].legs[0].duration?.text || "";

      setDistanceTotal(distance);
      setPlaceLocation(destination);
      setTime(time);
      setDirections(result);
    };

    fetchData();
  }, [destination, origin]);

  return {
    directions,
    distanceTotal,
    placeLocation,
    time,
  };
};
