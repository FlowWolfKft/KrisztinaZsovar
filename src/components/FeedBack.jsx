import React from "react";
import { Link } from "react-router-dom";
import { FaSeedling } from "react-icons/fa";

function FeedBack() {
  return (
    <div className="content-box">
      <h1>Vélemények, visszajelzések</h1>
      <p>
        „Ebben az elfogadó, megengedő, mégis kitartó közösségben nagyon élvezem
        a folyamatot.”
      </p>
      <p> „Mekkora megtartó ereje van egy közösségnek.”</p>
      <p>
        „Annyira finom, őszinte, lágy és tele önszeretettel minden mozdulat.” -
        Viktória
      </p>
      <p>„Újra rátaláltam a jógára általad.” - Mariann</p>
      <p>„Imádok veled jógázni.”</p>
      <p>
        „A recept, amit megosztottál, isteni. Már többször elkészítettem.” -
        Mariann
      </p>
    </div>
  );
}
export default FeedBack;
