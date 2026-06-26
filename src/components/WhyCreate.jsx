import React from "react";
import { Link } from "react-router-dom";
import { FaSeedling } from "react-icons/fa";
import aboutImg from "../../assets/img/07.webp";

function WhyCreate() {
  return (
    <div className="content-box">
      <h1>Ha érzed, hogy hív, várlak szeretettel!</h1>
      <div className="column-2">
        <div>
          <h2>Itt a helyed, ha:</h2>
          <h3>Nem tökéletesebb nővé szeretnél válni</h3>
          <h3>Nem egy újabb szépségideálnak akarsz megfelelni</h3>

          <h3>Csak szeretnél újra jól érezni magad a testedben</h3>
          <h3>Szeress bele a testedbe</h3>
        </div>
        <div>
          <img src={aboutImg} alt="About kép" className="about-img" />
        </div>
      </div>
    </div>
  );
}

export default WhyCreate;
