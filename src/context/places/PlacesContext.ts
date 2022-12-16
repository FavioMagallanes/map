import { createContext } from "react";

export interface PlacesContextProps {
  isLoanding: boolean;
  userLocation?: [number, number];
}

export const PlacesContext = createContext<PlacesContextProps>(
  {} as PlacesContextProps
);
