// alert("Funciona!!!");
// let nombre = "Gerardo"; // String
// let edad = 23.9;        // Number
// let casado = false;     // Boolean

// Array
//              0          1            2             3           4            5           6
// let days = ["Glunes", "Mamartes", "Mierkoteles", "Juevebes", "Beviernes", "Sabadrink", "Dormingo"];

//              1    <    7
// for (let i = 0; i < days.length; i++) {
//     console.log(days[i]);
// }

// País con más letras
//                  0           1           2               3
// let countries = ["México", "Bélgica", "Estados Unidos", "Brasil"];
// let longest = "";

//     if(countries[i].length > longest.length) {
//         longest = countries[i];
//         // console.log(longest);
//     }
// }

// console.log(longest);

// Obtener dos arreglos, uno con números positivos y otro con números negativos
const numbers = [0, -5, 3, 9, -2, -3, -19];  // 7
let negatives = [];
let positives = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] < 0) {
        negatives.push(numbers[i]);
    } else if(numbers[i] > 0) {
        positives.push(numbers[i]);
    }
}

// 

console.log(negatives);
console.log(positives);

// Obtener un nuevo arreglo con el cuadrado de cada elemento

//         0   <=   9    --->      10
//         0   <    16   --->      16