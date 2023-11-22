export class Country{
    #countryName;
    #language;
    #population;
    constructor(name, language, population){
        this.#countryName = name;
        this.#language = language;
        this.#population = population;
    }

    getCountryName(){return this.#countryName}
    getLanguage(){return this.#language}
    getPopulation(){return this.#population}

    toCSV(){
        return `${this.#countryName}, ${this.#language}, ${this.#population}`;
    }

    printCard(){
        console.log(`
            ############################################
            #
            # In ${this.#countryName} spreken ze ${this.#language}
            # ${this.getCountryName} telt ${this.#population} inwoners.
            #
            ############################################
        `);
    }
}