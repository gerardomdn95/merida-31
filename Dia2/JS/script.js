// alert("Funciona");

// const nombre = "Gerardo";   // String
// let edad = 17;              // Number
// let mayorDeEdad = false;     // Boolean

// let x = 30;
// // let y = 9;

// let suma = x + y;
// let resta = x - y;
// let multiplicacion = x * y;
// let divisiones = y / y;
// let modulo = 25 % 5;

// if(x % 5 === 0 && x % 10 === 0) {    
//     console.log(x + " es múltiplo de 5 y de 10");
// } else {
//     console.log(x + " no es múltiplo de 5 y de 10");
// }

// console.log(suma);
// console.log(resta);
// console.log(multiplicacion);
// console.log(divisiones);
// console.log(modulo);

// console.log(nombre);
// console.log(edad);
// console.log(mayorDeEdad);
// console.log(x);
// console.log("Hola, mi nombre es " + nombre + " y me faltan " + x + " años para cumplir " + suma);

// if(edad > 17 && mayorDeEdad === true) {
//     console.log("Probablemente esta persona está viva");
// }

// if(edad >= 18) {
//     mayorDeEdad = true;
//     console.log("Soy mayor de edad");
//     console.log(mayorDeEdad);
//     if (mayorDeEdad === true) {
//         console.log("Puedes ir a votar");
//     } else {
//         console.log("Algo extraño ocurrió");
//     }
// } else {
//     mayorDeEdad = false;
//     console.log("Soy menor de edad");
//     console.log(mayorDeEdad);
// }

// for(let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// 1 al 100
// Número es múltiplo de 3 "Fizz"
// Número es múltiplo de 5 "Buzz"
// Número es múltiplo de 5 y 3 "Fizz Buzz"


// 1 => 100
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i + " Fizz buzz");
//     } else if (i % 5 === 0) {
//         console.log(i + " Buzz");
//     } else if (i % 3 === 0) {
//         console.log(i + " Fizz");
//     } else {
//         console.log(i);
//     }
// }

// 100 => 1
for (let i = 100; i >= 1; i--) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " Fizz buzz");
    } else if (i % 5 === 0) {
        console.log(i + " Buzz");
    } else if (i % 3 === 0) {
        console.log(i + " Fizz");
    } else {
        console.log(i);
    }
}