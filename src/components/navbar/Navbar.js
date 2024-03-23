import "./Navbar.css";

import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const menu = ["Home", "About", "Portfolio", "Blog", "Contact"];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeMenu, setActiveMenu] = useState("");

  const handleNavigation = (link) => () => {
    setActiveMenu(link);

    if (link.includes("Home")) return navigate("/");
    navigate(link.toLowerCase());
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
          <h3>Menu</h3>
        </section>
      </nav>
    </>
  );
}
