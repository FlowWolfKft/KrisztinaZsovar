import React from "react";
import { Link } from "react-router-dom";
import {
  FaSpa,
  FaBatteryHalf,
  FaRegHeart,
  FaSeedling,
  FaUsers,
  FaCheck,
} from "react-icons/fa";
import {
  Heart,
  Leaf,
  Battery,
  Rose,
  Salad,
  Apple,
  Star,
  Flower,
  Flower2Icon,
  Sprout,
  Sun,
  Sparkles,
  Wand,
  X,
} from "lucide-react";
import symbol from "../../assets/img/main-logo-symbol.png";

function Description() {
  return (
    <div>
      <div className="main">
        <div className="content-box">
          <h1>Szeretnéd újra jól érezni magad a testedben?</h1>
          <h3>
            Talán te is észrevetted már, hogy a bőröd szárazabb, fakóbb lett, a
            tested veszített a rugalmasságából, könnyebben puffadsz, vagy
            egyszerűen nem azt a nőt látod a tükörben, akinek érzed magad belül.
          </h3>
          <h3>Pedig a szépség nem tűnt el.</h3>
          <h3>
            A testednek csupán egy kis támogatásra, figyelemre és gondoskodásra
            van szüksége.
          </h3>
          <h3>
            A SZÉPÜLJ! programban egyszerű, természetes és könnyen alkalmazható
            napi mini rutinokkal támogatjuk a bőröd, a tested és a női energiáid
            megújulását.
          </h3>
          <div className="column-2">
            <div className="main-card">
              <ul>
                <li>
                  <X className="icon" />
                  Nem drasztikus diétákkal.
                </li>
                <li>
                  <X className="icon" />
                  Nem órákig tartó edzésekkel..
                </li>
                <li>
                  <X className="icon" />
                  Nem órákig tartó edzésekkel.
                </li>
                <li>
                  <X className="icon" />
                  Nem órákig tartó edzésekkel..
                </li>
              </ul>
              <h3>Képzeld el, hogy 30 nap múlva…</h3>
            </div>
            <div className="main-card">
              <ul>
                <li>
                  <FaCheck className="icon" /> ragyogóbb a bőröd
                </li>
                <li>
                  <FaCheck className="icon" /> feszesebbnek és rugalmasabbnak
                  érzed a tested
                </li>
                <li>
                  <FaCheck className="icon" /> csökken a puffadás
                </li>
                <li>
                  <FaCheck className="icon" /> több energiád van
                </li>
                <li>
                  <FaCheck className="icon" /> nő a kisugárzásod
                </li>
                <li>
                  <FaCheck className="icon" /> újra örömmel nézel a tükörbe
                </li>
                <li>
                  <FaCheck className="icon" /> jobban érzed magad a testedben
                </li>
              </ul>
            </div>
          </div>
          <h3>Szeress bele a testedbe.</h3>
          <h2>Mit kapsz a programban?</h2>
          <div className="column-4">
            <div className="main-card">
              <ul>
                <li className="icon-svg">
                  <Heart className="main-icon" />
                </li>
                <h3>1. Szépségrutin a ragyogóbb bőrért és feszesebb testért</h3>
                <p>
                  A program során olyan rövid, könnyen alkalmazható napi mini
                  rutinokat tanulsz, amelyek támogatják a bőröd és a
                  kötőszöveteid természetes megújulását.
                </p>
                <li>
                  <FaSeedling className="icon" />
                  arcfeszesítő és arcfiatalító gyakorlatok
                </li>
                <li>
                  <FaSeedling className="icon" />
                  lifting önmasszázs technikák
                </li>
                <li>
                  <FaSeedling className="icon" />
                  nyirokkeringést fokozó rutinok
                </li>
                <li>
                  <FaSeedling className="icon" />
                  szemkörnyék-frissítő praktikák
                </li>
                <li>
                  <FaSeedling className="icon" />
                  testfeszesítő mini rutinok
                </li>
                <li>
                  <FaSeedling className="icon" />
                  reggeli és esti szépségrituálék
                </li>
                <li>
                  <FaSeedling className="icon" />
                  természetes bőrápolási tippek
                </li>
                <li>
                  <FaSeedling className="icon" />
                  natúrkozmetikum-ajánlások
                </li>
              </ul>

              <p>Opcionálisan elkészíthető:</p>
              <ul>
                <li>
                  <FaSeedling className="icon" />
                  természetes feszesítő testgél
                </li>
                <li>
                  <FaSeedling className="icon" />
                  arcfeszesítő szérum
                </li>
                <li>
                  <FaSeedling className="icon" />
                  tápláló testolajok
                </li>
              </ul>
              <p>
                Ha nem szeretnél saját készítményeket készíteni, ajánlok
                természetes alternatívákat is.
              </p>
              <p>Ennek hatására:</p>
              <ul>
                <li>
                  <FaCheck className="icon" />
                  ragyogóbb és hidratáltabb bőr
                </li>
                <li>
                  <FaCheck className="icon" />
                  feszesebb kontúrok
                </li>
                <li>
                  <FaCheck className="icon" />
                  csökken a stressz szinted
                </li>
                <li>
                  <FaCheck className="icon" />
                  rugalmasabb kötőszövet
                </li>
              </ul>
            </div>
            <div className="main-card">
              {" "}
              <ul>
                <li className="icon-svg">
                  <Leaf className="main-icon" />
                </li>
                <p>
                  2.Táplálkozás a szebb bőrért és a fiatalosabb megjelenésért
                </p>
                <p>A szépség nem csak a tükör előtt kezdődik.</p>
                <p>
                  Megnézzük, hogyan támogathatod a bőröd és a tested állapotát
                  egyszerű, gyulladáscsökkentő táplálkozással.
                </p>
                <li>
                  <FaSeedling className="icon" />
                  gyulladáscsökkentő szépségtáplálkozás
                </li>
                <li>
                  <FaSeedling className="icon" />
                  bélflóra-regenerálás
                </li>
                <li>
                  <FaSeedling className="icon" /> kollagéntermelést támogató
                  ételek
                </li>
                <li>
                  <FaSeedling className="icon" /> gyors nyári receptek
                </li>{" "}
                <li>
                  <FaSeedling className="icon" />
                  vegán és vegyes étrendi lehetőségek
                </li>{" "}
                <li>
                  <FaSeedling className="icon" />
                  hidratálási útmutató
                </li>{" "}
                <li>
                  <FaSeedling className="icon" />
                  bőrtámogató élelmiszerek
                </li>
              </ul>
              <p>Ennek hatására:</p>
              <ul>
                <li>
                  <FaCheck className="icon" />
                  tisztább bőrkép
                </li>
                <li>
                  <FaCheck className="icon" /> kevesebb puffadás
                </li>
                <li>
                  <FaCheck className="icon" /> jobb emésztés
                </li>
                <li>
                  <FaCheck className="icon" />
                  több energia
                </li>
                <li>
                  <FaCheck className="icon" />
                  egészségesebb és üdébb megjelenés
                </li>
              </ul>
              <p>Szeress bele a testedbe.</p>
            </div>
            <div className="main-card">
              {" "}
              <ul>
                {" "}
                <li className="icon-svg">
                  <Salad className="main-icon" />
                </li>
                <h3>3. Természetes szépségtámogatás belülről</h3>
                <p>
                  Természetgyógyász és életmódterapeuta szemlélet alapján
                  áttekintjük azokat a természetes lehetőségeket, amelyek
                  támogatják a bőr, a haj és a kötőszövet egészségét.
                </p>
                <li>
                  <FaSpa className="icon" />
                  vitaminok és ásványi anyagok
                </li>
                <li>
                  <FaSpa className="icon" />
                  természetes táplálékkiegészítő ajánlások
                </li>
                <li>
                  {" "}
                  <FaSpa className="icon" />
                  bőr- és kötőszövet-támogatás
                </li>
                <li>
                  {" "}
                  <FaSpa className="icon" />
                  kollagénképzést támogató tápanyagok
                </li>
                <li>
                  <FaSpa className="icon" />
                  hormonális egyensúlyt támogató lehetőségek
                </li>
              </ul>
              <p>Ennek hatására:</p>
              <ul>
                <li>
                  <FaCheck className="icon" />
                  támogathatod a bőr regenerációját
                </li>
                <li>
                  <FaCheck className="icon" /> javulhat a bőr rugalmassága
                </li>
                <li>
                  <FaCheck className="icon" /> erősödhet a kötőszövet
                </li>
                <li>
                  <FaCheck className="icon" /> támogathatod a szervezet
                  természetes egyensúlyát
                </li>
              </ul>
            </div>
            <div className="main-card">
              <ul>
                {" "}
                <li className="icon-svg">
                  <Rose className="main-icon" />
                </li>
                <p>4. Női energia és kisugárzás</p>
                <p>A valódi szépség nem csak a bőr állapotában jelenik meg.</p>
                <p>
                  A női energia, a belső egyensúly és az önmagaddal való
                  kapcsolat ugyanúgy megmutatkozik a kisugárzásodban.
                </p>
                <li> energetikai tisztító gyakorlatok</li>
                <li> női energetikai testmunka</li>
                <li>vezetett meditációk</li>
                <li>önkapcsolati gyakorlatok</li>
                <li>önszeretet-rituálék</li>
                <li>stresszoldó technikák</li>
                <li> nőiességet támogató eszközök</li>
              </ul>
              <p>Ennek hatására:</p>
              <ul>
                <li>
                  <FaCheck className="icon" /> erősebb női kisugárzás
                </li>
                <li>
                  <FaCheck className="icon" /> nagyobb önbizalom
                </li>
                <li>
                  <FaCheck className="icon" /> nyugodtabb idegrendszer
                </li>
                <li>
                  <FaCheck className="icon" /> harmonikusabb kapcsolat
                  önmagaddal
                </li>
                <li>
                  <FaCheck className="icon" /> több életenergia
                </li>
              </ul>
              <p> Szeress bele a testedbe.</p>
              <h3>Heti élő Zoom találkozók</h3>
              <h3>Minden héten élő Zoom alkalommal találkozunk.</h3>
              <h3>
                A női test, a nőiesség, a hormonális változások, a szépség, az
                önkapcsolat és az energetikai egyensúly témáit járjuk körül.
              </h3>
              <h3>
                Kérdezhetsz, megoszthatod a tapasztalataidat, és személyes
                támogatást is kapsz.
              </h3>
              <h3>
                Ha nem tudsz részt venni élőben, minden felvétel visszanézhető.
              </h3>

              <h3>Zárt Facebook közösség</h3>
              <h3>
                A teljes hónap során együtt haladunk egy támogató női
                közösségben.
              </h3>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="content-box">
        <h1>Mire számíthatsz?</h1>
        <div className="column-2">
          <div>
            <h2>A program végére sok nő azt tapasztalja, hogy:</h2>
            <ul>
              <li>
                {" "}
                <Sprout className="icon" />
                könnyedebbnek, energikusabbnak érzi magát
              </li>

              <li>
                {" "}
                <Sprout className="icon" />
                tudatosabban étkezik, újra szeret mozogni
              </li>

              <li>
                {" "}
                <Sprout className="icon" />
                javul a napi ritmusa, nőiesebbnek érzi magát
              </li>
              <li>
                {" "}
                <Sprout className="icon" />
                magabiztosabban néz tükörbe, jobb kapcsolata van önmagával
              </li>
            </ul>
            <Link to="/Contact" className="contact-btn">
              Jelentkezem!
            </Link>
          </div>
          <div className="symbol-container">
            <img src={symbol} alt="About kép" className="symbol-img" />
          </div>
        </div>
      </div>

      <div className="main">
        <div className="content-box">
          <h1>A három alappillér, amire építünk</h1>
          <div className="column-3">
            <div>
              <div className="card">
                <h3>TEST- Regeneráció belülről</h3>

                <p>35 felett a női test más támogatást igényel.</p>

                <div>
                  <div>
                    <h3>Ezekre fókuszálunk:</h3>

                    <ul>
                      <li>
                        <FaSeedling className="icon" />
                        gyulladáscsökkentő életmódra
                      </li>
                      <li>
                        <FaSeedling className="icon" />
                        bélflóra támogatásra
                      </li>
                      <li>
                        <FaSeedling className="icon" />
                        hormonbarát étkezési szemléletre
                      </li>
                      <li>
                        <FaSeedling className="icon" />
                        energiaszint támogatására
                      </li>
                      <li>
                        <FaSeedling className="icon" />
                        testsúlyoptimalizálásra
                      </li>
                      <li>
                        <FaSeedling className="icon" />
                        alvás támogatására
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
                    <FaSeedling className="icon" />
                    Nem kell sportosnak lenned.
                  </li>
                  <li>
                    <FaSeedling className="icon" />
                    Nem kell fittnek lenned..
                  </li>
                  <li>
                    <FaSeedling className="icon" />
                    Nem kell már most motiváltnak lenned.
                  </li>
                  <li>
                    <FaSeedling className="icon" />A rendszer fokozatosan épít
                    fel.
                  </li>
                </ul>
                <div>
                  <div>
                    <h3>Lépésről, lépésre:</h3>

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
                    <FaSeedling className="icon" /> A túlterheltség, a régi
                    lenyomatok.
                  </li>
                  <li>
                    <FaSeedling className="icon" /> Az önmagadtól való
                    eltávolodás.
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
            <h2>
              Nem egyedül mész végig ezen! Ez nem egy letölthető kurzus, amit
              félbehagysz, ez egy megtartó női folyamat.
            </h2>

            <h3> Hétről, hétre:</h3>
            <ul>
              <li>
                <FaSeedling className="icon" /> heti 3 élő Zoom- lehetőséged van
                kérdezni, beszélgetni
              </li>
              <li>
                <FaSeedling className="icon" /> heti életmód előadás
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
      </div>
    </div>
  );
}

export default Description;
