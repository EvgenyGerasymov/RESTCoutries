import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import Details from "./pages/Details";
import Heading from "./Heading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppContextProvider } from "./AppContext";
import ThemeContext from "./ThemeContext";
import { useContext } from "react";

function App() {
  const client = new QueryClient();
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme ? "dm" : ""} min-h-screen`}>
      <QueryClientProvider client={client}>
        <AppContextProvider>
          <Heading />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:country/details" element={<Details />} />
          </Routes>
        </AppContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
