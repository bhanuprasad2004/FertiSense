document.getElementById("soilForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let soilTest = {
        crop: document.getElementById("crop").value,
        nitrogen: Number(document.getElementById("nitrogen").value),
        phosphorus: Number(document.getElementById("phosphorus").value),
        potassium: Number(document.getElementById("potassium").value),
        ph: Number(document.getElementById("ph").value)
    };

    fetch("http://localhost:8080/api/soil-tests", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(soilTest)

    })
    .then(response => {

        if (!response.ok) {
            throw new Error("Unable to save soil test");
        }

        return response.json();

    })
    .then(data => {

        document.getElementById("soilMessage").innerText =
            "Soil test saved successfully! Test ID: " + data.id;

    })
    .catch(error => {

        console.error("Soil Test Error:", error);

        document.getElementById("soilMessage").innerText =
            "Unable to save soil test. Check the backend connection.";

    });

});