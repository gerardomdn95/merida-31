function getRfc(nom, apeP, apeM, anio, mes, dia, homo) {
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
    if(edad >= 18) {
        mayorDeEdad = "Es mayor de edad";
    } else {
        mayorDeEdad = "No es mayor de edad";
    }

    const apellidoM = apeM.substring(0, 1);
    const nombre = nom.substring(0, 1);
    const anioNacimiento = anio.substring(2, 4);
    const mesNacimiento = mes;
    const diaNacimiento = dia;
    const homoclave = homo;

    const rfc = (apellidoP + apellidoM + nombre + anioNacimiento + mesNacimiento + diaNacimiento + homoclave).toUpperCase();
    console.log(rfc);
}

getRfc("Gerardo", "Medina", "Romero", "1995", "07", "19", "XXX");
// MERG950719XXX