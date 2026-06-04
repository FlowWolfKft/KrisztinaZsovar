import React from "react";
import { Link } from "react-router-dom";
import {
  FaSpa,
  FaBatteryHalf,
  FaRegHeart,
  FaSeedling,
  FaUsers,
} from "react-icons/fa";

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
          <p>
            A Női Esszencia nem egy sablonos életmódprogram. Ez egy 8 hetes
            teljes női újrakalibrálás, ahol egyszerre támogatjuk
          </p>
          <ul>
            <li>
              <FaSeedling className="icon" />a testedet
            </li>
            <li>
              <FaSeedling className="icon" />
              az energiaszintedet
            </li>
            <li>
              <FaSeedling className="icon" />a hormonbarát életmódodat
            </li>
            <li>
              <FaSeedling className="icon" />a mozgásodat
            </li>{" "}
            <li>
              <FaSeedling className="icon" />
              az önbizalmadat
            </li>{" "}
            <li>
              <FaSeedling className="icon" />a nőiességedet
            </li>{" "}
            <li>
              <FaSeedling className="icon" />a lelki és energetikai
              egyensúlyodat
            </li>
          </ul>
          <p>
            Mert a valódi változás nem csak a tányéron kezdődik. És nem csak a
            mérlegen látszik.
          </p>
          <p>Itt végre minden összeér.</p>

          <p>
            Ez a program úgy lett megalkotva, hogy ne kelljen külön keresgélned:
          </p>
          <ul>
            <li>
              <FaSpa className="icon" />
              mit egyél
            </li>
            <li>
              <FaSpa className="icon" /> hogyan mozogj
            </li>
            <li>
              {" "}
              <FaSpa className="icon" /> hogyan kezeld a hormonális változásokat
            </li>
            <li>
              {" "}
              <FaSpa className="icon" /> hogyan csökkentsd a gyulladásos
              terhelést
            </li>
            <li>
              <FaSpa className="icon" /> hogyan szerezd vissza az energiádat
            </li>
            <li>
              {" "}
              <FaSpa className="icon" /> hogyan szeresd újra a testedet
            </li>
            <li>
              {" "}
              <FaSpa className="icon" /> hogyan kapcsolódj vissza a
              nőiességedhez
            </li>
          </ul>
          <p>Itt egy komplex, megtartó rendszer vár Rád.</p>
          <p>Neked szól, ha:</p>
          <ul>
            <li>✓ híztál az utóbbi időben</li>
            <li>✓ hormonális változásokat tapasztalsz</li>
            <li>✓ gyakran fáradtnak érzed magad</li>
            <li>✓ nehezebben alszol</li>
            <li>✓ puffadsz vagy nehéznek érzed magad</li>
            <li>✓ nincs motivációd a mozgáshoz</li>
            <li>✓ nem érzed magad igazán nőiesnek</li>
            <li>✓ vissza akarod kapni a ragyogásodat</li>
          </ul>
          <p>Mire számíthatsz?</p>
          <p>A program végére sok nő azt tapasztalja, hogy:</p>
          <ul>
            <li> könnyedebbnek érzi magát</li>
            <li> energikusabb</li>
            <li> tudatosabban étkezik</li>
            <li> újra szeret mozogni</li>
            <li> javul a napi ritmusa</li>
            <li> nőiesebbnek érzi magát</li>
            <li> magabiztosabban néz tükörbe</li>
            <li> jobb kapcsolatban van önmagával</li>
          </ul>
        </div>
      </div>
      <h2>A program három alappillére</h2>
      <div className="column-3">
        <div>
          <div className="card">
            <h3>TEST- Regeneráció belülről</h3>

            <p>35 felett a női test más támogatást igényel.</p>

            <div>
              <div>
                <h3>A programban fókuszálunk:</h3>

                <ul>
                  <li>
                    <FaSeedling className="icon" /> gyulladáscsökkentő életmódra
                  </li>
                  <li>
                    <FaSeedling className="icon" /> bélflóra támogatásra
                  </li>
                  <li>
                    <FaSeedling className="icon" /> hormonbarát étkezési
                    szemléletre
                  </li>
                  <li>
                    <FaSeedling className="icon" />
                    energiaszint támogatására
                  </li>
                  <li>
                    <FaSeedling className="icon" /> testsúlyoptimalizálásra
                  </li>
                  <li>
                    <FaSeedling className="icon" /> alvás támogatására
                  </li>
                  <li>
                    <FaSeedling className="icon" />
                    adaptogénekre és természetes támogatásra
                  </li>
                </ul>
              </div>

              <div>
                <h3>Amit kapsz:</h3>

                <ul>
                  <li>✓ szezonális heti menük</li>
                  <li>✓ vegyes és vegán opciók</li>
                  <li>✓ gyors, finom receptek</li>
                  <li>✓ kiegészítő útmutató</li>
                  <li>✓ életmód edukáció egyszerűen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <h3> MOZGÁS- Szeretettel, nem kényszerből</h3>
            <ul>
              <li>
                <FaSeedling className="icon" /> Nem kell sportosnak lenned.
              </li>
              <li>
                <FaSeedling className="icon" /> Nem kell fitnek lenned..
              </li>
              <li>
                <FaSeedling className="icon" />
                Nem kell már most motiváltnak lenned.
              </li>
              <li>
                <FaSeedling className="icon" /> A rendszer fokozatosan épít fel.
              </li>
            </ul>
            <div>
              <div>
                <h3>Amit kapsz:</h3>

                <ul>
                  <li>✓ heti 3 jógaóra</li>
                  <li>✓ kezdő és haladó verziók</li>
                  <li>✓ rövid napi gyakorlatsorok</li>
                  <li>✓ fokozatos mozgásfelépítés</li>
                  <li>✓ testtudat fejlesztés</li>
                  <li>✓ súlyzós alapok</li>
                </ul>
              </div>

              <p>A cél, hogy a mozgás újra öröm legyen</p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <h3>LÉLEK + ENERGIA- A női esszencia visszahívása</h3>

            <p>A női fáradtság nem mindig csak fizikai.</p>
            <ul>
              <li>
                <FaSeedling className="icon" /> Ott vannak a megfelelések.
              </li>
              <li>
                <FaSeedling className="icon" /> A túlterheltség.A régi
                lenyomatok.
              </li>
              <li>
                <FaSeedling className="icon" /> Az önmagadtól való eltávolodás.
              </li>
            </ul>
            <div>
              <div>
                <h3>Ezért a program része:</h3>

                <ul>
                  <li>✓ energetikai tisztítások</li>
                  <li>✓ vezetett meditációk</li>
                  <li>✓ női test rituálék</li>
                  <li>✓ napindító és estzáró hanganyagok</li>
                  <li>✓ önmagadon végezhető energetikai gyakorlatok</li>
                  <li>✓ női kapcsolódás</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>
          Nem egyedül mész végig ezen! Ez nem egy letölthető kurzus, amit
          félbehagysz, ez egy megtartó női folyamat.
        </h3>

        <h3> Amit kapsz:</h3>
        <ul>
          <li>
            <FaSeedling className="icon" /> heti 3 élő Zoom támogatás
          </li>
          <li>
            <FaSeedling className="icon" /> heti életmód előadás
          </li>
          <li>
            <FaSeedling className="icon" />
            kérdezési lehetőség
          </li>
          <li>
            <FaSeedling className="icon" /> zárt Facebook közösség
          </li>
          <li>
            <FaSeedling className="icon" /> napi inspiráció
          </li>
          <li>
            <FaSeedling className="icon" /> folyamatos támogatás
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Description;
