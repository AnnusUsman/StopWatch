var ms = 00;
var sec = 00;
var min = 00;
var msIncr = document.getElementById('ms')
var secIncr = document.getElementById('sec')
var minIncr = document.getElementById('min')
var countDown;

function timer() {
    ms++
    msIncr.innerHTML = ms;

    if (ms>=100){
        sec++
        secIncr.innerHTML = sec;
        ms = 0
    }
    else if (sec>=60){
        min++
        minIncr.innerHTML = min;
        sec = 0
    }
}
function start(){
    countDown = setInterval(timer,10);
    document.getElementById('star').disabled = true;
    document.getElementById('restar').disabled = true;;
}
function pause() {
    clearInterval(countDown);
    document.getElementById('restar').disabled = false;
}
function reset() {
    clearInterval(countDown);
    ms=00;sec=00;min=00;
    msIncr.innerHTML=ms;
    secIncr.innerHTML =sec;
    minIncr.innerHTML=min;
    document.getElementById('star').disabled = false;
    document.getElementById('restar').disabled = false;
}
function restart() {
    pause();
    start();
    
}

