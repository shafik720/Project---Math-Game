let stopWatchNumber = document.getElementById('stopWatchNumber');



document.getElementById('startBtn').addEventListener('click',function(){
    stopWatch(10);
})









const stopWatch = (startingPoint) => {
    stopWatchNumber.innerText = startingPoint;
    stopWatchNumber.style.fontWeight = '700'
    stopWatchNumber.style.fontSize = '3em'
    let counter = startingPoint-1;
    let x = setInterval(()=>{
        stopWatchNumber.innerText = counter;
        counter--;
        if(counter<5){
            stopWatchNumber.style.color = 'red';
        }
        if(counter===-1){
            clearInterval(x);
        }
    },1000)
}