// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
      <div className="area area8">
        <nav className="layout__menu">
          <ul className="menu__list">
            <li className="menu__option">
              <Link
                to="/"
                className={`menu_link ${location.pathname === "/" ? "menu__link--active" : ""}`}
                style={{ "--clr0": "#ffe600", "--clr1": "#b3a200", "--clr2": "#fff34d" }}
              >
                <i className="fa-solid fa-house menu__icon"></i>
                <span className="menu__overlay">HOME</span>
              </Link>
            </li>
            <li className="menu__option">
              <Link
                to="/aboutme"
                className={`menu_link ${location.pathname === "/aboutme" ? "menu__link--active" : ""}`}
                style={{ "--clr0": "#ffe600", "--clr1": "#b3a200", "--clr2": "#fff34d" }}
              >
                <i className="fa-solid fa-user menu__icon"></i>
                <span className="menu__overlay">Sobre Mi</span>
              </Link>
            </li>
            <li className="menu__option">
              <Link
                to="/curriculum"
                className={`menu_link ${location.pathname === "/curriculum" ? "menu__link--active" : ""}`}
                style={{ "--clr0": "#ffe600", "--clr1": "#b3a200", "--clr2": "#fff34d" }}
              >
                <i className="fa-solid fa-graduation-cap menu__icon"></i>
                <span className="menu__overlay">Curriculum</span>
              </Link>
            </li>
            <li className="menu__option">
              <Link
                to="/portafolio"
                className={`menu_link ${location.pathname === "/portafolio" ? "menu__link--active" : ""}`}
                style={{ "--clr0": "#ffe600", "--clr1": "#b3a200", "--clr2": "#fff34d" }}
              >
                <i className="fa-solid fa-briefcase menu__icon"></i>
                <span className="menu__overlay">Portafolio</span>
              </Link>
            </li>
            <li className="menu__option">
              <Link
                to="/reseñas"
                className={`menu_link ${location.pathname === "/reseñas" ? "menu__link--active" : ""}`}
                style={{ "--clr0": "#ffe600", "--clr1": "#b3a200", "--clr2": "#fff34d" }}
              >
                <i className="fa-solid fa-comment menu__icon"></i>
                <span className="menu__overlay">Reseñas</span>
              </Link>
            </li>
            <li className="menu__option">
              <Link
                to="/contacto"
                className={`menu_link ${location.pathname === "/contacto" ? "menu__link--active" : ""}`}
                style={{ "--clr0": "#ffe600", "--clr1": "#b3a200", "--clr2": "#fff34d" }}
              >
                <i className="fa-solid fa-envelope menu__icon"></i>
                <span className="menu__overlay">Contacto</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
  );
};

export default Navbar;