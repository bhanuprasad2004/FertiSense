let loggedIn = localStorage.getItem("fertisenseLoggedIn");

if (document.getElementById("farmerName")) {

    let user = JSON.parse(localStorage.getItem("fertisenseUser"));

    if (user != null) {
        document.getElementById("farmerName").innerText = user.name;
    }

}


let logoutButton = document.getElementById("logoutButton");

if (logoutButton != null) {

    logoutButton.addEventListener("click", function(event) {

        event.preventDefault();

        localStorage.removeItem("fertisenseLoggedIn");

        window.location.href = "index.html";

    });

}


let soilForm = document.getElementById("soilForm");

if (soilForm != null) {

    soilForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let crop = document.getElementById("crop").value;
        let nitrogen = document.getElementById("nitrogen").value;
        let phosphorus = document.getElementById("phosphorus").value;
        let potassium = document.getElementById("potassium").value;
        let ph = document.getElementById("ph").value;
        let soilType = document.getElementById("soilType").value;

        let report = {
            crop: crop,
            nitrogen: nitrogen,
            phosphorus: phosphorus,
            potassium: potassium,
            ph: ph,
            soilType: soilType,
            date: new Date().toLocaleDateString()
        };

        let reports = JSON.parse(localStorage.getItem("fertisenseReports"));

        if (reports == null) {
            reports = [];
        }

        reports.push(report);

        localStorage.setItem("fertisenseReports", JSON.stringify(reports));

        let resultSection = document.getElementById("resultSection");
        let result = document.getElementById("result");

        result.innerHTML =
            "<p><strong>Crop:</strong> " + crop + "</p>" +
            "<p><strong>Nitrogen:</strong> " + nitrogen + " kg/ha</p>" +
            "<p><strong>Phosphorus:</strong> " + phosphorus + " kg/ha</p>" +
            "<p><strong>Potassium:</strong> " + potassium + " kg/ha</p>" +
            "<p><strong>pH:</strong> " + ph + "</p>" +
            "<p><strong>Soil Type:</strong> " + soilType + "</p>" +
            "<p><strong>Status:</strong> Soil data recorded successfully.</p>" +
            "<p>Fertilizer recommendation will be connected to the backend later.</p>";

        resultSection.style.display = "block";

    });

}


let reportsList = document.getElementById("reportsList");

if (reportsList != null) {

    let reports = JSON.parse(localStorage.getItem("fertisenseReports"));

    if (reports == null || reports.length == 0) {

        reportsList.innerHTML =
            "<p>No soil reports available.</p>";

    } else {

        for (let i = 0; i < reports.length; i++) {

            let report = reports[i];

            reportsList.innerHTML +=

                "<div class='report-card'>" +

                "<h2>" + report.crop + "</h2>" +

                "<p><strong>Date:</strong> " +
                report.date + "</p>" +

                "<p><strong>Nitrogen:</strong> " +
                report.nitrogen + " kg/ha</p>" +

                "<p><strong>Phosphorus:</strong> " +
                report.phosphorus + " kg/ha</p>" +

                "<p><strong>Potassium:</strong> " +
                report.potassium + " kg/ha</p>" +

                "<p><strong>pH:</strong> " +
                report.ph + "</p>" +

                "<p><strong>Soil Type:</strong> " +
                report.soilType + "</p>" +

                "</div>";
        }
    }
}