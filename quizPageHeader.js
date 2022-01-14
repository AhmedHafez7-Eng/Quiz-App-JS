import { questions as q } from "./questions.js";
const name = document.getElementsByClassName("quizName");
const timeDev = document.getElementsByClassName("examTimer");
var username = localStorage.getItem("user");

document.getElementsByClassName("username")[0].innerHTML = username;

name[0].innerHTML = q.QuizName;
var mins = q.QuizTime - 1;
var secs = 60;
var timeUp = false;
var time;
document.getElementById("start").addEventListener("click", () => {
    time = setInterval(function timechange() {
        let stopWatch;
        if (secs > 0) {
            secs--;
        }
        else {
            secs = 59;
            if (mins > 0) {
                mins--;

            }
            else {
                timeUp = true;
            }
        }
        stopWatch = mins + ":" + secs;
        if (timeUp) {
            timeDev[0].innerHTML = "Time is up"
        }
        else {
            timeDev[0].innerHTML = stopWatch;
        }


    }, 1000)
})

document.getElementById("finish").addEventListener("click", () => {
    clearInterval(time);
})