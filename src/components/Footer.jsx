import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

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
          <Link to="/impressum" rel="noopener noreferrer">
            Impresszum
          </Link>
        </div>

        <div className="footer-links">
          <Link to="/privacy" rel="noopener noreferrer">
            Adatkezelési Tájékoztató
          </Link>
        </div>

        <div className="social-icons">
          <a
            href="https://www.facebook.com/profile.php?id=61571804105911"
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
      </div>
    </footer>
  );
}

export default Footer;
