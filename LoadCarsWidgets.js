var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let autoData = JSON.parse(xhttp.responseText);
        console.log(autoData);

        autoData.forEach(auto => {
            const carsWidgets = document.getElementById("carsWidgets");

            const carWidget = document.createElement("div");
            carWidget.classList.add("car");

            const carHeader = document.createElement("div");
            carHeader.innerText = auto.auto;
            carHeader.classList.add("carheader", "carelement");
            carWidget.appendChild(carHeader);
            const carPrice = document.createElement("div");
            carPrice.classList.add("carprice", "carelement");
            carWidget.appendChild(carPrice);
            carPrice.innerText = auto.preis;
            const carImage = document.createElement("div");
            carImage.classList.add("carimage", "carelement");
            const carImageWidget = document.createElement("img");
            carImageWidget.classList.add("carimageitself");
            carImageWidget.src = "/Images/audi.jpg";
            carImage.appendChild(carImageWidget);
            carWidget.appendChild(carImage);
            const carYearTitle = document.createElement("div");
            carYearTitle.classList.add("caryeartitle", "carelement", "cardetailtitle");
            carWidget.appendChild(carYearTitle);
            carYearTitle.innerText = "Baujahr";
            const carYear = document.createElement("div");
            carYear.classList.add("caryear", "carelement", "cardetail");
            carWidget.appendChild(carYear);
            carYear.innerText = auto.baujahr;
            const carKmTitle = document.createElement("div");
            carKmTitle.classList.add("carkmtitle", "carelement", "cardetailtitle");
            carWidget.appendChild(carKmTitle);
            carKmTitle.innerText = "Kilometer";
            const carKm = document.createElement("div");
            carKm.classList.add("carkm", "carelement", "cardetail");
            carWidget.appendChild(carKm);
            carKm.innerText = auto.kilometer;
            const carPsTitle = document.createElement("div");
            carPsTitle.classList.add("carpstitle", "carelement", "cardetailtitle");
            carWidget.appendChild(carPsTitle);
            carPsTitle.innerText = "PS";
            const carPs = document.createElement("div");
            carPs.classList.add("carps", "carelement", "cardetail");
            carWidget.appendChild(carPs);
            carPs.innerText = auto.ps;
            const carEngineTitle = document.createElement("div");
            carEngineTitle.classList.add("carenginetitle", "carelement", "cardetailtitle");
            carWidget.appendChild(carEngineTitle);
            carEngineTitle.innerText = "Motor";
            const carEngine = document.createElement("div");
            carEngine.classList.add("carengine", "carelement", "cardetail");
            carWidget.appendChild(carEngine);
            carEngine.innerText = auto.motor;
            const carDescription = document.createElement("div");
            carDescription.classList.add("cardescription", "carelement");
            carWidget.appendChild(carDescription);
            carDescription.innerText = auto.beschreibung;

            carsWidgets.appendChild(carWidget);
        });
    }
};
xhttp.open("GET", "./data/cars-test.json", true);
xhttp.send();