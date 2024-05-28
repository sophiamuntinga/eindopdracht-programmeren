
const knop = document.querySelector("button");
const knopEten = document.querySelector(".eten");
const knopSlapen = document.querySelector(".slapen");
const knopLiefde = document.querySelector(".liefde");
let audioEten = new Audio("./afbeeldingen-links/Fish Eat (Nr. 2  Fortnite Sound) - Sound Effect for editing.mp3")

function FishEats(){
    audioEten.play();
}

knopEten.addEventListener("click", FishEats);


// function veranderGetal() {
//     let getal = Math.random();
//     document.querySelector('p').textContent = getal;
//     console.log(getal);
// }

// knop.addEventListener('click', veranderGetal);









