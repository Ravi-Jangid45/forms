export class series {
    constructor(anime, moviedescription, movierating, moviedirector, moviereview) {
        this.anime = anime;
        this.moviedescription = moviedescription;
        this.movierating = movierating;
        this.moviedirector = moviedirector;
        this.moviereview = moviereview;
    }
    format() {
        return `anime name is ${this.anime} and it's ${this.moviedescription} and it's rating ${this.movierating} the director is ${this.moviedirector} and it is liked by ${this.moviereview}`;
    }
}
