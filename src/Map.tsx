import { PlacesProvider } from "./context";

export const Map = () => {
  return (
    <PlacesProvider>
      <h1 className="text-3xl font-bold underline">hola mundo</h1>
    </PlacesProvider>
  );
};
