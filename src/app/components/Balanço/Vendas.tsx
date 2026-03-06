import React from "react";
import { BiSolidEdit, BiTrash } from "react-icons/bi";

function Vendas() {
  const teste = 10;

  //POSSO FAZER DUAS ABAS: UMA MOSTRA O BALANÇO E A OUTRA AS TRANSAÇÕES, POR DATA

  return (
    <div className="overflow-x-auto mt-5 border">
      <table className="min-w-full overflow-hidden">
        <thead className="bg-gray-100">
          <tr className="text-left font-semibold text-black uppercase">
            <th className="p-2">Produto</th>
            <th className="p-2">Valor</th>
            <th className="p-2 text-center w-60">QUANTIDADE VENDIDA</th>
            <th className="p-2 w-32 text-center">TOTAL</th>
          </tr>
        </thead>

        <tbody className="">
          <tr className="">
            <td className="p-2">Agulha</td>
            <td className="p-2 font-medium">
              {teste.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </td>
            <td className="p-2 font-medium text-center">10</td>
            <td className="p-2 font-medium text-center">
              {(teste * 10).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Vendas;
