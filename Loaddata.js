//Mit AJAX die daten laden
//var url = "http://oss.sheetjs.com/test_files/formula_stress_test.xlsx";
var url = "C:\Users\gerzic\Documents\GitHub\Practice\data\cars.xlsx";

/* set up async GET request */
var req = new XMLHttpRequest();
req.open("GET", url, true);
req.responseType = "arraybuffer";

req.onload = function(e) {
  var arraybuffer = req.response;

  //Daten zu Binary-string convertieren
  var data = new Uint8Array(req.response);
//   var arr = new Array();
//   for (var i=0; i!=data.length; i++){
//       arr[i]=String.fromCharCode(data[i]);
//   }
//   var bstr = arr.join("");

  //Xlsx aufruf
  var workbook = XLSX.read(data, {type:"array"});

  //Start mit dem Einlesen der Daten
    var worksheet = workbook.s
}

req.send();