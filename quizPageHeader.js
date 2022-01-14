import {questions as q} from "./questions.js";
const name = document.getElementsByClassName("quizName");
const timeDev = document.getElementsByClassName("examTimer");

name[0].innerHTML=q.QuizName;
var mins = q.QuizTime-1;
var secs = 60;
var timeUp=false;
document.getElementById("start").addEventListener("click",()=>{
    setInterval(function timechange(){
        let stopWatch;
        if (secs>0) {
            secs--;
        }
        else{
            secs=60;
            if (mins>0) {
                mins--;
                
            }
            else{
                timeUp=true;
            }
        }
        stopWatch=mins + ":" + secs;
        if (timeUp) {
            timeDev[0].innerHTML="Time is up"
        }
        else{
            timeDev[0].innerHTML=stopWatch;
        }
        
        
    },1000)
    
})
setInterval(function timechange(){
    let stopWatch;
    if (secs>0) {
        secs--;
    }
    else{
        secs=60;
        if (mins>0) {
            mins--;
            
        }
        else{
            timeUp=true;
        }
    }
    stopWatch=mins + ":" + secs;
    if (timeUp) {
        timeDev[0].innerHTML="Time is up"
    }
    else{
        timeDev[0].innerHTML=stopWatch;
    }
    
    
},1000)
