export class movies {
    constructor(moviename, moviedescription, movierating, moviedirector, moviereview) {
        this.moviename = moviename;
        this.moviedescription = moviedescription;
        this.movierating = movierating;
        this.moviedirector = moviedirector;
        this.moviereview = moviereview;
    }
    format() {
        return `movie name is ${this.moviename} and it's ${this.moviedescription} and it's rating ${this.movierating} the director is ${this.moviedirector} and it is liked by ${this.moviereview}`;
    }
}
