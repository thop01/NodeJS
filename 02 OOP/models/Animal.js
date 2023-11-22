export class Animal {
    animalName;                 // public
    _type="animal";             // protected
    #sound = "i'm an animal";   // private

    constructor(name){
        this.animalName = name;
    }

    saySomething(){
        console.log(this.animalName + " says: " + this.#sound);
    }

    setSound(sound){
        this.#sound = sound;
    }
}