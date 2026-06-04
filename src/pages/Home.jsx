import React from "react";
import Hero from "../components/Hero";
import Description from "../components/Description";
import WhyCreate from "../components/WhyCreate";
import Prices from "../components/Prices";
import FAQ from "../components/FAQ";
import FeedBack from "../components/FeedBack";
function Home() {
  return (
    <>
      <Hero></Hero>
      <Description></Description>
      <WhyCreate></WhyCreate>
      <Prices></Prices>
      <FAQ></FAQ>
      <FeedBack></FeedBack>
    </>
  );
}
export default Home;
