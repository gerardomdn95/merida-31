
let j2 = "papel";

function print() {
    let j1 = document.getElementById("j1").value;
    document.getElementById("winner").innerHTML = "Cinta blanca";
    console.log(j1);
}

if (j1 === 'piedra' && j2 === 'piedra') {
    console.log('Empate');
} else if (j1 === 'papel' && j2 === 'papel') {
    console.log('Empate');
} else if (j1 === 'tijeras' && j2 === 'tijeras') {
    console.log('Empate');
}

// GANA J1
if(j1 === 'piedra' && j2 === 'tijeras') {
    console.log('Gana J1');
} else if(j1 === 'papel' && j2 === 'piedra') {
    console.log('Gana J1');
} else if(j1 === 'tijeras' && j2 === 'papel') {
    console.log('Gana J1');
}

// GANA J2
if(j1 === 'piedra' && j2 === 'papel') {
    console.log('Gana J2');
} else if(j1 === 'papel' && j2 === 'tijeras') {
    console.log('Gana J2');
} else if(j1 === 'tijeras' && j2 === 'piedra') {
    console.log('Gana J2');
} else {
    console.log('Inválido');
}