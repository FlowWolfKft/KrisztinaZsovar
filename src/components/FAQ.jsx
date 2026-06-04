import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSeedling } from "react-icons/fa";

function FAQ() {
  const faqs = [
    {
      question: "Mi van, ha teljesen kezdő vagyok?",
      answer:
        "A programot úgy alakítottam ki, hogy minden szinten könnyen követhető legyen, akkor is, ha évek óta jógázol, akkor is, ha utoljára tesi órán mozogtál. A részvétel kortól és edzettségtől független.",
    },
    {
      question: "Mi van, ha nincs időm?",
      answer:
        "A rendszer úgy lett kialakítva, hogy beépíthető legyen a való életbe.",
    },
    {
      question: "Mi van, ha lemaradok az élőkről",
      answer: "Minden visszanézhető, így, ha lemaradtál, könnyen pótolhatod.",
    },
    {
      question: "Mi van, ha sosem jógáztam?",
      answer:
        "Semmi gond. Lesznek egyszerű, kezdő, 10 perces mozgások, amik elindítanak. ",
    },
    {
      question: "Mi van, ha hormonálisan kibillentnek érzem magam?",
      answer:
        "A program egyik fő célja, hogy ezeket a diszkomfrotokat átdolgozzuk, a hormonális és lelki egyensúlyunkat megteremtsük.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="content-box faq-section">
      <h2>Gyakori kérdések</h2>

      {faqs.map((faq, index) => (
        <div key={index} className="faq-item" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
          <button
            className="faq-question"
          >
            <span>{faq.question}</span>
            <span className="sign">{openIndex === index ? "−" : "+"}</span>
          </button>

          {openIndex === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
export default FAQ;
