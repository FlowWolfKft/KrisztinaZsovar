import React from "react";
import { Link } from "react-router-dom";
import { FaSeedling } from "react-icons/fa";

function FeedBack() {
  const feedbacks = [
    {
      text: "Ebben az elfogadó, megengedő, mégis kitartó közösségben nagyon élvezem a folyamatot.",
      author: "",
    },
    {
      text: "Mekkora megtartó ereje van egy közösségnek.",
      author: "",
    },
    {
      text: "Annyira finom, őszinte, lágy és tele önszeretettel minden mozdulat.",
      author: "Viktória",
    },
    {
      text: "Újra rátaláltam a jógára általad.",
      author: "Mariann",
    },
    {
      text: "Imádok veled jógázni.",
      author: "",
    },
    {
      text: "A recept, amit megosztottál, isteni. Már többször elkészítettem.",
      author: "Mariann",
    },
  ];

  return (
    <div className="content-box">
      <h1>Vélemények, visszajelzések</h1>

      <div className="feedback-grid">
        {feedbacks.map((item, index) => (
          <article className="feedback-card" key={index}>
            <span className="quote-mark">❝</span>

            <p>{item.text}</p>

            {item.author && (
              <span className="feedback-author">— {item.author}</span>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
export default FeedBack;
