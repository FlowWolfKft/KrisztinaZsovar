import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero content-box">
      <div className="row">
        <div className="col-1-3">
          {/* <img
            src={pixellibertyImg}
            alt="About kép"
            className="pixelliberty-img"
          /> */}
        </div>
        <div className="col-2-3">
          <h1>NŐI ESSZENCIA (Femme essense)</h1>
          <h2>8 hetes online női transzformációs életmódprogram</h2>
          <p>
            Kifejezetten azoknak a nőknek, akik szeretnék visszakapni az
            energiájukat, a nőiességüket és a ragyogásukat. Ha nem csak fogyni
            szeretnél, hanem újra Nőnek akarod érezni magad.
          </p>
          <p>Időpont:</p>
          <p>2026. július 1. - augusztus 26.</p>
          <Link to="/contact" className="contact-btn">
            Jelentkezem!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
