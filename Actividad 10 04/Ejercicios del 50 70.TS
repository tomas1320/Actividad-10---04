
//50
let a: number = parseInt(prompt("Ingrese el primer número")!);
let b: number = parseInt(prompt("Ingrese el segundo número")!);

if (a === b) {
    console.log("Son iguales");
} else if (a > b) {
    console.log("El mayor es: " + a);
} else {
    console.log("El mayor es: " + b);
}


//51
let a1: number = parseInt(prompt("Ingrese un número")!);
let b2: number = parseInt(prompt("Ingrese otro número")!);

if (5 === a) {
    console.log("A es igual a 5");
}

if (10 === b) {
    console.log("B es igual a 10");
}

// 55
let num1: number = parseInt(prompt("Ingrese un número")!);

let resultado = (num1 >= 0) ? num1 : -num1;

console.log("Valor absoluto:", resultado);

//56

let a2 = parseInt(prompt("Ingrese A")!);
let b3 = parseInt(prompt("Ingrese B")!);

let menor = (a < b) ? a : b;

console.log("El menor es:", menor);


//57

let num2 = parseInt(prompt("Ingrese un número del 1 al 5")!);

switch(num2) {
    case 1: console.log("Uno"); break;
    case 2: console.log("Dos"); break;
    case 3: console.log("Tres"); break;
    case 4: console.log("Cuatro"); break;
    case 5: console.log("Cinco"); break;
    default: console.log("Número inválido");
}

//58

let c1 = prompt("Ingrese un carácter")!;

switch(c1) {
    case ".": case ",": case ";": case ":":
        console.log("Signo de puntuación");
        break;
    case "0": case "1": case "2": case "3": case "4":
    case "5": case "6": case "7": case "8": case "9":
        console.log("Número");
        break;
    default:
        console.log("Otro carácter");
}

//59
let c2 = prompt("Ingrese un carácter")!.toLowerCase();

switch(c2) {
    case "a": case "e": case "i": case "o": case "u":
        console.log("Vocal");
        break;
    case "0": case "1": case "2": case "3": case "4":
    case "5": case "6": case "7": case "8": case "9":
        console.log("Número");
        break;
    default:
        console.log("Consonante");
}

//67
let num3 = parseInt(prompt("Número 1-5")!);

if (num3 === 1) console.log("Uno");
else if (num3 === 2) console.log("Dos");
else if (num3 === 3) console.log("Tres");
else if (num3 === 4) console.log("Cuatro");
else if (num3 === 5) console.log("Cinco");
else console.log("Error");

//61
let c3 = prompt("Ingrese carácter")!;

if (c3 >= '0' && c3 <= '9') {
    console.log("Número");
} else if (c3 === "." || c3 === "," || c3 === ";" || c3 === ":") {
    console.log("Puntuación");
} else {
    console.log("Otro");
}

//62
let c = prompt("Ingrese carácter")!.toLowerCase();

if (c >= '0' && c <= '9') {
    console.log("Número");
} else if ("aeiou".includes(c)) {
    console.log("Vocal");
} else {
    console.log("Consonante");
}

//63
let pass;

do {
    pass = parseInt(prompt("Ingrese contraseña")!);
} while (pass !== 1111);

console.log("Acceso permitido");

//64
let num4;

while (true) {
    num4 = parseInt(prompt("Ingrese número (0 para salir)")!);
    if (num4 === 0) break;

    console.log("Cuadrado:", num4 * num4);
}

//65
while (true) {
    let a = parseInt(prompt("Ingrese A")!);
    let b = parseInt(prompt("Ingrese B")!);

    console.log(a % b === 0 ? "Es múltiplo" : "No es múltiplo");
}

//66
while (true) {
    let a = parseInt(prompt("A")!);
    let b = parseInt(prompt("B")!);

    if (a % b === 0) console.log("A es múltiplo de B");
    else if (b % a === 0) console.log("B es múltiplo de A");
    else console.log("Ninguno es múltiplo");
}

//67
let i1 = 1;

while (i1 <= 10) {
    console.log(i1);
    i1++;
}

//68
let i = 26;

while (i >= 10) {
    if (i % 2 === 0) console.log(i);
    i--;
}

//69
let num = parseInt(prompt("Ingrese número positivo")!);
let contador = 0;

while (num > 0) {
    num = Math.floor(num / 10);
    contador++;
}

console.log("Tiene", contador, "cifras");
