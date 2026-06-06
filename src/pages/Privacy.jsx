import React from "react";
import { Link } from "react-router-dom";
import PrivacyIntro from "../components/privacy/PrivacyIntro";
import PrivacyCookies from "../components/privacy/PrivacyCookies";
import PrivacyContact from "../components/privacy/PrivacyContact";
import PrivacyBilling from "../components/privacy/PrivacyBilling";
import PrivacyRights from "../components/privacy/PrivacyRights";

//import "../privacy.css";

function Privacy() {
  return (
    <div className="privacy-page">
      <PrivacyIntro />
      <PrivacyCookies />
      <PrivacyContact />
      <PrivacyBilling />
      <PrivacyRights />
    </div>
  );
}
export default Privacy;
