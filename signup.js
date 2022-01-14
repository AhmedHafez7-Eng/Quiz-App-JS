const firstForm = document.getElementById('first_form');
const submit = document.getElementById('submit');
let passcheck = 0, alertChecker = false, count = 0, radioCheck = [];
var mailformat = /\S+@\S+\.\S+/;

submit.addEventListener('click', function (e) {
    // d@yahoo.com
    alertChecker = false;
    passcheck = 0
    var input = document.getElementsByTagName("input");
    for (var i = 0; i < input.length; i++) {
        if ((firstForm[i].type == "text") && (firstForm[i].value == "")) {
            alert("please fill the name field");
            e.preventDefault();
        }
        if ((firstForm[i].type == "email") && (!firstForm[i].value.match(mailformat))) {

            alert("please fill the email field");
            e.preventDefault();
        }
        if ((firstForm[i].type == "password")) {
            passcheck++
            if ((firstForm[i].value.length < 1) && passcheck < 2) {
                alert("please fill the password field");
                e.preventDefault();
            }
            if (passcheck >= 2) {
                if (firstForm[i - 1].value != firstForm[i].value) {
                    alert("please make sure of the password");
                    e.preventDefault();
                }
                else {
                    localStorage.password = ("password", document.getElementById("password").value);
                }
            }

        }
        if (input[i].type === "radio") {
            count++;
            check = input[i].checked;
            radioCheck[i] = check;
            if (count % 2 == 0) {
                if ((radioCheck[i] == false) && (radioCheck[i - 1] == false)) {
                    alert("please fill the gender field");
                    e.preventDefault();
                }
                else {
                    localStorage.setItem("gender", firstForm[i].value);
                }
            }
        }
    }
    localStorage.user = ("user", document.getElementById("username").value);
    localStorage.email = ("email", document.getElementById("email").value);



    // if (alertChecker) {
    //     alert("please fill the empty fields");
    //     e.preventDefault();
    // }
});

