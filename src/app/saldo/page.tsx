"use client";
import React from "react";
import TabelaVendas from "../components/Balanço/TabelaVendas";
import Header from "../components/Header";
import SelecionarData from "../components/Balanço/SelecionarData";

function page() {
  return (
    <>
      <Header />
      <main className="px-2 md:max-w-7xl md:w-4/5 mx-auto">
        <SelecionarData />
        <TabelaVendas />
      </main>
    </>
  );
}

export default page;
