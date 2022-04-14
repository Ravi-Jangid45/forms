import { ListTemplate } from "./fun.js";
import { movies } from "./movies.js";
import { series } from "./anime.js";
import { shouldHaveFormat } from "./shouldhaveformat.js";

/*let animeOne = new anime("", "", "", "", "");
let animeTwo = new anime("", "", "", "", "");

let animeList: anime[] = []

animeList.push(animeOne);
animeList.push(animeTwo);

animeList.forEach(list => {
    console.log(list);
})*/

/*let docOne: shouldHaveFormat;
let docTwo: shouldHaveFormat*/;

/*docOne = new movies("ravi", "jd", "df", "fd", "fdf");
docTwo = new series("ravi", "jd", "df", "fd", "fdf");

let doc: shouldHaveFormat[] = [];

doc.push(docOne);
doc.push(docTwo);

console.log(doc);*/

let ul = document.querySelector("ul") as HTMLUListElement;
let data = new ListTemplate(ul);


let type = document.querySelector("#type") as HTMLSelectElement;
let moviename = document.querySelector("#moviename") as HTMLInputElement;
let moviedescription = document.querySelector("#moviedescription") as HTMLInputElement;
let movierating = document.querySelector("#movierating") as HTMLSelectElement;
let moviedirector = document.querySelector("#moviedirector") as HTMLInputElement;
let moviereview = document.querySelector("#moviereview") as HTMLTextAreaElement;

let btn = document.querySelector("button") as HTMLButtonElement;

btn.addEventListener("click", (e: Event) => {
    e.preventDefault();

    console.log(
        moviename.value,
        moviedescription.value,
        movierating.value,
        moviedirector.value,
        moviereview.value,
    )

    let doc: shouldHaveFormat;

    if(type.value === "movies"){
        doc = new movies(moviename.value, moviedescription.value, movierating.value, moviedirector.value, moviereview.value);
    }else{
        doc = new series(moviename.value, moviedescription.value, movierating.value, moviedirector.value, moviereview.value);
    }

    data.render(doc, type.value, "start");


})