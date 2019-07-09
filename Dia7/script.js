let producto = (a, b) => {
    return a * b;
}

let primeraPrueba = producto(3, 5);

// console.log(primeraPrueba);

let getRfc = (nom, apeP, apeM, anio, mes, dia, homo) => {
    let vocalesApellidoP = [];
    // 012345
    // Medina                6
    for (let i = 0; i <= apeP.length; i++) {
        if (apeP[i] === "a" ||
            apeP[i] === "e" || 
            apeP[i] === "i" ||
            apeP[i] === "o" ||
            apeP[i] === "u" ||
            apeP[i] === "A" ||
            apeP[i] === "E" || 
            apeP[i] === "I" ||
            apeP[i] === "O" ||
            apeP[i] === "U") {
                console.log(apeP[i]);
                vocalesApellidoP.push(apeP[i]);
        }
    }
    console.log(vocalesApellidoP);
    const apellidoP = (apeP.substring(0, 1) === 'Ñ' || apeP.substring(0, 1) === 'ñ' ? 'X' : apeP.substring(0, 1)) + vocalesApellidoP[0];

    const apellidoM = apeM.substring(0, 1);
    const nombre = nom.substring(0, 1);
    const anioNacimiento = anio.substring(2, 4);
    const mesNacimiento = mes;
    const diaNacimiento = dia;
    const homoclave = homo;

    const rfc = (apellidoP + apellidoM + nombre + anioNacimiento + mesNacimiento + diaNacimiento + homoclave).toUpperCase();
    return rfc;
}

// let RFC = getRfc("Gerardo", "Medina", "Romero", "1995", "07", "19", "XXX");
// console.log(RFC);

let edad = 23;
let esMayor = "";

// Es mayor de edad
// Es menor de edad

let evaluar = (edad) => {
    return edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
}

let resultado = evaluar(edad);

// console.log(resultado);

//                  0       1           2           3           4
const paises = ["México", "Bélgica", "Japón", "Sudáfrica", "Nueva Zelanda"];

//              Arreglo
let recorre = (elementos) => {
    let longest = "";
    elementos.forEach(indice => {
        longest = indice.length > longest.length ? indice : longest;
    });
    return longest;
}

let masLargo = recorre(paises);
console.log(masLargo);




function deshabilitar() {
    habilitar();
    ...
}

function habilitar() {
    a = 0
    b = 1
    c = habilitado
}