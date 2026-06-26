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
  HeartPlusIcon,
  HeartXIcon,
  Gift,
  GemIcon,
  GiftIcon,
} from "lucide-react";
import symbol from "../../assets/img/main-logo-symbol.png";

function Description() {
  return (
    <div>
      <div className="main">
        <div className="content-box">
          <h1>Szeretnéd újra jól érezni magad a testedben?</h1>
          <h2>
            Talán te is észrevetted már, hogy a bőröd szárazabb, fakóbb lett, a
            tested veszített a rugalmasságából, könnyebben puffadsz, vagy
            egyszerűen nem azt a nőt látod a tükörben, akinek érzed magad belül.
          </h2>
          <h3>Pedig a szépség nem tűnt el.</h3>
          <h3>
            A testednek csupán egy kis támogatásra, figyelemre és gondoskodásra
            van szüksége.
          </h3>
          <h3>
            A <span className="essense">Szépülj!</span> programban egyszerű,
            természetes és könnyen alkalmazható napi mini rutinokkal támogatjuk
            a bőröd, a tested és a női energiáid megújulását.
          </h3>
          <div>
            <div>
              <ul>
                <li>
                  <HeartXIcon className="icon" />
                  Nem drasztikus diétákkal
                </li>
                <li>
                  <HeartXIcon className="icon" />
                  Nem órákig tartó edzésekkel
                </li>
                <li>
                  <HeartXIcon className="icon" />
                  Nem órákig tartó edzésekkel
                </li>
                <li>
                  <HeartXIcon className="icon" />
                  Nem órákig tartó edzésekkel
                </li>
              </ul>
            </div>
            <div>
              <h3>Képzeld el, hogy 30 nap múlva…</h3>
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
          <h3>Szeress bele a testedbe!</h3>
          <h2>Mit kapsz a programban?</h2>
          <div className="column-2">
            <div className="card">
              <ul>
                <li className="icon-svg">
                  <Heart className="main-icon" />
                </li>
                <h2>1. Szépségrutin a ragyogóbb bőrért és feszesebb testért</h2>
                <p>
                  A program során olyan rövid, könnyen alkalmazható napi mini
                  rutinokat tanulsz, amelyek támogatják a bőröd és a
                  kötőszöveteid természetes megújulását.
                </p>
                <li>
                  <FaSpa className="icon" />
                  arcfeszesítő és arcfiatalító gyakorlatok
                </li>
                <li>
                  <FaSpa className="icon" />
                  lifting önmasszázs technikák
                </li>
                <li>
                  <FaSpa className="icon" />
                  nyirokkeringést fokozó rutinok
                </li>
                <li>
                  <FaSpa className="icon" />
                  szemkörnyék-frissítő praktikák
                </li>
                <li>
                  <FaSpa className="icon" />
                  testfeszesítő mini rutinok
                </li>
                <li>
                  <FaSpa className="icon" />
                  reggeli és esti szépségrituálék
                </li>
                <li>
                  <FaSpa className="icon" />
                  természetes bőrápolási tippek
                </li>
                <li>
                  <FaSpa className="icon" />
                  natúrkozmetikum-ajánlások
                </li>
              </ul>

              <p>Opcionálisan elkészíthető:</p>
              <ul>
                <li>
                  <FaSpa className="icon" />
                  természetes feszesítő testgél
                </li>
                <li>
                  <FaSpa className="icon" />
                  arcfeszesítő szérum
                </li>
                <li>
                  <FaSpa className="icon" />
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
            <div className="card">
              {" "}
              <ul>
                <li className="icon-svg">
                  <Salad className="main-icon" />
                </li>
                <h2>
                  2.Táplálkozás a szebb bőrért és a fiatalosabb megjelenésért
                </h2>
                <p>A szépség nem csak a tükör előtt kezdődik.</p>
                <p>
                  Megnézzük, hogyan támogathatod a bőröd és a tested állapotát
                  egyszerű, gyulladáscsökkentő táplálkozással.
                </p>
                <li>
                  <FaSpa className="icon" />
                  gyulladáscsökkentő szépségtáplálkozás
                </li>
                <li>
                  <FaSpa className="icon" />
                  bélflóra-regenerálás
                </li>
                <li>
                  <FaSpa className="icon" />
                  kollagéntermelést támogató ételek
                </li>
                <li>
                  <FaSpa className="icon" />
                  gyors nyári receptek
                </li>{" "}
                <li>
                  <FaSpa className="icon" />
                  vegán és vegyes étrendi lehetőségek
                </li>{" "}
                <li>
                  <FaSpa className="icon" />
                  hidratálási útmutató
                </li>{" "}
                <li>
                  <FaSpa className="icon" />
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
                  <FaCheck className="icon" />
                  kevesebb puffadás
                </li>
                <li>
                  <FaCheck className="icon" />
                  jobb emésztés
                </li>
                <li>
                  <FaCheck className="icon" />
                  több energia{" "}
                </li>
                <li>
                  <FaCheck className="icon" />
                  egészségesebb és üdébb megjelenés
                </li>
              </ul>
            </div>
            <div className="card">
              {" "}
              <ul>
                {" "}
                <li className="icon-svg">
                  <Leaf className="main-icon" />
                </li>
                <h2>3. Természetes szépségtámogatás belülről</h2>
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
                  <FaCheck className="icon" />
                  javulhat a bőr rugalmassága
                </li>
                <li>
                  <FaCheck className="icon" />
                  erősödhet a kötőszövet
                </li>
                <li>
                  <FaCheck className="icon" />
                  támogathatod a szervezet természetes egyensúlyát
                </li>
              </ul>
            </div>
            <div className="card">
              <ul>
                {" "}
                <li className="icon-svg">
                  <Rose className="main-icon" />
                </li>
                <h2>4. Női energia és kisugárzás</h2>
                <p>A valódi szépség nem csak a bőr állapotában jelenik meg.</p>
                <p>
                  A női energia, a belső egyensúly és az önmagaddal való
                  kapcsolat ugyanúgy megmutatkozik a kisugárzásodban.
                </p>
                <li>
                  <FaSpa className="icon" />
                  energetikai tisztító gyakorlatok
                </li>
                <li>
                  <FaSpa className="icon" />
                  női energetikai testmunka
                </li>
                <li>
                  <FaSpa className="icon" />
                  vezetett meditációk
                </li>
                <li>
                  <FaSpa className="icon" />
                  önkapcsolati gyakorlatok
                </li>
                <li>
                  <FaSpa className="icon" />
                  önszeretet-rituálék
                </li>
                <li>
                  <FaSpa className="icon" />
                  stresszoldó technikák
                </li>
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
            </div>
            <div></div>
          </div>
          <h1> Szeress bele a testedbe!</h1>{" "}
          <Link to="/Contact" className="contact-btn">
            Jelentkezem!
          </Link>
          <ul>
            <li>
              <FaCheck className="icon" />
              Heti élő Zoom találkozók
            </li>
            <li>
              <FaCheck className="icon" />
              Minden héten élő Zoom alkalommal találkozunk.
            </li>
            <li>
              <FaCheck className="icon" />A női test, a nőiesség, a hormonális
              változások, a szépség, az önkapcsolat és az energetikai egyensúly
              témáit járjuk körül.
            </li>
            <li>
              <FaCheck className="icon" />
              Kérdezhetsz, megoszthatod a tapasztalataidat, és személyes
              támogatást is kapsz.
            </li>
            <li>
              <FaCheck className="icon" />
              Ha nem tudsz részt venni élőben, minden felvétel visszanézhető.
            </li>

            <li>
              <FaCheck className="icon" />
              Zárt Facebook közösség
            </li>
            <li>
              <FaCheck className="icon" />A teljes hónap során együtt haladunk
              egy támogató női közösségben.
            </li>
          </ul>
        </div>
      </div>
      <div className="content-box">
        <h1>Itt találod meg:</h1>
        <div className="column-2">
          <div>
            <ul>
              <li>
                {" "}
                <FaSeedling className="icon" />a napi feladatokat
              </li>

              <li>
                {" "}
                <FaSeedling className="icon" />a videókat
              </li>

              <li>
                {" "}
                <FaSeedling className="icon" />
                az ajánlásokat
              </li>
              <li>
                {" "}
                <FaSeedling className="icon" />a Zoom-felvételeket
              </li>
              <li>
                {" "}
                <FaSeedling className="icon" />a közösségi támogatást
              </li>
            </ul>
            <h2>Minden anyag visszanézhető és bármikor elérhető.</h2>
          </div>
          <div className="symbol-container">
            <img src={symbol} alt="About kép" className="symbol-img" />
          </div>
          <Link to="/Contact" className="contact-btn">
            Jelentkezem!
          </Link>
        </div>
      </div>

      <div className="main">
        <div className="content-box">
          <h1>Napi inspiráció és támogatás</h1>
          <h2>A program minden napján jelen leszek a csoportban.</h2>
          <div>
            <div>
              <div>
                <h3>Minden nap érkezik:</h3>

                <div>
                  <div>
                    <ul>
                      <li>
                        <FaSeedling className="icon" />
                        inspiráló kérdés
                      </li>
                      <li>
                        <FaSeedling className="icon" />
                        rövid gyakorlat
                      </li>
                      <li>
                        <FaSeedling className="icon" />
                        önkapcsolati feladat
                      </li>
                      <li>
                        <FaSeedling className="icon" />
                        szépségtipp
                      </li>
                      <li>
                        <FaSeedling className="icon" />
                        nőiességet támogató eszköz
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3>
                      Nem csak tanulni fogsz, lépésről lépésre meg is valósítod!
                    </h3>
                    <span className="essense">Ajándék</span>
                    <ul>
                      <li>
                        <GiftIcon className="icon" />
                        Több mint 40 online jógaóra
                      </li>
                      <li>
                        <GiftIcon className="icon" />A program teljes ideje
                        alatt hozzáférést kapsz a YogaArt online jógatárához.
                      </li>
                      <li>
                        <GiftIcon className="icon" />
                        Lágy női jóga, energetizáló gyakorlások, stresszoldó és
                        testet támogató órák segítik a folyamatot.
                      </li>
                    </ul>

                    <h2>Kinek ajánlott?</h2>
                    <h3>Neked szól a program, ha szeretnéd:</h3>

                    <ul>
                      <li>
                        <FaSeedling className="icon" />
                        ragyogóbbá tenni a bőrödet
                      </li>
                      <li>
                        <FaSeedling className="icon" />
                        feszesebbé és rugalmasabbá tenni a testedet
                      </li>
                      <li>
                        <FaSeedling className="icon" />
                        csökkenteni a narancsbőrt
                      </li>
                      <li>
                        {" "}
                        <FaSeedling className="icon" />
                        javítani a száraz bőr állapotát
                      </li>
                      <li>
                        {" "}
                        <FaSeedling className="icon" />
                        csökkenteni a puffadást
                      </li>
                      <li>
                        {" "}
                        <FaSeedling className="icon" />
                        több energiát érezni
                      </li>
                      <li>
                        {" "}
                        <FaSeedling className="icon" />
                        erősíteni a női kisugárzásodat
                      </li>
                      <li>
                        <FaSeedling className="icon" />
                        újra jól érezni magad a testedben
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h3> Mit tapasztalhatsz a program végére?</h3>
                <ul>
                  <li>
                    <FaSeedling className="icon" />
                    ragyogóbb és hidratáltabb bőr
                  </li>
                  <li>
                    <FaSeedling className="icon" />
                    feszesebb és rugalmasabb test
                  </li>
                  <li>
                    <FaSeedling className="icon" />
                    tónusosabb megjelenés
                  </li>
                  <li>
                    <FaSeedling className="icon" />
                    jobb emésztés
                  </li>
                  <li>
                    <FaSeedling className="icon" />
                    több energia
                  </li>
                  <li>
                    <FaSeedling className="icon" />
                    nagyobb önbizalom
                  </li>
                  <li>
                    <FaSeedling className="icon" />
                    erősebb női kisugárzás
                  </li>
                  <li>
                    <FaSeedling className="icon" />
                    harmonikusabb kapcsolat a testeddel
                  </li>
                </ul>
                <div></div>
              </div>
            </div>
          </div>{" "}
          <div>
            <h1>Szépülj!</h1>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
