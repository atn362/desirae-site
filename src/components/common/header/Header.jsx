import React from "react";
import { Navbar } from "../../common";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function Header() {
  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top_logo">
          <a href="/" className="header-logo">
            <FontAwesomeIcon
              icon={solid("user-secret")}
              size="7x"
              border
              bounce
            />
          </a>
        </section>
        <section className="header-top_navbar"> {<Navbar />} </section>
        <section className="header-bottom"></section>
        <section className="header-bottom_phone">952-270-8875</section>
        <section className="header-bottom_email">atn362@gmail.com</section>
      </section>
    </section>
  );
}

export default Header;
