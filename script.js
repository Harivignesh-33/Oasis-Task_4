const userDatabase = {
    "user1": "password1",
    "user2": "password2"
};

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (userDatabase.hasOwnProperty(username) && userDatabase[username] === password) {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("securePage").style.display = "block";
    } else {
        alert("Login failed. Please check your credentials.");
    }
}

function logout() {
    document.getElementById("securePage").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}