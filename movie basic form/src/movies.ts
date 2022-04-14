import { shouldHaveFormat } from "./shouldhaveformat.js";

export class movies implements shouldHaveFormat{
    constructor (readonly moviename: string, public moviedescription: string, private movierating: string, public moviedirector: string, private moviereview: string){} 

    format(){
        return `movie name is ${this.moviename} and it's ${this.moviedescription} and it's rating ${this.movierating} the director is ${this.moviedirector} and it is liked by ${this.moviereview}`
    }
}

