export const currentYear = new Date().getFullYear();
export const anos: number[] = [];
for (let i = 2026; i <= currentYear + 1; i++) {
  anos.push(i);
}

export const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

//Converte um número para moeda
// export function convertNumberToCurrency(value: string | number) {
//   const validNumber = Number(value.toString().replace(",", "."));

//   return validNumber.toLocaleString("pt-br", {
//     style: "currency",
//     currency: "BRL",
//   });
// }
