let j1 = "";  //papel
let j2 = "";  //piedra

// function demo() {
//     alert("Juego en desarrollo")
// }

function seleccionaJ1(option) {
    j1 = option;
    if(j1 === "piedra") {
        document.getElementById("j1Papel").classList.add("disabled");
        document.getElementById("j1Tijeras").classList.add("disabled");        
    } else if(j1 === "papel") {
        document.getElementById("j1Piedra").classList.add("disabled");
        document.getElementById("j1Tijeras").classList.add("disabled");  
    } else if (j1 === "tijeras") {
        document.getElementById("j1Piedra").classList.add("disabled");
        document.getElementById("j1Papel").classList.add("disabled"); 
    }
    habilitar();
}

function seleccionaJ2(option) {
    j2 = option;
    if(j2 === "piedra") {
        document.getElementById("j2Papel").classList.add("disabled");
        document.getElementById("j2Tijeras").classList.add("disabled");        
    } else if(j2 === "papel") {
        document.getElementById("j2Piedra").classList.add("disabled");
        document.getElementById("j2Tijeras").classList.add("disabled");  
    } else if (j2 === "tijeras") {
        document.getElementById("j2Piedra").classList.add("disabled");
        document.getElementById("j2Papel").classList.add("disabled"); 
    }
    habilitar();
}

function habilitar() {
    if(j1 !== "" && j2 !== "") {
        document.getElementById("jugar").classList.remove("disabled");
    }
}

function jugar() {
    // Empates
    if (j1 === 'piedra' && j2 === 'piedra') {
        document.getElementById("ganador").innerHTML = "Empate";
    } else if (j1 === 'papel' && j2 === 'papel') {
        document.getElementById("ganador").innerHTML = "Empate";
    } else if (j1 === 'tijeras' && j2 === 'tijeras') {
        document.getElementById("ganador").innerHTML = "Empate";
    }
    
    // GANA J1
    if(j1 === 'piedra' && j2 === 'tijeras') {
        document.getElementById("ganador").innerHTML = "Gana J1";
    } else if(j1 === 'papel' && j2 === 'piedra') {
        document.getElementById("ganador").innerHTML = "Gana J1";
    } else if(j1 === 'tijeras' && j2 === 'papel') {
        document.getElementById("ganador").innerHTML = "Gana J1";
    }
    
    // GANA J2
    if(j1 === 'piedra' && j2 === 'papel') {
        document.getElementById("ganador").innerHTML = "Gana J2";
    } else if(j1 === 'papel' && j2 === 'tijeras') {
        document.getElementById("ganador").innerHTML = "Gana J2";
    } else if(j1 === 'tijeras' && j2 === 'piedra') {
        document.getElementById("ganador").innerHTML = "Gana J2";
    }
}
