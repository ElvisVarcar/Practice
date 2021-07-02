//Methode 1 -- ist aktuell nicht aktiv, Code rennt aktuell im index.html - kann später hier umgebaut werden
var selectedFile;
document
  .getElementById("uploadCars")
  .addEventListener("change", function(event) {
    selectedFile = event.target.files[0];
  });
document
  .getElementById("uploadCars")
  .addEventListener("click", function() {
    if (selectedFile) {
      var fileReader = new FileReader();
      fileReader.onload = function(event) {
        var data = event.target.result;

        var workbook = XLSX.read(data, {
          type: "binary"
        });
        workbook.SheetNames.forEach(sheet => {
          let rowObject = XLSX.utils.sheet_to_row_object_array(
            workbook.Sheets[sheet]
          );
          let jsonObject = JSON.stringify(rowObject);
          document.getElementById("jsonData").innerHTML = jsonObject;
          console.log(jsonObject);
        });
      };
      fileReader.readAsBinaryString(selectedFile);
    }
  });

//Methode 2
// var selectedFile;
// document.addEventListener("change", function(event) {
//     selectedFile = event.target.files[0];
//   });

// document.getElementById('uploadCars').addEventListener("click", function(){
//     //if (selectedFile) {
//     var fileReader = new FileReader();
//     fileReader.onload = function(event){
//         var data = event.target.result;
//         var workbook = XLSX.read(data, {
//             type: "binary"
//           });
//           workbook.SheetNames.forEach(sheet => {
//             let rowObject = XLSX.utils.sheet_to_row_object_array(
//               workbook.Sheets[sheet]
//             );
//             let jsonObject = JSON.stringify(rowObject);
//             console.log(jsonObject);
//           })
//     };
//     fileReader.readAsBinaryString(selectedFile);
//     //}
// });
//console.log(selectedFile);

// //Mit AJAX die daten laden
// //var url = "http://oss.sheetjs.com/test_files/formula_stress_test.xlsx";
// var url = "C:\Users\gerzic\Documents\GitHub\Practice\data\cars.xlsx";

// /* set up async GET request */
// var req = new XMLHttpRequest();
// req.open("GET", url, true);
// req.responseType = "arraybuffer";

// req.onload = function(e) {
//   var arraybuffer = req.response;

//   //Daten zu Binary-string convertieren
//   var data = new Uint8Array(req.response);
// //   var arr = new Array();
// //   for (var i=0; i!=data.length; i++){
// //       arr[i]=String.fromCharCode(data[i]);
// //   }
// //   var bstr = arr.join("");

//   //Xlsx aufruf
//   var workbook = XLSX.read(data, {type:"array"});

//   //Start mit dem Einlesen der Daten
//     var worksheet = workbook.s
// }
// req.send();