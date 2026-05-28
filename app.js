let numMax;
let numMin;
let numMid;

let num1, num2, num3;

let numeros = [];

while ( isNaN(num1) || isNaN(num2) || isNaN(num3)) {

    num1 = +prompt('Escribe el primer numero');
    num2 = +prompt('Escribe el segundo numero');
    num3 = +prompt('Escribe el tercer numero');

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("¡Error! Uno o más datos no son números válidos. Intenta de nuevo.");
    } else {
        numeros.push(num1)
        numeros.push(num2)
        numeros.push(num3)

        numMax = numeros[0];

        break;
    }
}

//Numero mayor
if (num1 >= num2 && num1 >= num3) {
    numMax = num1;
} else if (num2 >= num1 && num2 >= num3) {
    numMax = num2;
} else {
    numMax = num3;
}

//Numero menor 
if (num1 <= num2 && num1 <= num3) {
    numMin = num1;
} else if (num2 <= num1 && num2 <= num3) {
    numMin = num2;
} else {
    numMin = num3;
}

//Numero de en medio

numMid = (num1 + num2 + num3) - numMax - numMin;


if (num1 === num2 && num2 === num3) {
    console.log("Los tres números son iguales.");
} else if (num1 === num2 || num1 === num3 || num2 === num3) {
    console.log("Hay dos números iguales.");
}


console.log(`Salida Mayor a Menor: ${numMax}, ${numMid}, ${numMin}`);
console.log(`Salida Menor a Mayor: ${numMin}, ${numMid}, ${numMax}`);
