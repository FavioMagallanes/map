import { useReducer } from "react";
import { Map } from "mapbox-gl";
import { MapContext } from "./MapContext";
import { mapReducer } from "./mapReducer";

export interface MapState {
  isMapLoaded: boolean;
  map?: Map;
}

interface MapProviderProps {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: MapState = {
  isMapLoaded: false,
  map: undefined,
};

export const MapProvider = ({ children }: MapProviderProps) => {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);

  const setMap = (map: Map) => {
    dispatch({ type: "setMap", payload: map });
  };

  return (
    <MapContext.Provider
      value={{
        ...state,
        setMap,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
