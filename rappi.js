let horas = Number(prompt("Numero de horas trabajadas:"));
let domicilios = Number(prompt("Numero de domicilios entregados:"));
let salario = (domicilios * 2500) + (horas * 6000);

alert("Has ganado por domicilios $" + (domicilios * 2500))
alert("Has ganado por horas $" + (horas * 6000))
alert("Su salario sera $" + salario );