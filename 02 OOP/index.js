import { Animal } from "./models/Animal.js";

const anAnimal = new Animal("Lucu");
const secondAnimal = new Animal("Lola");

anAnimal.saySomething();
secondAnimal.saySomething();
anAnimal._x = 29;                // kan gewoon :(
console.log(anAnimal._x);        // kan gewoon :(
console.log(anAnimal.#sound);    // Kan niet :D