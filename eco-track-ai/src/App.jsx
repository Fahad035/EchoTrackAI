import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { loginAnonymous } from "./firebase/auth";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Awareness from "./pages/Awareness";
import Pledge from "./pages/Pledge";
import { getAuth } from "firebase/auth";




function App() {

  useEffect(() => {
    const storedTheme = localStorage.getItem("eco-track-theme");
    const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initialTheme = storedTheme || (systemPrefersLight ? "light" : "dark");

    document.documentElement.dataset.theme = initialTheme;
    localStorage.setItem("eco-track-theme", initialTheme);

    // Firebase Anonymous Login
    const auth = getAuth();

    if (!auth.currentUser) {
      loginAnonymous().catch((error) => {
        console.error("Authentication failed:", error);
      });
    }
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