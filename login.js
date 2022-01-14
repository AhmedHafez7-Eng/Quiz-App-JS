

document.getElementById("submitButton").addEventListener("click", (e) => {
    const username = window.localStorage.getItem("user");
    const password = window.localStorage.getItem("password")
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    console.log(password);
    console.log(passwordInput);
    console.log(username);
    console.log(usernameInput);
    if (usernameInput != username && passwordInput != password) {
        e.preventDefault;
        alert("wrong username or password");
    }
})
