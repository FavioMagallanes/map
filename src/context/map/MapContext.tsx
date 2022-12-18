import { createContext } from "react";
import { Map } from "mapbox-gl";

interface MapContextProps {
  isMapLoaded: boolean;
  map?: Map;
  setMap: (map: Map) => void;
}

export const MapContext = createContext({} as MapContextProps);
