import React from "react";
import Hero from "../components/Hero";
import Description from "../components/Description";
import WhyCreate from "../components/WhyCreate";
import Prices from "../components/Prices";
function Home() {
  return (
    <>
      <Hero></Hero>
      <Description></Description>
      <WhyCreate></WhyCreate>
      <Prices></Prices>
    </>
  );
}
export default Home;
