import { shouldHaveFormat } from "./shouldhaveformat";

export class ListTemplate{
    constructor(private container: HTMLUListElement){}

    render(item: shouldHaveFormat, heading: string, position: "start" | "end"){
      let li = document.createElement("li");
       let h4 =  document.createElement("h4");

       h4.innerText = heading;
       li.append(h4);

       let p = document.createElement("p");
       
        p.innerText = item.format();
        li.append(p);


        li.style.listStyle = "none";
        li.style.background = "linear-gradient(lightgreen, lightblue)";
        li.style.padding = "25px";
        li.style.borderRadius = "8px";

        if (position === "start") {
            this.container.prepend(li);
        }else{
            this.container.append(li);
        }
    }
}