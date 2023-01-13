import React, { useContext } from "react";
import logoWithoutText from "./static/logo_without_text.png";

const Navbar = () => {

  return (
    <div className="navbar bg-blue-800 text-white">
      <div className="navbar-start">
        <div className="dropdown">
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">KafkaCompass</a>
      </div>
      <div className="navbar-end">
      </div>
    </div>
  );
};

export default Navbar;