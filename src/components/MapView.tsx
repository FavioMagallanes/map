import { useContext, useLayoutEffect, useRef } from "react";
import { Map } from "mapbox-gl";
import { PlacesContext } from "../context";
import { Spinner } from "./Spinner";

export const MapView = () => {
  const { isLoanding, userLocation } = useContext(PlacesContext);
  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isLoanding) {
      const map = new Map({
        container: mapDiv.current!, // container ID
        style: "mapbox://styles/mapbox/streets-v12", // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 14,
      });
    }
  }, [isLoanding]);

  if (isLoanding) {
    return <Spinner />;
  }

  return (
    <div className="fixed left-0 top-0 h-full w-full" ref={mapDiv}>
      {userLocation?.join(",")}
    </div>
  );
};
