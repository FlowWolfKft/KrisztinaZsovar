import React from "react";

function PrivacyBilling() {
  return (
    <>
      <div className="content-box">
        <h2>Számlázás</h2>
        <p>
          Az adatkezelési folyamat a jogszabályoknak megfelelő számla kiállítása
          és a számviteli bizonylat-megőrzési kötelezettség teljesítése
          érdekében történik. Az Sztv. 169. § (1)-(2) bekezdése alapján a
          gazdasági társaságoknak a könyvviteli elszámolást közvetlenül és
          közvetetten alátámasztó számviteli bizonylatot meg kell őrizniük.
        </p>
        <h3>Kezelt adatok</h3>
        <p>Vásárló neve, telefonszáma, email címe, panasz tartalma.</p>
        <h3>Az adatkezelés időtartama</h3>
        <p>
          A kiállított számlákat az Sztv. 169. § (2) bekezdése alapján a számla
          kiállításától számított 8 évig meg kell őrizni.
        </p>
        <h3>Az adatkezelés jogalapja</h3>
        <p>
          Az általános forgalmi adóról szóló 2007. évi CXXVII. 159. § (1)
          bekezdése alapján a számla kibocsátása kötelező és azt számvitelről
          szóló 2000. évi C. törvény 169. § (2) bekezdése alapján 8 évig kell
          megőrizni [Rendelet 6. cikk (1) bekezdés c) pont szerinti
          adatkezelés].
        </p>

        <h2>Számlázással kapcsolatos adatfeldolgozás</h2>
        <p>Az adatfeldolgozó megnevezése: KBOSS.hu Kft.</p>

        <p>Az adatfeldolgozó székhelye: 1031 Budapest, Záhony utca 7</p>

        <p>Az adatfeldolgozó e-mail címe: info@szamlazz.hu</p>

        <p>
          Az Adatfeldolgozó az Adatkezelővel kötött szerződés alapján
          közreműködik a számviteli bizonylatok nyilvántartásában. Ennek során
          az Adatfeldolgozó az érintett nevét és címét a számviteli
          nyilvántartáshoz szükséges mértékben, a Sztv. 169. § (2) bekezdésének
          megfelelő időtartamban kezeli, ezt követően törli.
        </p>
      </div>
    </>
  );
}

export default PrivacyBilling;
