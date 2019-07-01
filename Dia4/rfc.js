function getRfc(nom, apeP, apeM, anio, mes, dia, homo) {
    let vocalesApellidoP = [];
    for (i = 0; i <= apeP.length; i++) {
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
                vocalesApellidoP.push(apeP[i]);
        }
    }
    const apellidoP = (apeP.substring(0, 1) === 'Ñ' || apeP.substring(0, 1) === 'ñ' ? 
                        'X' : peP.substring(0, 1)) + vocalesApellidoP[0];
    const apellidoM = apeM.substring(0, 1);
    const nombre = nom.substring(0, 1);
    const anioNacimiento = anio.substring(2, 4);
    const mesNacimiento = mes;
    const diaNacimiento = dia;
    const homoclave = homo;

    const rfc = (apellidoP + apellidoM + nombre + anioNacimiento + mesNacimiento + diaNacimiento + homoclave).toUpperCase();
    console.log(rfc);
}

getRfc("Gerardo", "Ñuna", "Romero", "1995", "07", "19", "XXX");
// MERG950719XXX