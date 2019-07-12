// let sensei = {
//     name: "Gerardo",
//     age: 23,
//     program: "Cinta blanca",
//     isCool: true,
//     favoriteFood: ["Chilaquiles", "Poc Chuc", "Negra Modelo"],
//     teach: function() {
//         console.log("Hoy estoy enseñando objetos");
//     }
// };
// sensei.hungry = false;
// sensei.favoriteNumber = 19;

// console.log(sensei);
// console.log(sensei.name);
// console.log(sensei.age);
// console.log(sensei.program);
// sensei.teach();

// Server ----> Objeto
// Objeto = Variable

let pikachu = {
    name: "Pikachu",
    type: "Electric",
    height: "50 cm",
    weight: "2 kg",
    level: 100,
    gender: "male",
    description: "Es un ratón eléctrico que puede hablar.",
    moves: [
        "Thunderbolt",
        "Volt Tackle",
        "Thunder",
        "Surf"
    ],
    health: 100,
    sprite: "https://s3.amazonaws.com/kandipatternspatterns/characters/1509581877_Pikachu_Sprite.png",
    image: "https://staticuestudio.blob.core.windows.net/buhomag/2018/11/detective-pikachu-1.jpg?auto=compress,format",
    attack: function (move) {
        alert(`Pikachu used ${move}, it's super effective.`);
    }
}

let alakazam = {
    name: "Alakazam",
    type: "Psychic",
    height: "1.80 m",
    weight: "80 kg",
    level: 80,
    gender: "female",
    description: "Ésta es la última evolución de Abra",
    moves: [
        "Psychic",
        "Hypnosis",
        "Light Screen",
        "Shadow Ball"
    ],
    health: 100,
    sprite: "https://i.pinimg.com/736x/66/0e/3e/660e3ecf3f0870c70acb21578a54cd47--pokemon-blanket-pokemon-sprites.jpg",
    image: "https://vignette.wikia.nocookie.net/pokemonfanon/images/2/2a/Faba_Alakazam.png/revision/latest?cb=20171110183541",
    attack: function (move) {
        alert(`Alakazam used ${move}, it's super effective.`);
        // 100 --> 70 
        // 70 --> 40
        // 40 --> 10
        // 10 --> 0
        document.getElementById("pikachuHealth").value = document.getElementById("pikachuHealth").value - 30;

        if (document.getElementById("pikachuHealth").value <= 50 && document.getElementById("pikachuHealth").value >= 30) {
            document.getElementById("pikachuHealth").classList.remove("is-primary");
            document.getElementById("pikachuHealth").classList.add("is-warning");
        } else if (document.getElementById("pikachuHealth").value <= 30) {
            document.getElementById("pikachuHealth").classList.remove("is-warning");
            document.getElementById("pikachuHealth").classList.add("is-danger");
        } if (document.getElementById("pikachuHealth").value === 0) {
            alert("Pikachu has fainted");
        }
    }
}

let pokemons = [pikachu, alakazam];
console.log(pokemons);

// Pikachu
document.getElementById("pokeName").innerHTML = pikachu.name;
document.getElementById("pokeType").innerHTML = pikachu.type;
document.getElementById("pokeDescription").innerHTML = pikachu.description;
document.getElementById("pokeImage").src = pikachu.image;
document.getElementById("pokeAvatar").src = pikachu.sprite;
document.getElementById("moveOne").innerHTML = pikachu.moves[0];
document.getElementById("moveTwo").innerHTML = pikachu.moves[1];
document.getElementById("moveThree").innerHTML = pikachu.moves[2];
document.getElementById("moveFour").innerHTML = pikachu.moves[3];

// Alakazam
document.getElementById("alaName").innerHTML = alakazam.name;
document.getElementById("alaType").innerHTML = alakazam.type;
document.getElementById("alaDescription").innerHTML = alakazam.description;
document.getElementById("alaImage").src = alakazam.image;
document.getElementById("alaAvatar").src = alakazam.sprite;
document.getElementById("alaMoveOne").innerHTML = alakazam.moves[0];
document.getElementById("alaMoveTwo").innerHTML = alakazam.moves[1];
document.getElementById("alaMoveThree").innerHTML = alakazam.moves[2];
document.getElementById("alaMoveFour").innerHTML = alakazam.moves[3];


// function getPokemon() {
//     return fetch('https://pokeapi.co/api/v2/pokemon/dialga/')
//         .then(response => response.json())
//         .catch(error => console.warn(error));
// }


// let pokemon = getPokemon();
// console.log(pokemon);

// pokemon.then((data) => {
//     pokemon = data;
// })

// setTimeout(function() {
//     console.log(pokemon);
// }, 5000);


// class Pokemon {
//     constructor(name, id){
//         this.name = name;
//         this.id = id;
//     }
// }

// class WaterType extends Pokemon {
//     constructor(name, id, weakness) {
//         super(name, id);
//         this.weakness = weakness;
//     }
// }

// let Dialga = new Pokemon("Dialga", 300);
// console.log(Dialga);

// let squirtle = new WaterType("Squirtle", 7, "Grass");
// console.log(squirtle);


// Clase Pokemon
// Tipo Electrico
// Tipo 