//Erstellung eines Button
var addBtn = document.createElement("button");
addBtn.innerHTML="Add"; //Anzuzeigender Text
addBtn.setAttribute("id","addBtn"); //Interner Name des Buttons

//EventListener für Button
addBtn.addEventListener("click",add,true); //Auf click des Buttons wird Function "add" ausgefuehrt

//Erstellung einer Funktion
function add() {
    document.body.insertBefore(document.createElement("div"),document.getElementsByTagName("sections")); //Bestimmte Stelle auf Website raussuchen
    //document.createElement("div"); //DIV-Element auf Website erstellen
}


//-------------
//****JSON****
//-------------
//Objekt im JSON Format erstellen
var myCat = {
    "name":"dino",
    "species":"cat",
    "favFood":"Kaffa"
}

//Array im JSON Format erstellen
var myFavColors = ["orange", "purple", "green"];

//Zugrif auf Daten aus Objekt
console.log(myCat.favFood);

//Zugriff auf Daten aus Array
console.log(myFavColors[0]);

//Objekte und Arrays in einem kombinieren im JSON Format
var myPets = [
    {
        "name":"barky",
        "species":"dog",
        "favFood":"bones"
    },
    {
        "name":"tux",
        "species":"turtle",
        "favFood":"salad"
    }
]