import React from "react";
import { Link } from "react-router-dom";
import { FaSeedling } from "react-icons/fa";

function Prices() {
  return (
    <div className="content-box">
      <h1>Jelentkezés/ Árak</h1>
      <p>
        Kattints a jelentkezés gombra, add meg a Neved és az email címed, melyen
        felvehetem Veled a kapcsolatot!
      </p>
      <ul>
        <li>Early Bird június 14-ig: 110.000 Ft</li>
        <li>Június 15-től: 160.000 Ft</li>
        <li>Páros jelentkezés: 200.000 Ft / 2 fő</li>
      </ul>
      <Link to="/contact" className="contact-btn">
        Jelentkezem!
      </Link>
      <p>
        A helyek száma limitált! Ez nem automatizált kurzus, hanem személyes
        támogatással kísért folyamat, a helyek száma korlátozott.
      </p>
      <p>Ha hívást érzel</p>
      <ul>
        <li>Lehet, hogy ez most nem csak egy program.</li>
        <li>Hanem egy választás Önmagad mellett.</li>
        <li>A nő mellett, aki még mindig benned él.</li>
        <li>Aki ragyogni és mozogni akar.</li>
        <li>Jól akarja érezni magát a testében.</li>
        <li>Újra nő akar lenni.</li>
      </ul>
    </div>
  );
}

export default Prices;
