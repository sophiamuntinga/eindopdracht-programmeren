let naamInput = document.querySelector("input");
let randomNaamKnop = document.querySelector("#nameGenerator");
const knop = document.querySelector("button");
const knopEten = document.querySelector("#eten");
const knopSlapen = document.querySelector("#slapen");
const knopLiefde = document.querySelector("#liefde");
let audioEten = new Audio("./afbeeldingen-links/eating-sound.mp3");
let audioSlapen = new Audio("./afbeeldingen-links/sleeping-sound.mp3");
let audioLiefde = new Audio("./afbeeldingen-links/kissing-sound.mp3")
let naamveld = document.querySelector("#naamveld");
const standaardNamen = ["Indy", "Octo", "Janneke", "Henk", "Bo", "Tineke"];
let octImage = document.querySelector("img");
let hungerBar = document.querySelector("#hongerVulling");
let width = 100;
let hungerID;

// gekopieerd van mozzila https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#examples 
// het zorgt ervoor dat ik een random nummer tussen 0 en 6 kan kiezen, zoals je kunt zien in lijn ...
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateRandomName() {
    naamInput.value = standaardNamen[getRandomInt(6)]
}
randomNaamKnop.addEventListener("click", generateRandomName)

// dit zorgt voor een passend geluid als je op een van de knoppen drukt
function playSound(audio){
    audio.play();
}
function changeImage(imgLink) {
    const defaultImgLink = "afbeeldingen-links/rode-inktvis.png";
    octImage.src = imgLink;

    let secondCount = 0;
    const intervalID = setInterval(function() {
        secondCount += 1;
        if (secondCount == 4) {
            clearInterval(intervalID);
            octImage.src = defaultImgLink;
        }
    }, 1000)
}

function hungerDown() {
    console.log(width)
    if (width <= 0) {
        // ONTPLOFFING
    } else {
        hungerBar.style.width = `${width}%`;
        width--;
    }
}

function gainHunger() {
    width += 10;
    playSound(audioEten)
    changeImage("afbeeldingen-links/etende-rode-inktvis.png");
    if(width >= 100){
        width = 100;
    }
}



setInterval(hungerDown, 1000);

// function groet(naam, typeGroet){
//     console.log("groet persoon");
//     naamveld.textContent = typeGroet + " " + naam;
// }

// groet("lisa", "goedemiddag");




 

// function veranderGetal() {
//     let getal = Math.random();
//     document.querySelector('p').textContent = getal;
//     console.log(getal);
// }

// knop.addEventListener('click', veranderGetal);

knopEten.addEventListener("click", gainHunger);
knopSlapen.addEventListener("click", function() {
    playSound(audioSlapen)
    changeImage("afbeeldingen-links/slapende-rode-inktvis.png");
});
knopLiefde.addEventListener("click", function() {
    playSound(audioLiefde)
    changeImage("afbeeldingen-links/liefde-rode-inktvis.png")
});









