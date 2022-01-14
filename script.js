

const data =

    [
        {
            Header: 'what is 2*5',
            Answers: [2, 5, 10, 15, 20],
            Correctanswer: 10,
            Degree: 10
        },
        {
            Header: 'what is 2*1',
            Answers: [2, 5, 10, 15, 20],
            Correctanswer: 2,
            Degree: 10
        },

        {
            Header: 'what is 2*4',
            Answers: [2, 5, 10, 15, 8],
            Correctanswer: 8,
            Degree: 10
        },
        {
            Header: 'what is 3*4',
            Answers: [2, 5, 12, 15, 8],
            Correctanswer: 12,
            Degree: 10
        }]

/////////////////////////////////////////////////
let arr = []; let label=[]; let checked=[];
function createlabel(wheretoappend, index) {
    
    for (let i = 0; i < 5; i++) {
        checked[i] = document.createElement('input')
        label[i] = document.createElement('label')
        checked[i].setAttribute('type', 'radio')
        checked[i].setAttribute('name', `value${index}`)
         checked[i].setAttribute('value', `${data[index].Answers[i]}`)
        wheretoappend.appendChild(checked[i])
        wheretoappend.appendChild(label[i]);

            label[i].innerHTML = data[index].Answers[i]
        


    }

}
function checkans(ans) {
    let result = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].Correctanswer == ans[i])
            result += 10;

    }
    return result;
}


//////////////////////
///////
//let container= document.getElementById('devid');
// let next = document.getElementById('nextbutt');
// let start = document.getElementById('stbutt');
// let show = document.getElementById('showbutt');
// let hiden = document.getElementById('hide');
// let finish = document.getElementById('finish');
// let your_result = document.getElementById('result')
//showQues(data, 'devid', next, start, show)
function showQues(data, idOfDiv, nextbutt, stbutt, showbutt) {
    let counter = 0; let i = 0; let title, header, answer
    let dev = document.getElementById(idOfDiv);

    stbutt.onclick = function () {
        stbutt.style.display = 'none'
        nextbutt.style.display = 'block'

        function display(i) {


            title = document.createElement('div');
            header = document.createElement('div');
            answer = document.createElement('label')
            dev.appendChild(title);
            dev.appendChild(header)
            title.innerHTML = `QUSETION ${i + 1}`;
            header.innerHTML = `Qusetion Header : ${data[i].Header}`
            createlabel(dev, i);
            // showbutt.style.display = 'block'
            // showbutt.onclick = function () {
            //     let correctans = document.createElement('div');
            //     dev.appendChild(correctans);
            //     showbutt.style.display = 'none';
            //     hiden.style.display = 'block'
            //     hiden.onclick = () => {
            //         hiden.style.display = 'none';
            //         correctans.innerHTML = '';
            //         showbutt.style.display = 'block';

            //     }


            //     correctans.innerHTML = data[i].Correctanswer;
            //}
            //     hiden.onclick=()=>{hiden.style.display='none';

            //     showbutt.style.display='block';

            // }

        }

        display(i)
        
        nextbutt.onclick = function () {
            let [v1, v2, v3, v4, v5] = document.getElementsByName('value0')
            // if (i == data.length - 1) {

            //     nextbutt.style.display = 'none';
            //     finish.style.display = 'block'; dev.innerHTML = checkans(arr)
            // }
            // // let [v1, v2, v3, v4] = document.getElementsByName(`value${i}`)

            if (!v1.checked && !v2.checked && !v3.checked
                && !v4.checked && !v5.checked)
                alert('select answer')

            else {
                // if(!v1.checked&&!v2.checked&&!v3.checked&&!v4.checked&&!v5.checked)
                // alert('select answer')
                for (let j = 0; j < 5; j++) {
                    if (document.getElementsByName('value0')[j].checked)
                        arr.push(document.getElementsByName('value0')[j].value)
                }
                if (i < data.length - 1) { 
                    for (let j = 0; j < 5; j++) 

                        checked[j].checked=0
                    i++;
                    //display(i);

                     title.innerHTML = `QUSETION ${i + 1}`;
                     header.innerHTML = `Qusetion Header : ${data[i].Header}`
                    // dev.innerHTML = `your result${checkans(arr)}`
                     for (let j = 0; j < 5; j++) {

                        checked[j].setAttribute('value', `${data[i].Answers[j]}`)
                         label[j].innerHTML = data[i].Answers[j]
                     }
                    

                }
                else {
                    nextbutt.style.display = 'none';
                    finish.style.display = 'block';
                    finish.onclick = function () {
                        finish.style.display = 'none'
                                       dev.innerHTML = `your result${checkans(arr)}`
                        //                 for (let i = 0; i < 5; i++){

                        // checked.setAttribute('value', `${data[index].Answers[i]}`)
                        // label.innerHTML = data[index].Answers[i]
                        //                 }
                    }
                }
            }

        }


        let t=setInterval(() => {
            counter++;
            nextbutt.style.display = 'none';
           console.log(counter);
            dev.innerHTML = 'SORRY,GAME OVER  :)';
            clearInterval(t);

            //     else {
            //         nextbutt.onclick = function () {
            //             i++;
            //             display(i);

            //         }



            //    }


        }, 1800000);



    }


}

////////
let container = document.getElementById('devid');
let next = document.getElementById('nextbutt');
let start = document.getElementById('stbutt');
let show = document.getElementById('showbutt');
let hiden = document.getElementById('hide');
let finish = document.getElementById('finish');
let your_result = document.getElementById('result')
showQues(data, 'devid', next, start, show);
