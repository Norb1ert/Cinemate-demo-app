import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import LoginPage from "./pages/LoginPage";
import { MoviesProvider } from "./contexts/MoviesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import Protected from "./pages/Protected";

function App() {
  return (
    <AuthProvider>
      <MoviesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route
              path="app"
              element={
                <Protected>
                  <MoviesPage />
                </Protected>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </MoviesProvider>
    </AuthProvider>
  );
}

export default App;
