import React from "react";
import ContactForm from "../ContactForm";
import { useSearchParams } from "react-router-dom";

function Contact() {
  const [searchParams] = useSearchParams();
  const forras = searchParams.get("forras");
  return (
    <div className="contact-bg">
      <div className="content-box">
        <h1>Jelentkezés</h1>
        <h3>
          Készen állsz, hogy több figyelmet fordíts Önmagadra? Add meg a
          nevedet, az email címedet és hamarosan felveszem Veled a kapcsolatot!
        </h3>

        <ContactForm forras={forras} />
        <div></div>
      </div>
    </div>
  );
}

export default Contact;
