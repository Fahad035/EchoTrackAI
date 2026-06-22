import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Awareness from "./pages/Awareness";
import Pledge from "./pages/Pledge";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

function App() {



  useEffect(() => {
    const storedTheme = localStorage.getItem("eco-track-theme");
    const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initialTheme = storedTheme || (systemPrefersLight ? "light" : "dark");

    // Apply to entire app
    document.documentElement.dataset.theme = initialTheme;
    localStorage.setItem("eco-track-theme", initialTheme);

    // Keep in sync if system preference changes and user hasn't chosen explicitly
    const mql = window.matchMedia("(prefers-color-scheme: light)");
    const handleChange = () => {
      const currentStored = localStorage.getItem("eco-track-theme");
      if (!currentStored) {
        const nextTheme = mql.matches ? "light" : "dark";
        document.documentElement.dataset.theme = nextTheme;
        localStorage.setItem("eco-track-theme", nextTheme);
      }
    };

    if (typeof mql?.addEventListener === "function") {
      mql.addEventListener("change", handleChange);
    } else {
      // Safari fallback
      mql.addListener(handleChange);
    }

    return () => {
      if (typeof mql?.removeEventListener === "function") {
        mql.removeEventListener("change", handleChange);
      } else {
        mql.removeListener(handleChange);
      }
    };
  }, []);

  return (
    <AuthProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/awareness"
            element={
              <ProtectedRoute>
                <Awareness />
              </ProtectedRoute>
            }
          />

          <Route
            path="/pledge"
            element={
              <ProtectedRoute>
                <Pledge />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;