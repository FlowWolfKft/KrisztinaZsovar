import React from "react";
import { Link } from "react-router-dom";
import { FaSeedling } from "react-icons/fa";
import aboutImg from "../../assets/img/02.webp";

function WhyCreate() {
  return (
    <div className="content-box">
      <h1>Miért hoztam létre ezt a programot?</h1>
      <div className="column-2">
        <div>
          <h3>
            Néhány évvel ezelőtt én magam is átmentem egy erős testi változáson.
          </h3>
          <p>
            A korábban energikus, fit, ragyogó önmagam helyett azt éreztem, hogy
            valami megváltozott
          </p>
          <ul>
            <li>
              <FaSeedling className="icon" />A testem
            </li>
            <li>
              <FaSeedling className="icon" />
              Az energiaszintem
            </li>
            <li>
              <FaSeedling className="icon" />A kedvem
            </li>
            <li>
              <FaSeedling className="icon" />A nőiességemhez való kapcsolódásom
            </li>
          </ul>
          <p>
            És megszületett bennem a kérdés: Hogyan találhatok vissza
            önmagamhoz?
          </p>
          <p>Ez indított el egy mély kutatásban:</p>

          <ul>
            <li>✓ női életmód, táplálkozás</li>

            <li>✓ regeneráció, jóga</li>

            <li>✓ hormonbarát szemlélet, energetikai munka</li>

            <li>✓ önszeretet</li>
          </ul>
          <h3>
            Így született meg a{" "}
            <span className="essense"> Női Esszencia</span>{" "}
          </h3>
        </div>
        <div>
          <img src={aboutImg} alt="About kép" className="about-img" />
        </div>
      </div>
    </div>
  );
}

export default WhyCreate;
