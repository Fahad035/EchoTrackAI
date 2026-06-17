import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Awareness from "./pages/Awareness";
import Pledge from "./pages/Pledge";

function App() {
  useEffect(() => {
    const storedTheme = localStorage.getItem("eco-track-theme");
    const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initialTheme = storedTheme || (systemPrefersLight ? "light" : "dark");

    document.documentElement.dataset.theme = initialTheme;
    localStorage.setItem("eco-track-theme", initialTheme);
  }, []);

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/awareness"
          element={<Awareness />}
        />

        <Route
          path="/pledge"
          element={<Pledge />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;