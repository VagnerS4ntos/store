"use client";
import React from "react";
import Vendas from "../components/Balanço/Vendas";
import Header from "../components/Header";

function page() {
  return (
    <>
      <Header />
      <main className="px-2 md:max-w-7xl md:w-4/5 mx-auto">
        <Vendas />
      </main>
    </>
  );
}

export default page;
