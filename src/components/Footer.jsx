import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import symbol from "../../assets/img/main-logo-symbol.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="column-4">
        <div className="footer-links">
          <a
            href="https://www.pixelliberty.hu"
            target="_blank"
            rel="noopener noreferrer"
          >
            © 2026 PixelLiberty
          </a>
        </div>

        <div className="footer-links">
          <Link to="/privacy" rel="noopener noreferrer">
            Adatkezelési Tájékoztató
          </Link>
        </div>

        <div className="social-icons">
          <a
            href="https://www.facebook.com/yogaartmuhely"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>

          <a
            href="https://instagram.com/pixel.liberty"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <div>
          <img src={symbol} alt="About kép" className="symbol-img" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
