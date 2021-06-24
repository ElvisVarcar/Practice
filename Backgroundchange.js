//Da in der Nacht daran gearbeitet hat mich das Helle Background gestoert
//Hab es als Uebung gleich Zeitabhaengig gemacht, bei Tag -> Light und bei Nacht -> Dark

function updateBackground() {
    var 
      hr = (new Date()).getHours(), //aktuelle Stunde holen
      min = (new Date()).getMinutes(), //aktuelle Minuten holen
      body = document.body, //gesamten Body auswaehlen
      links = body.getElementsByClassName("links"), //links-Block im Body auswaehlen
      cta = body.getElementsByClassName("cta"); //cta-Button im Body auswaehlen
      bstyle = body.style; //gesamten Body-style auswaehlen

console.log(hr+":"+min); //Zeit in COnsole Ausgeben, nur zur Ueberpruefung
console.log(links);

    if (hr >=20 || hr<=08) { //Falls nach 20:00 Uhr Abends oder vor 08:00 Uhr Morgens
      bstyle.backgroundColor = "black"; //Hintergrundfarbe des Body
      //links.style.backgroundColor = "blue"; //Hintergrundfarbe des Links-Blocks
      links.backgroundColor = "blue";
      cta.backgroundColor = "red";
      bstyle.color = "black"; //Textfarbe
    } else {
      bstyle.backgroundColor = "Green";
      bstyle.color = "black";
    } 
  }
  
  setInterval(updateBackground, 1000 * 60); //Automatisches Updaten bei Zeitaenderung
  updateBackground(); //Aufrufen der eigentlichen Funktion