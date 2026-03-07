"use client";
import React from "react";
import { anos, months } from "@/app/utils/helpers";
import { useSelectDate } from "@/app/states/config";

function SelecionarData() {
  const { month, setMonth, year, setYear } = useSelectDate((state) => state);

  return (
    <section className="mt-5 sm:flex gap-4">
      <div>
        <label>Ano</label>
        <select
          className={`mt-1 p-2 w-full border rounded-md`}
          value={year}
          onChange={({ target }) => setYear(Number(target.value))}
        >
          {anos.map((year) => (
            <option key={year} value={year} className="text-black">
              {year}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Mês</label>
        <select
          className={`mt-1 p-2 w-full border rounded-md`}
          value={month}
          onChange={({ target }) => setMonth(Number(target.value))}
        >
          {months.map((mes, index) => (
            <option key={mes} value={index} className="text-black">
              {mes}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}

export default SelecionarData;
