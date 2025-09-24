// import "bootstrap";
// import "./style.css";


// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
  //write your code here

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let dom = [".com",".net",".us",".io"]

for (let i = 0; i <= pronoun.length - 1; i++) {
    for (let j = 0; j <= adj.length - 1; j++) {
        for (let k = 0; k <= noun.length - 1; k++) {
            for (let l = 0; l <= dom.length - 1; l++){
                console.log(pronoun[i] + adj[j] + noun[k] + dom[l])
            }
        }
    }
}

