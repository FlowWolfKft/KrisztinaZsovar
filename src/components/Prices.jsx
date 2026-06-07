import React from "react";
import { Link } from "react-router-dom";
import { FaSeedling } from "react-icons/fa";
import { RiH3 } from "react-icons/ri";
import simbolImg from "../../assets/img/main-logo-symbol.png";

function Prices() {
  const prices = [
    {
      title: "Early Bird",
      price: "110.000 Ft",
      note: "június 14-ig",
    },
    {
      title: "Normál ár",
      price: "160.000 Ft",
      note: "június 15-től",
    },
    {
      title: "Páros jelentkezés",
      price: "200.000 Ft",
      note: "2 fő",
    },
  ];

  return (
    <div className="content-box">
      <h1>Árak</h1>

      <h3 className="price-subtitle">
        A helyek száma limitált! Személyes támogatással kísért folyamat.
      </h3>

      <div className="prices-grid">
        {prices.map((item, index) => (
          <div className="price-card" key={index}>
            <h3>{item.title}</h3>
            <p className="price">{item.price}</p>
            <span>{item.note}</span>
          </div>
        ))}
      </div>

      <Link to="/contact" className="contact-btn">
        Jelentkezem!
      </Link>
    </div>
  );
}

export default Prices;
