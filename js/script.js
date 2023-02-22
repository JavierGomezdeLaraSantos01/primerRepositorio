class Persona {
    constructor (nombre, apellido, color){
        this.nombre = nombre;
        this.apellido = apellido;
        this.color = color;
    }
    toString() {
        return this.nombre + " " + this.apellido + " " + this.color;
    }
}

function ejemplo(arrayPersonas) {
    let arrayDevolver = [];
    for (let i = 0; i < arrayPersonas.length; i++) {
        arrayDevolver.push(arrayPersonas[i].toString());
    }
    return arrayDevolver;
}


let persona = new Persona ("Elena", "Servent", "negro");
let persona2 = new Persona ("Javi", "Sanchez", "Azul");
let persona3 = new Persona ("Carlos", "Torres", "Verde");

let array= [];
array.push(persona);
array.push(persona2);
array.push(persona3);


console.log(ejemplo(array));