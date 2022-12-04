import { QueryClient, QueryClientProvider } from "react-query";
import WeatherMap from "./components/map/Map";
import { AiFillGithub } from "react-icons/ai/";
import GlobalStyle from "./GlobalStyle";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <GlobalStyle />
      <div className="App" style={{ height: "100%" }}>
        <WeatherMap />
        <footer
          style={{
            height: "3rem",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <a
            href="https://github.com/tommyDoroGit/weather-app"
            style={{ paddingRight: "1rem" }}
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub size="2em" color="rgb(235,99,61)" />
          </a>
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;
