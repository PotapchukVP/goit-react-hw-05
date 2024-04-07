import css from "./Navigation.module.css";
import clsx from "clsx";
import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "./../SearchBar/SearchBar.jsx";

const isActiveLink = (navLinkObject) =>
  clsx(css.link, navLinkObject.isActive && css.isActive);

export default function Navigation() {
  const location = useLocation();
  return (
    <nav className={css.navigation}>
      <div className={css.linkWrapper}>
        <NavLink to="/" className={isActiveLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={isActiveLink}>
          Movies
        </NavLink>
      </div>
      {/* {location.pathname === "/movies" && <SearchBar />} */}
    </nav>
  );
}
