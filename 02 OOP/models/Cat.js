import { Animal } from "./Animal.js"

export class Cat extends Animal{

    constructor(name, sound){
        super(name);
        super.setSound(sound);
    }
}