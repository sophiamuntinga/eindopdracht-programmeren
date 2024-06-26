const naamInput = document.querySelector("input");
const randomNaamKnop = document.getElementById("nameGenerator");
const naamKiezer = document.getElementById("naamKiezer")
const beginScherm = document.getElementById("beginScherm");
const eindScherm = document.getElementById("eindScherm")

const knopEten = document.querySelector("#eten");
const knopSlapen = document.querySelector("#slapen");
const knopLiefde = document.querySelector("#liefde");

const audioEten = new Audio("./afbeeldingen-links/eating-sound.mp3");
const audioSlapen = new Audio("./afbeeldingen-links/sleeping-sound.mp3");
const audioLiefde = new Audio("./afbeeldingen-links/kissing-sound.mp3");

const defaultImgLink = "afbeeldingen-links/rode-inktvis.png";

const naamveld = document.querySelector("#naamveld");
const standaardNamen = ["Indy", "Octo", "Janneke", "Henk", "Bo", "Tineke"];

const octImage = document.querySelector("img");

const hungerBar = document.querySelector("#hongerVulling");
const slaapBar = document.querySelector("#slaapVulling");
const liefdeBar = document.querySelector("#liefdeVulling");

const tekstVerloren = document.getElementById("tekstVerloren")
const speelOpnieuw = document.getElementById("speelOpnieuw")

let octopusNaam;
let naamGekozen = false;
let widthHunger = 100;
let widthSlaap = 100;
let widthLiefde = 100;
let hungerID;
let secondCount = 0;
let getal;

// deze functie checkt of er een naam is ingevuld en als dat het geval is dan geeft hij die naam als waarde door. Diego heeft me hierbij geholpen.
function geefNaam() {
    octopusNaam = naamInput.value;
    if(octopusNaam == ""){
        naamGekozen = false;
    } else {
        beginScherm.style.display = "none";
        naamGekozen = true;
        tekstVerloren.textContent = octopusNaam + " is ontploft!"
    }
}

// Bij deze functie wordt er een getal gekozen, en de waarde van dit getal wordt doorgegeven om een naam te kiezen. Mijn broertje en Mariska hebben me hiermee geholpen.
function generateRandomName() {
    getal = Math.floor(Math.random() * 6);
    naamInput.value = standaardNamen[getal];
}

// dit zorgt voor een passend geluid als je op een van de knoppen drukt
function playSound(audio){
    audio.play();
}

// Bij deze functie heeft mijn broertje me geholpen. Het zorgt ervoor dat de default afbeelding de rode-inkvis.png is en de andere afbeeldingen voor een bepaalde tijd bijven, waarna de default afbeelding weer tevoorschijn komt
function changeImage(imgLink) {
    octImage.src = imgLink;

    setTimeout(function() {
            octImage.src = defaultImgLink;
    }, 4000)
}

// Hier hebben mijn broertje en Diego me mee geholpen. Het stukje ${widthHunger}% is gescherven door chatgpt. Het zorgt ervoor dat de bar van de honger elke seconde -1 (naar links gaat).
function hungerDown() {
    if(naamGekozen == true){
        if (widthHunger <= 0) {
            eindScherm.style.display = "block"
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
    if(naamGekozen == true){
        if (widthSlaap <= 0) {
            eindScherm.style.display = "block"
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

// deze funtie is hetzelfde als de hungerDown funtie, maar dan voor de slaapknop.
function liefdeBarDown() {
    if(naamGekozen == true){
        if (widthLiefde <= 0) {
            eindScherm.style.display = "block"
        } else if (widthLiefde >= 0){
            liefdeBar.style.width = `${widthLiefde}%`;
            widthLiefde--;
        }
    }
}

// deze funtie is hetzelfde als de gainHunger funtie, maar dan voor de slaapknop.
function liefdeBarUp() {
    widthLiefde += 10;
    playSound(audioLiefde)
    changeImage("afbeeldingen-links/liefde-rode-inktvis.png");
    if(widthLiefde >= 100){
        widthLiefde = 100;
    }
}

// deze functie zorgt ervoor dat de pagina opnieuw wordt geladen
function startNieuwSpel(){
    location.reload();
}

// deze interval zorgt ervoor dat de funtie slaapBarDown automatisch constant wordt uitgevoerd.
setInterval(slaapBarDown, 1000);

// deze interval zorgt ervoor dat de funtie hungerDown automatisch constant wordt uitgevoerd.
setInterval(hungerDown, 1000);

// deze interval zorgt ervoor dat de funtie liefdeBarDown automatisch constant wordt uitgevoerd.
setInterval(liefdeBarDown, 1000);


// deze event listener zorgt ervoor dat de funtie generateRandomName wordt uitgevoerd
randomNaamKnop.addEventListener("click", generateRandomName)

// deze event listener zorgt ervoor dat de funtie geefNaam wordt uitgevoerd
naamKiezer.addEventListener("click", geefNaam)

// deze event listener zorgt ervoor dat de funtie startNieuwSpel wordt uitgevoerd
speelOpnieuw.addEventListener("click", startNieuwSpel)

// deze eventlisteners zorgen ervoor dat de functies gainHunger, slaapBarUp en liefdeBarUp worden uitgevoerd
knopEten.addEventListener("click", gainHunger);
knopSlapen.addEventListener("click", slaapBarUp);
knopLiefde.addEventListener("click", liefdeBarUp);









