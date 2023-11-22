import { Animal } from "./Animal.js"

export class Dog extends Animal{

    constructor(name, sound){
        super(name);
        this._type = "dog";
        super.setSound(sound);
    }
}