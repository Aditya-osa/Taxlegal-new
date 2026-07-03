import React from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import "../../global.css";

const Header = () => {
  return (
    <>
      <div className="header-spacer"></div>
      <header className="tl-header">
        <Topbar />
        <Navbar />
      </header>
    </>
  );
};

export default Header;
