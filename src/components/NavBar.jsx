import { Link } from "react-router-dom";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header id="header">
      <div className="content-box nav-wrapper">
        <div id="logo">
          <Link to="/">Zsóvár Krisztina</Link>
        </div>

        <div className="nav-wrapper">
          <div
            id="hamburger"
            className={isOpen ? "nyitva" : ""}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav id="main-menu" className={isOpen ? "nyitva" : ""}>
            <ul>
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Rólam
                </Link>
              </li>

              <li>
                <Link to="/#services" onClick={() => setIsOpen(false)}>
                  Gyakran Ismételt Kérdések
                </Link>
              </li>


              <li>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Jelentkezem!
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
