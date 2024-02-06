let timerRef;
function startTimer(){

    const circle = document.getElementsByClassName("circle")[0];
    const countdownNumberEl = document.getElementById('number-coundown')
    console.log(circle);
    
    let countdown = 16;
    let step = 100 / countdown;//passo da fare il colore
    let n1 = 0;
    timerRef = setInterval(function () {
        circle.style.background = `conic-gradient(#00ffff ${n1}%,  #886192 ${0}%) border-box`;
        countdownNumberEl.textContent = countdown;
        
        countdown = --countdown <= 0 ? 16 : countdown;
        n1 = n1 + step < 100 ? n1+step : 0 
    }, 1000);
}
startTimer()
    
    
function restartTimer(){
    clearInterval(timerRef);
    startTimer()
}