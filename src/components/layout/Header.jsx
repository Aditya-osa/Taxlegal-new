import React from "react";
import { useLocation } from "react-router-dom";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import "../../global.css";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <div className={`header-spacer ${isHome ? "home-spacer" : ""}`}></div>
      <header className="tl-header">
        <Topbar />
        <Navbar />
      </header>
    </>
  );
};

export default Header;
