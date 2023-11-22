import * as readline from 'node:readline/promises';
import { Country } from "../model/Country.js";
import {writeFile} from "node:fs";

export class CountryController{
    addCountry(country){
        if(country instanceof Country){
            writeFile(`data/countries/${country.getCountryName()}.csv`, country.toCSV(), 'utf8', (error)=>{
                if (error) throw error;
               // console.log('The file has been saved!');
            }); 

        }else{
            console.log("You need to put an country object")
        }
    }
}