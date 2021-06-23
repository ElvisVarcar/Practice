//Da in der Nacht daran gearbeitet hat mich das Helle Background gestoert
//Hab es als Uebung gleich Zeitabhaengig gemacht, bei Tag -> Light und bei Nacht -> Dark

function updateBackground() {
    var 
      hr = (new Date()).getHours(), //aktuelle Stunde holen
      min = (new Date()).getMinutes(), //aktuelle Minuten holen
      body = document.body,
      bstyle = body.style;

console.log(hr+":"+min); //Zeit in COnsole Ausgeben, nur zur Ueberpruefung

    if (hr >=20) { //Falls nach 20:00 Uhr Abends
      bstyle.backgroundColor = "black";
      bstyle.color = "white";
    } else if (hr <= 08) { //Falls vor 08:00 Uhr Morgens
      bstyle.backgroundColor = "black";
      bstyle.color = "white";
    } else {
      bstyle.backgroundColor = "Green";
      bstyle.color = "white";
    } 
  }
  
  setInterval(updateBackground, 1000 * 60); //Automatisches Updaten bei Zeitaenderung
  updateBackground(); //Aufrufen der eigentlichen Funktion