import React from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import "../../global.css";

const Header = () => {
  return (
    <>
      <div className="header-spacer" style={{ height: '110px' }}></div>
      <header className="tl-header">
        <Topbar />
        <Navbar />
      </header>
    </>
  );
};

export default Header;
