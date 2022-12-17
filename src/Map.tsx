import { MapProvider, PlacesProvider } from "./context";
import { HomeScreen } from "./screens";

export const Map = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  );
};
