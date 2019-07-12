// let pikachu = {
//     name: "Pikachu",
//     type: "Electric",
//     level: 100,
//     gender: "male",
//     description: "Es un ratón eléctrico que puede hablar.",
//     image: "https://staticuestudio.blob.core.windows.net/buhomag/2018/11/detective-pikachu-1.jpg?auto=compress,format",
// }

// let alakazam = {
//     name: "Alakazam",
//     type: "Psychic",
//     level: 80,
//     gender: "female",
//     description: "Ésta es la última evolución de Abra",
//     image: "https://vignette.wikia.nocookie.net/pokemonfanon/images/2/2a/Faba_Alakazam.png/revision/latest?cb=20171110183541",
// }

// class Pokemon {
//     constructor(name, type, level, gender, description, image) {
//         this.name = name;
//         this.type = type;
//         this.level = level;
//         this.gender = gender;
//         this.description = description;
//         this.image = image;
//     }

//     attack() {
//         alert(`${this.name} attacked.`)
//     }
// }

// let pikachu = new Pokemon(
//     "Pikachu",
//     "Electric", 
//     30, 
//     "female", 
//     "Es un pokemon de tipo eléctrico", 
//     "https://staticuestudio.blob.core.windows.net/buhomag/2018/11/detective-pikachu-1.jpg?auto=compress,format"
// );

// let alakazam = new Pokemon(
//     "Alakazam",
//     "Psychic",
//     70,
//     "female",
//     "Es la última evolución de Abra",
//     "https://vignette.wikia.nocookie.net/pokemonfanon/images/2/2a/Faba_Alakazam.png/revision/latest?cb=20171110183541"
// );

// console.log(pikachu);
// console.log(alakazam);

// pikachu.attack();


class Persona {
    constructor(name, apelp, apelm, year, month, day, homo) {
        this.name = name;
        this.apelp = apelp;
        this.apelm = apelm;
        this.year = year;
        this.month = month;
        this.day = day;
        this.homo = homo;
    }

    getRFC() {
        let vocalesApellidoP = [];
        for (let i = 0; i <= this.apelp.length; i++) {
            if (this.apelp[i] === "a" ||
                this.apelp[i] === "e" ||
                this.apelp[i] === "i" ||
                this.apelp[i] === "o" ||
                this.apelp[i] === "u" ||
                this.apelp[i] === "A" ||
                this.apelp[i] === "E" ||
                this.apelp[i] === "I" ||
                this.apelp[i] === "O" ||
                this.apelp[i] === "U") {
                vocalesApellidoP.push(this.apelp[i]);
            }
        }
        console.log(vocalesApellidoP);
        const apellidoP = (this.apelp.substring(0, 1) === 'Ñ' || this.apelp.substring(0, 1) === 'ñ' ? 'X' : this.apelp.substring(0, 1)) + vocalesApellidoP[0];

        const apellidoM = this.apelm.substring(0, 1);
        const nombre = this.name.substring(0, 1);
        const anioNacimiento = this.year.substring(2, 4);
        const mesNacimiento = this.month;
        const diaNacimiento = this.day;
        const homoclave = this.homo;

        const rfc = (apellidoP + apellidoM + nombre + anioNacimiento + mesNacimiento + diaNacimiento + homoclave).toUpperCase();
        alert(rfc);
    }

    getAge() {
        let currentYear = new Date().getFullYear();
        let currentMonth = new Date().getMonth();
        let currentDay = new Date().getDate();

        console.log(currentYear);
        console.log(currentMonth);
        console.log(currentDay);

        if(this.month <= currentMonth) {
            if(this.day <= currentDay) {
                return currentYear - this.year;
            } else {
                return (currentYear - this.year) - 1;
            }
        } else {
            return (currentYear - this.year) - 1;
        }
    }
}

class Futbolista extends Persona {
    constructor(name, apelp, apelm, year, month, day, team, goals, position, number, homo) {
        super(name, apelp, apelm, year, month, day, homo);
        this.team = team;
        this.goals = goals;
        this.position = position;
        this.number = number;
    }
}

class Desarrollador extends Persona {
    constructor(name, apelp, apelm, year, month, day, homo, speciality, computer, school) {
        super(name, apelp, apelm, year, month, day, homo);
        this.speciality = speciality;
        this.computer = computer;
        this.school = school;
    }
}

let edwin = new Persona("Edwin", "Salgado", "X", "1993", "06", "10", "XX");
let chicharito = new Futbolista("Javier", "Hernandez", "Balcazar", "1988", "6", "1", "West Ham", "15", "Delantero", "17", "XXX");
let gerardo = new Desarrollador("Gerardo", "Medina", "Romero", "1995", "7", "19", "XXX", "Frontend", "Mac", "Dev.f");

console.log(edwin);
console.log(chicharito);
console.log(gerardo);