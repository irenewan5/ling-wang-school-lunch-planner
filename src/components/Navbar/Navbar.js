import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const location = useLocation();
  const isMenuVisible =
    location.pathname.indexOf("/plans") === 0 ||
    location.pathname.indexOf("/profile") === 0;
  return (
    <div className="navbar">
      <Link className="navbar__logo" to="/">
        School Lunch Planner
      </Link>
      {isMenuVisible && (
        <ul className="navbar__menu">
          <li className="navbar__menu-item">
            <NavLink to="/plans">Plans</NavLink>
          </li>
          <li className="navbar__menu-item">
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
