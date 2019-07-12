class Pokemon {
    constructor(name, id, sprite) {
        this.name = name;
        this.id = id;
        this.sprite = sprite;
    }
}

function getPokemon() {
    return fetch('https://pokeapi.co/api/v2/pokemon/juan/')
        .then(response => response.json())
        .catch(error => console.warn("Éste Pokémon no existe"));
}

let pokemon;

getPokemon()
    .then((data) => {
        pokemon = new Pokemon(data.name, data.id, data.sprites.front_default);
}).catch(() => alert(error));

console.log(pokemon);

setTimeout(function () {
    console.log(pokemon);
}, 3000);