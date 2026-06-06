import React from "react";
import { Link } from "react-router-dom";
import { FaSeedling } from "react-icons/fa";
import { RiH3 } from "react-icons/ri";
import simbolImg from "../../assets/img/main-logo-symbol.png";

function Prices() {
  return (
    <div className="content-box">
      <h1>Árak</h1>{" "}
      <h3>
        A helyek száma limitált! Ez nem automatizált kurzus, hanem személyes
        támogatással kísért folyamat, ezért a helyek száma korlátozott.
      </h3>
      <div className="column-2">
        <div>
          {/*<h3>Ha hívást érzel</h3></li*/}

          {/*<li>
          Lehet, hogy ez most nem csak egy program, hanem egy választás Önmagad
          mellett.
        </li>

        <li>
          A nő mellett, aki még mindig benned él, aki ragyogni és mozogni akar.
        </li>

        <li>Jól akarja érezni magát a testében, újra nő akar lenni.</li*/}

          <ul className="price-card">
            <li>Early Bird (június 14-ig): 110.000 Ft</li>
            <li>Június 15-től: 160.000 Ft</li>
            <li>Páros jelentkezés: 200.000 Ft / 2 fő</li>
          </ul>
          <Link to="/contact" className="contact-btn">
            Jelentkezem!
          </Link>
        </div>
        <div>
          <img src={simbolImg} alt="About kép" className="symbol-img" />
        </div>
      </div>
    </div>
  );
}

export default Prices;
