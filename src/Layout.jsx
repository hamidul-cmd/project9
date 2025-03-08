import React from "react";
import { Outlet } from "react-router";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function Layout() {
  return (
    <>
    <Header/>
      <main className="">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default Layout;
