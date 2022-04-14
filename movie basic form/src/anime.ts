import { shouldHaveFormat } from "./shouldhaveformat.js";


export class series implements shouldHaveFormat{
    constructor (readonly anime: string, public moviedescription: string, private movierating: string, public moviedirector: string, private moviereview: string){} 

    format(){
        return `anime name is ${this.anime} and it's ${this.moviedescription} and it's rating ${this.movierating} the director is ${this.moviedirector} and it is liked by ${this.moviereview}`
    }
}