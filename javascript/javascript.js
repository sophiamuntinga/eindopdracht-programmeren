const naamInput = document.querySelector("input");
const randomNaamKnop = document.getElementById("nameGenerator");
const naamKiezer = document.getElementById("naamKiezer")
const beginScherm = document.getElementById("beginScherm");

const knopEten = document.querySelector("#eten");
const knopSlapen = document.querySelector("#slapen");
const knopLiefde = document.querySelector("#liefde");

const audioEten = new Audio("./afbeeldingen-links/eating-sound.mp3");
const audioSlapen = new Audio("./afbeeldingen-links/sleeping-sound.mp3");
const audioLiefde = new Audio("./afbeeldingen-links/kissing-sound.mp3");

const naamveld = document.querySelector("#naamveld");
const standaardNamen = ["Indy", "Octo", "Janneke", "Henk", "Bo", "Tineke"];

const octImage = document.querySelector("img");

const hungerBar = document.querySelector("#hongerVulling");
const slaapBar = document.querySelector("#slaapVulling");

let octopusNaam;
let naamGekozen = false;
let widthHunger = 100;
let widthSlaap = 100;
let hungerID;

function geefNaam() {
    octopusNaam = naamInput.value;
    if(octopusNaam == ""){
        naamGekozen = false;
    } else {
        beginScherm.style.display = "none";
        naamGekozen = true;
    }
}
function generateRandomName() {
    const getal = Math.floor(Math.random() * 6);
    naamInput.value = standaardNamen[getal];
}


// dit zorgt voor een passend geluid als je op een van de knoppen drukt
function playSound(audio){
    audio.play();
}

// Bij deze functie heeft mijn broertje me geholpen. Het zorgt ervoor dat de default afbeelding de rode-inkvis.png is en de andere afbeeldingen voor een bepaalde tijd bijven, waarna de default afbeelding weer tevoorschijn komt
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

// Hier hebben mijn broertje en Diego me mee geholpen. Het stukje ${widthHunger}% is gescherven door chatgpt. Het zorgt ervoor dat de bar van de honger elke seconde -1 (naar links gaat).
function hungerDown() {
    if(naamGekozen == true){
        if (widthHunger <= 0) {
            // ONTPLOFFING
        } else if (widthSlaap >= 0){
            hungerBar.style.width = `${widthHunger}%`;
            widthHunger--;
        }
    }
}

// dit stukje zorgt ervoor dat wanneer getriggert de balk van honger met 10 naar rechts gaat, het audioEten word afgespeeld en de afbeelding van de inktvis tijdelijk veranderd naar een plaatje van een etende inktvis.
function gainHunger() {
    widthHunger += 10;
    playSound(audioEten)
    changeImage("afbeeldingen-links/etende-rode-inktvis.png");
    if(widthHunger >= 100){
        widthHunger = 100;
    }
}


// deze funtie is hetzelfde als de hungerDown funtie, maar dan voor de slaapknop.
function slaapBarDown() {
    console.log(widthSlaap)
    if(naamGekozen == true){
        if (widthSlaap <= 0) {
            // ONTPLOFFING
        } else if (widthSlaap >= 0){
            slaapBar.style.width = `${widthSlaap}%`;
            widthSlaap--;
        }
    }
}

// deze funtie is hetzelfde als de gainHunger funtie, maar dan voor de slaapknop.
function slaapBarUp() {
    widthSlaap += 10;
    playSound(audioSlapen)
    changeImage("afbeeldingen-links/slapende-rode-inktvis.png");
    if(widthSlaap >= 100){
        widthSlaap = 100;
    }
}

// deze interval zorgt ervoor dat de funtie slaapBarDown automatisch constant wordt uitgevoerd.
setInterval(slaapBarDown, 1000);

// deze interval zorgt ervoor dat de funtie hungerDown automatisch constant wordt uitgevoerd.
setInterval(hungerDown, 1000);


// deze event listener zorgt ervoor dat de funtie generateRandomName wordt uitgevoerd
randomNaamKnop.addEventListener("click", generateRandomName)


naamKiezer.addEventListener("click", geefNaam)

// deze eventlisteners zorgen ervoor dat de functies gainHunger en slaapBarUp worden uitgevoerd
knopEten.addEventListener("click", gainHunger);
knopSlapen.addEventListener("click", slaapBarUp);

// deze eventlistener wil ik nog aanpassen zodat er geen functie in staat.
knopLiefde.addEventListener("click", function() {
    playSound(audioLiefde)
    changeImage("afbeeldingen-links/liefde-rode-inktvis.png")
});









