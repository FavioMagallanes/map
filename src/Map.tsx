import { PlacesProvider } from "./context";
import { HomeScreen } from "./screens";

export const Map = () => {
  return (
    <PlacesProvider>
      <HomeScreen />
    </PlacesProvider>
  );
};
