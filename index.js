const startE1 = document.getElementById("start")
const StopE1 = document.getElementById("stop")
const ResetE1 = document.getElementById("Reset")
const TimerE1 = document.getElementsByClassName("timer")[0];


let interval;

let timeLeft = 1800;
function updateTimer(){
    let minutes =Math.floor(timeLeft/60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    TimerE1.innerHTML = formattedTime;
}

function startTimer(){
    clearInterval(interval);
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if(timeLeft === 0){
            clearInterval(interval);
            alert("Time's up!");
            timeLeft=1800;
        }
    },1000);
}

function StopTimer(){
    clearInterval(interval);
}

function ResetTimer(){
    clearInterval(interval);
    timeLeft=1800;
    updateTimer();
}



startE1.addEventListener("click",startTimer)
StopE1.addEventListener("click",StopTimer)
ResetE1.addEventListener("click",ResetTimer)

