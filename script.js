
import { questions as ques } from './questions.js';

const data = ques.Questions;
// const data =
//     [
//         {
//             Header: 'what is 2*5',
//             Answers: [2, 5, 10, 15, 20],
//             Correctanswer: 10,
//             Degree: 10
//         },
//         {
//             Header: 'what is 2*1',
//             Answers: [2, 5, 10, 15, 20],
//             Correctanswer: 2,
//             Degree: 10
//         },

//         {
//             Header: 'what is 2*4',
//             Answers: [2, 5, 10, 15, 8],
//             Correctanswer: 8,
//             Degree: 10
//         },
//         {
//             Header: 'what is 3*4',
//             Answers: [2, 5, 12, 15, 8],
//             Correctanswer: 12,
//             Degree: 10
//         }]

/////////////////////////////////////////////////
let arr = []; let label = []; let checked = [];
function createlabel(wheretoappend, index) {

    for (let i = 0; i < 4; i++) {

        var answer = document.createElement('div')
        answer.setAttribute('class', 'answer')

        checked[i] = document.createElement('input')

        label[i] = document.createElement('label')
        label[i].setAttribute('for', i);

        checked[i].setAttribute('type', 'radio')
        checked[i].setAttribute('id', i)
        checked[i].setAttribute('name', `value${index}`)
        checked[i].setAttribute('value', `${data[index].Answers[i]}`)
        answer.appendChild(checked[i])
        answer.appendChild(label[i]);

        label[i].innerHTML = data[index].Answers[i]

        wheretoappend.appendChild(answer);
    }
}

function checkans(ans) {
    let result = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].CorrectAnswer == ans[i])
            result += 10;
    }
    return result;
}

function showQues(data, idOfDiv, nextbutt, stbutt, showbutt) {
    let counter = 0; let i = 0; let title, header
    let dev = document.getElementById(idOfDiv);

    stbutt.onclick = function () {
        stbutt.style.display = 'none'
        nextbutt.style.display = 'block'

        function display(i) {

            document.querySelector(".quizApp").style = "display: flex";

            title = document.createElement('div');
            title.setAttribute('class', 'quizTitle');

            header = document.createElement('div');
            header.setAttribute('class', 'quizHeader');

            dev.appendChild(title);
            dev.appendChild(header)

            title.innerHTML = `QUSETION ${i + 1}`;
            header.innerHTML = data[i].Header

            var answersArea = document.createElement('div');
            answersArea.setAttribute('class', 'answersArea');
            dev.appendChild(answersArea);

            createlabel(answersArea, i);
        }

        display(i)

        nextbutt.onclick = function () {
            let [v1, v2, v3, v4] = document.getElementsByName('value0')

            if (!v1.checked && !v2.checked && !v3.checked
                && !v4.checked) {
                document.getElementById("selectAnswer").style.display = 'block';
                document.getElementById("selectAnswer").innerHTML = "You Should Select Answer";
            }

            else {
                document.getElementById("selectAnswer").style.display = 'none';
                for (let j = 0; j < 4; j++) {
                    if (document.getElementsByName('value0')[j].checked)
                        arr.push(document.getElementsByName('value0')[j].value)
                }
                if (i < data.length - 1) {
                    for (let j = 0; j < 4; j++)

                        checked[j].checked = 0
                    i++;

                    title.innerHTML = `QUSETION ${i + 1}`;
                    header.innerHTML = data[i].Header
                    for (let j = 0; j < 4; j++) {

                        checked[j].setAttribute('value', `${data[i].Answers[j]}`)
                        label[j].innerHTML = data[i].Answers[j]
                    }


                }
                else {
                    nextbutt.style.display = 'none';
                    finish.style.display = 'block';
                    finish.onclick = function () {
                        finish.style.display = 'none'
                        var result = document.createElement('div')
                        result.setAttribute('class', 'results')
                        result.innerHTML = `Your Result is: ${checkans(arr)} / ${ques.TotalDegree}`

                        dev.innerHTML = ""
                        dev.style.justifyContent = 'center'
                        dev.insertAdjacentElement("afterbegin", result);
                    }
                }
            }

        }

        let t = setInterval(() => {
            counter++;
            nextbutt.style.display = 'none';
            console.log(counter);
            dev.innerHTML = 'SORRY,GAME OVER  :)';
            clearInterval(t);
        }, 1800000);
    }
}

////////
let container = document.getElementById('quizArea');
let nextbutt = document.getElementById('nextbutt');
let start = document.getElementById('start');
let show = document.getElementById('showbutt');
let hiden = document.getElementById('hide');
let finish = document.getElementById('finish');
let your_result = document.getElementById('result')
showQues(data, 'quizArea', nextbutt, start, show);
