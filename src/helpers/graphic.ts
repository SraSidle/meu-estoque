export const data = [
  { name: "Set", saidas: 3247, entradas: 4767, restante: 1520 },
  { name: "Oct", saidas: 3000, entradas: 4089, restante: 1089 },
  { name: "Nov", saidas: 2390, entradas: 3913, restante: 1523 },
  { name: "Dez", saidas: 3490, entradas: 4470, restante: 980 },
  { name: "Jan", saidas: 4000, entradas: 5900, restante: 1900 },
  { name: "Fev", saidas: 3000, entradas: 3894, restante: 894 },
  { name: "Mar", saidas: 2000, entradas: 3043, restante: 1043 },
];

export const dataBarras = [
  { name: "Set", saidas: 3247, entradas: 4767 },
  { name: "Oct", saidas: 3000, entradas: 4089 },
  { name: "Nov", saidas: 2390, entradas: 3913 },
  { name: "Dez", saidas: 3490, entradas: 4470 },
  { name: "Jan", saidas: 4000, entradas: 5900 },
  { name: "Fev", saidas: 3000, entradas: 3894 },
  { name: "Mar", saidas: 2000, entradas: 3043 },
];

export const dataTortas = [
  { name: "Bag Transversal", value: 200 },
  { name: "Bola de Futebol", value: 167 },
  { name: "Luva de futebol", value: 233 },
  { name: "Tornozeleira Basic", value: 134 },
  { name: "Mochila Sport", value: 106 },
  { name: "Meia Bike", value: 203 },
];

// valores aleatórios

//gráfico de tortas
let value1 = Math.floor(Math.random() * 80 + 3);
let value2 = Math.floor(Math.random() * 80 + 1);
let value3 = Math.floor(Math.random() * 80 + 2);
let value4 = Math.floor(Math.random() * 80 + 2);
let value5 = Math.floor(Math.random() * 80 + 1);
let value6 = Math.floor(Math.random() * 80 + 3);

//gráfico de linhas
const outputs1 = Math.floor(Math.random() * 70 + 5);
const outputs2 = Math.floor(Math.random() * 70 + 5);
const outputs3 = Math.floor(Math.random() * 70 + 5);
const outputs4 = Math.floor(Math.random() * 70 + 5);
const outputs5 = Math.floor(Math.random() * 70 + 5);
const outputs6 = Math.floor(Math.random() * 70 + 5);
const outputs7 = Math.floor(Math.random() * 70 + 5);
const outputs8 = Math.floor(Math.random() * 70 + 5);
const outputs9 = Math.floor(Math.random() * 70 + 5);
const outputs10 = Math.floor(Math.random() * 70 + 5);

//mudar valores do gráfico de tortas
// setInterval(() => {
//   let value1 = Math.floor(Math.random() * 10 + 1);
//   value2 = Math.floor(Math.random() * 10);
//   value3 = Math.floor(Math.random() * 10);
//   value4 = Math.floor(Math.random() * 10);
//   value5 = Math.floor(Math.random() * 10);
//   value6 = Math.floor(Math.random() * 10);
//   return value1
// }, 10000);

//mudar valores do gráfico de linhas
// setInterval(() => {
//  outputs1 = Math.floor(Math.random() * 100);
//  outputs2 = Math.floor(Math.random() * 100);
//  outputs3 = Math.floor(Math.random() * 100);
//  outputs4 = Math.floor(Math.random() * 100);
//  outputs5 = Math.floor(Math.random() * 100);
//  outputs6 = Math.floor(Math.random() * 100);
//  outputs7 = Math.floor(Math.random() * 100);
//  outputs8 = Math.floor(Math.random() * 100);
//  outputs9 = Math.floor(Math.random() * 100);
//  outputs10 = Math.floor(Math.random() * 100);
// }, 10000)

//página de saídas => gráfico de linhas
export const dataOutputsLines = [
  { horario: "08:00", saidas: outputs1 },
  { horario: "09:00", saidas: outputs2 },
  { horario: "10:00", saidas: outputs3 },
  { horario: "11:00", saidas: outputs4 },
  { horario: "12:00", saidas: outputs5 },
  { horario: "13:00", saidas: outputs6 },
  { horario: "14:00", saidas: outputs7 },
  { horario: "15:00", saidas: outputs8 },
  { horario: "16:00", saidas: outputs9 },
  { horario: "17:00", saidas: outputs10 },
];

//página de saídas => gráfico de tortas
export const dataOutputsTortas = [
  { name: "Bag Transversal", value: value1 },
  { name: "Bola de Futebol", value: value2 },
  { name: "Luva de futebol", value: value3 },
  { name: "Tornozeleira Basic", value: value4 },
  { name: "Mochila Sport", value: value5 },
  { name: "Meia Bike", value: value6 },
];
