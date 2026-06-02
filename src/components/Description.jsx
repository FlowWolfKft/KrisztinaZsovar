import React from "react";
import { Link } from "react-router-dom";
import { FaSeedling } from "react-icons/fa";

function Description() {
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
          <ul>
            <li>
              <FaSeedling className="icon" />
              Kimerültnek érzed magad?
            </li>
            <li>
              <FaSeedling className="icon" />A tested már nem úgy reagál, mint
              régen?
            </li>
            <li>
              <FaSeedling className="icon" /> Makacsabbak a kilók?
            </li>
            <li>
              <FaSeedling className="icon" /> Rosszabbul alszol?
            </li>
            <li>
              <FaSeedling className="icon" /> Kevesebb az energiád?
            </li>
          </ul>
          <p>
            És valahol mélyen azt érzed: "Nem ilyen nő vagyok valójában."
            Tudod,ogy benned él még az a ragyogó, energikus, szép, nőies
            önmagad, csak most szükséged van egy útra, ami visszavezet hozzá.
          </p>
          <p>Nem egy újabb diéta. Nem egy újabb kudarc.</p>
          <p>A Női Esszencia nem egy sablonos életmódprogram.
            Ez egy 8 hetes teljes női újrakalibrálás, ahol egyszerre támogatjuk</p>
          <ul>
            <li>
             
              <FaSeedling className="icon" />
              a testedet
            </li>
            <li>
           
              <FaSeedling className="icon" />az energiaszintedet
            </li>
            <li>
         
              <FaSeedling className="icon" /> a hormonbarát életmódodat
            </li>
              <li>
         
              <FaSeedling className="icon" />a mozgásodat
            </li>  <li>
         
              <FaSeedling className="icon" />  az önbizalmadat
            </li>  <li>
         
              <FaSeedling className="icon" /> a nőiességedet
            </li>  <li>
         
              <FaSeedling className="icon" /> a lelki és energetikai egyensúlyodat
            </li>
          </ul>
          <p>
           Mert a valódi változás nem csak a tányéron kezdődik. És nem csak a mérlegen látszik.
          </p>
          <p>Itt végre minden összeér.</p>
          <p>TEST • MOZGÁS • LÉLEK • ENERGIA • KÖZÖSSÉG</p>
          
        </div>
      </div>
    </div>
  );
}

export default Description;
