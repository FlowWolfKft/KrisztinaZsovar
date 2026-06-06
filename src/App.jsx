import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import CookieBanner from "./components/CookieBanner";
import About from "./components/About";
import Contact from "./components/Contact";
import Privacy from "./pages/Privacy";
import ScrollToHash from "./components/ScrollToHash";
import React from "react";

function App() {
  return (
    <>
      <ScrollToHash />
      <CookieBanner />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
