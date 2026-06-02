import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React from "react";

function Layout() {
  return (
    <>
      {<NavBar />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
