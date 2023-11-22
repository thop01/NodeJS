import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { Country } from './model/Country.js';
import { CountryController } from './Controller/CountryController.js';
const rl = readline.createInterface({ input, output });



let userInput = "exit";
const controller = new CountryController();
do{
    userInput = await rl.question(`
    What would u like to do? 
    You can fill in create, read, update, delete
    `);
    switch(userInput) {
        case "create":
            await createCountry();
            break;
        case "read":
            await readCountry();
            break;
        case "update":
            await updateCountry();
            break;
        case "delete":
            await deleteCountry();
            break;
        default:   
            console.log("Write create, read, update or delete or exit")

    }
}while(userInput != "exit");


async function createCountry(){
    const countryName = await rl.question("Welke land wil je toevoegen?");
    const language = await rl.question("Welke taal spreken ze daar?");
    const population = await rl.question("Hoeveel inwoners heeft het land?");
    const country = new Country(countryName, language, population);
    controller.addCountry(country);   
}



const className = "Student";

writeFile(`data/${className}.js`, `
export class ${className}{
    #name;
    constructor(name){
        this.#name = name;
    }
}
`, 'utf8', (error)=>{
    if (error) throw error;
    console.log('The file has been saved!');
}); 