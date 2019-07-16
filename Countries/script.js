
let demo = () => {

    console.log("hola");
};

demo();

let edad = 23;
let esMayor="";
let evaluar = (edad) =>{
    return edad >= 18 ? "Es mayor de edad" : "No es mayor de edad";
}

let resultado = evaluar(edad);
console.log(resultado);

const paises = ["Mexico", "Bélgica", "Japon", "Sudáfrica"];


let mayor = "";
let recorrer = (elementos) => {
    elementos.forEach(element => {
        mayor = element.length > mayor.length ? element : "";
            
    });
}

recorrer(paises);
console.log(mayor);