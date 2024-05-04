import "./App.scss";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import PlansPage from "./pages/PlansPage/PlansPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RecipePage from "./pages/RecipePage/RecipePage";
import Navbar from "./components/Navbar/Navbar";
import context from "./libs/context";

function App() {
  const [token, setToken] = useState();
  const Provider = context.Provider;

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  return (
    <Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {token && (
            <>
              <Route path="/" element={<Navigate to="/plans" />} />
              <Route path="/plans" element={<PlansPage />} />
              <Route path="/recipes" element={<SearchPage />} />
              <Route path="/recipes/:id" element={<RecipePage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </>
          )}
          {!token && (
            <>
              <Route path="*" element={<LoginPage />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
