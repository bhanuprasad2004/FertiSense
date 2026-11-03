document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let user = {
        email: email,
        password: password
    };

    fetch("http://localhost:8080/api/users/login", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(user)

    })
    .then(response => {

        if (!response.ok) {
            throw new Error("Login request failed");
        }

        return response.text();

    })
    .then(data => {

        if (data === "Login successful") {

            localStorage.setItem("fertisenseLoggedIn", "true");

            window.location.href = "dashboard.html";

        } else {

            document.getElementById("loginMessage").innerText = data;

        }

    })
    .catch(error => {

        console.error("Login Error:", error);

        document.getElementById("loginMessage").innerText =
            "Unable to connect to server.";

    });

});