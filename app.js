let intervalStart = document.getElementById("interval-start")
let intervalDiv  = document.getElementById("interval-div")
let intervalStop = document.getElementById("intervalStop")


let count = 10

let myTimeout = function (){
    let myTime = setTimeout(function (){
        if (count >= 0){
            intervalDiv.innerHTML = "Il vous reste: " + count + "secondes";
            count--;
            myTimeout()
        }
    },1000); // 600000 < 10 minutes
    intervalStop.addEventListener("click", () => { // Permet de clear
        clearInterval(myTime);
    })
}

intervalStart.addEventListener("click", myTimeout);