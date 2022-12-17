import { useContext } from "react";
import { PlacesContext } from "../context";
import { Spinner } from "./Spinner";

export const MapView = () => {
  const { isLoanding, userLocation } = useContext(PlacesContext);

  if (isLoanding) {
    return <Spinner />;
  }

  return <div>{userLocation?.join(",")}</div>;
};
