import React from "react";
import { Link } from "react-router-dom";
import symbol from "../../assets/img/02.webp";

function Hero() {
  return (
    <div className="hero">
      <h1>NŐI ESSZENCIA (Femme essense)</h1>
      <div className="content-box column-2">
        <div className="hero-text"> 
          <h2>8 hetes online női transzformációs életmódprogram</h2>
          <h3>
            Kifejezetten azoknak a nőknek, akik szeretnék visszakapni az
            energiájukat, a nőiességüket és a ragyogásukat. Ha nem csak fogyni
            szeretnél, hanem újra Nőnek akarod érezni magad.
          </h3>
          <h3>Időpont:</h3>
          <h2>2026. július 1. - augusztus 26.</h2>
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
