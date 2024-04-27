import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PlansPage from "./pages/PlansPage/PlansPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RecipePage from "./pages/RecipePage/RecipePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/plans" />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/recipes" element={<SearchPage />} />
        <Route path="/recipes/:id" element={<RecipePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
