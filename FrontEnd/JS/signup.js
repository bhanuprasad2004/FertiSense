document.getElementById("signupForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let phone = document.getElementById("signupPhone").value;
    let password = document.getElementById("signupPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password != confirmPassword) {

        document.getElementById("signupMessage").innerText =
            "Passwords do not match.";

        return;
    }

    let user = {
        name: name,
        email: email,
        phone: phone,
        password: password
    };

    fetch("http://localhost:8080/api/users/signup", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(user)

    })
    .then(response => {

        if (!response.ok) {
            throw new Error("Signup failed");
        }

        return response.json();

    })
    .then(data => {

        document.getElementById("signupMessage").innerText =
            "Account created successfully.";

        setTimeout(function() {

            window.location.href = "index.html";

        }, 1000);

    })
    .catch(error => {

    console.error("Signup Error:", error);

    document.getElementById("signupMessage").innerText =
        "Error: " + error.message;

});

});