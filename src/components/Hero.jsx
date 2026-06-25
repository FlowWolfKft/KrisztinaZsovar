import React from "react";
import { Link } from "react-router-dom";
import symbol from "../../assets/img/02.webp";

function Hero() {
  return (
    <div className="hero">
      <h1>Szépülj!</h1>
      <div className="content-box column-2">
        <div className="hero-text">
          <h2>
            Ragyogóbb bőr • Feszesebb és rugalmasabb test • Nőies kisugárzás
          </h2>
          <h3>Szeress bele a testedbe!</h3>
          <h3>30 napos nyári szépségprogram nőknek</h3>
          <h3>Időpont:</h3>
          <h2> 2026. augusztus 1- 31.</h2>
          <Link to="/Contact" className="contact-btn">
            Jelentkezem!
          </Link>
        </div>
        <div>
          <img src={symbol} alt="About kép" className="hero-img" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
