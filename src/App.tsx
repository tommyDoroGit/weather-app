import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import WeatherMap from "./components/map/Map";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <div className="Apddsp" style={{ height: "100%" }}>
        <WeatherMap />
      </div>
    </QueryClientProvider>
  );
}

export default App;
