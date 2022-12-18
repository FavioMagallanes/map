import { MapState } from "./MapProvider";
import { Map } from "mapbox-gl";

export type MapAction = {
  type: "setMap";
  payload: Map;
};

export const mapReducer = (state: MapState, action: MapAction): MapState => {
  switch (action.type) {
    case "setMap":
      return {
        ...state,
        isMapLoaded: true,
        map: action.payload,
      };
    default:
      return state;
  }
};
