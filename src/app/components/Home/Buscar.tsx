"use client";
import React from "react";

function Buscar() {
  const [busca, setBusca] = React.useState("");

  return (
    <input
      type="text"
      value={busca}
      onChange={({ target }) => setBusca(target.value)}
      placeholder="Buscar produto"
      className="border rounded-md p-2 mt-5"
    />
  );
}

export default Buscar;
