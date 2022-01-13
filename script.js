


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
let arr = [];
function createlabel(wheretoappend, index) {
    let label; let checked;
    for (let i = 0; i < 5; i++) {
        checked = document.createElement('input')
        label = document.createElement('label')
        checked.setAttribute('type', 'radio')
        checked.setAttribute('name', `value${index}`)
        checked.setAttribute('value', `${data[index].Answers[i]}`)
        wheretoappend.appendChild(checked)
        wheretoappend.appendChild(label);

        label.innerHTML = data[index].Answers[i]


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
function showQues(data, idOfDiv, nextbutt, stbutt, showbutt) {
    let counter = 0; let i = 0;
    let dev = document.getElementById(idOfDiv);

    stbutt.onclick = function () {
        stbutt.style.display = 'none'
        nextbutt.style.display = 'block'

        function display(i) {


            let title = document.createElement('div');
            let header = document.createElement('div');
            let answer = document.createElement('label')
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
            let [v1, v2, v3, v4, v5] = document.getElementsByName(`value${i}`)
            // if (i == data.length - 1) {
                
            //     nextbutt.style.display = 'none';
            //     finish.style.display = 'block'; dev.innerHTML = checkans(arr)
            // }
            // // let [v1, v2, v3, v4] = document.getElementsByName(`value${i}`)
            
                if (!v1.checked && !v2.checked && !v3.checked && !v4.checked && !v5.checked)
                    alert('select answer')

                else {
                    // if(!v1.checked&&!v2.checked&&!v3.checked&&!v4.checked&&!v5.checked)
                    // alert('select answer')
                    for (let j = 0; j < 5; j++) {
                        if (document.getElementsByName(`value${i}`)[j].checked)
                            arr.push(document.getElementsByName(`value${i}`)[j].value)
                    }
                    if(i<data.length-1){
                    i++;
                    //i++;display(i);


                    display(i)}
                    else{nextbutt.style.display = 'none';
                       finish.style.display = 'block'; 
                       finish.onclick=function(){
                       finish.style.display='none'
                       dev.innerHTML = `your result${checkans(arr)}`}}
                }
            
        }


        setInterval(() => {
            showbutt.style.display = 'none';
            nextbutt.style.display = 'none';
            stbutt.style.display = 'none'
            dev.innerHTML = 'SORRY,GAME OVER  :)';

            //     else {
            //         nextbutt.onclick = function () {
            //             i++;
            //             display(i);

            //         }



            //    }


        }, 180000);



    }


}
////////
//let container= document.getElementById('devid');
let next = document.getElementById('nextbutt');
let start = document.getElementById('stbutt');
let show = document.getElementById('showbutt');
let hiden = document.getElementById('hide');
let finish = document.getElementById('finish');
let your_result=document.getElementById('result')
showQues(data, 'devid', next, start, show)
