import "./Navbar.css";

import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const menu = ["Home", "About", "Portfolio", "Blog", "Contact"];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeMenu, setActiveMenu] = useState("");
  const [controlMobileMenu, setControlMobileMenu] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);

  const handleNavigation = (link) => () => {
    setActiveMenu(link);

    if (link.includes("Home")) return navigate("/");
    navigate(link.toLowerCase());
  };

  const handleMobileNavigation = (link) => () => {
    handleNavigation(link)();
    setControlMobileMenu(false);
  };

  const handleOpenMobileMenu = () => {
    setControlMobileMenu((state) => !state);
  };

  useEffect(() => {
    const locationPathname = location.pathname.replace("/", "");

    const currentPath = menu
      .map((item, index) => {
        if (locationPathname === "") return null;
        if (item.toLowerCase().includes(locationPathname)) return item;
        return null;
      })
      .filter((item) => item);

    if (currentPath[0] === undefined) return setActiveMenu("Home");

    setActiveMenu(currentPath[0]);
  }, [location.pathname]);

  useEffect(() => {
    let timer;

    if (controlMobileMenu) {
      setMobileMenu(true);
    } else {
      timer = setTimeout(() => {
        setMobileMenu(false);
      }, 400);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [controlMobileMenu]);

  return (
    <>
      <nav className="navbar">
        <section className="navbar-header-section">
          <header className="navbar-header cursor-pointer">
            <h1 onClick={handleNavigation("Home")}>Jeong Hyun Lee</h1>
          </header>
        </section>

        <section className="navbar-menu-section">
          <ul className="navber-menu">
            {menu.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`navbar-menu-item cursor-pointer ${
                    item === activeMenu ? "navbar-menu-item-active" : ""
                  }`}
                  onClick={handleNavigation(item)}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </section>

        <section className="navbar-menu-section-mobile">
          {controlMobileMenu ? (
            <FontAwesomeIcon
              icon="fa-solid fa-rectangle-xmark"
              className="mobile-menu-bar"
              onClick={handleOpenMobileMenu}
            />
          ) : (
            <FontAwesomeIcon
              icon="fa-solid fa-bars"
              className="mobile-menu-bar"
              onClick={handleOpenMobileMenu}
            />
          )}
        </section>

        {isMobileMenu ? (
          <nav
            className={`mobile-menu-container ${
              controlMobileMenu ? "animated-show" : "animated-hide"
            }`}
          >
            <ul className="mobile-menu">
              {menu.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="mobile-menu-item"
                    onClick={handleMobileNavigation(item)}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}
      </nav>
    </>
  );
}
