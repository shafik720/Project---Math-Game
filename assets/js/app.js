// getting all document values
let stopWatchNumber = document.getElementById('stopWatchNumber');
let stopWatchDiv = document.getElementById('stopWatchDiv');
let anserDiv1 = document.getElementById('anserDiv1');
let anserDiv2 = document.getElementById('anserDiv2');
let anserDiv3 = document.getElementById('anserDiv3');
let anserDiv4 = document.getElementById('anserDiv4');
let showGameNumber = document.getElementById('showGameNumber');
let showFirstNumber = document.getElementById('firstNumber');
let showSecondNumber = document.getElementById('secondNumber');
let scoreSpan = document.getElementById('scoreSpan');
let score = parseInt(scoreSpan.innerText);
let gameOverDivs = document.getElementById('gameOverDiv');
let gameOverScore = document.getElementById('gameOverScore');
let resetBtn = document.getElementById('resetBtn');
let tryAgain = document.getElementById('tryAgain');
let highScoreDiv = document.getElementById('highScore');
let highScore =  parseInt(highScoreDiv.innerText + 0);



// Making the Start button functional
document.getElementById('startBtn').addEventListener('click',function(){
    stopWatch(30);
    randomizeInBoxes();
    randomNumberInMainBox();
    calculation();
    document.getElementById('startBtn').setAttribute('disabled', true);
    resetBtn.style.display = 'block';
    gameOverScore.innerText = score;
    
})

// Making the reset button and try again button functional
resetBtn.addEventListener('click', function(){
    location.reload();
})
tryAgain.addEventListener('click', function(){
    location.reload();
})



let calculation = () => {
    showGameNumber.style.display = 'block';
    let result = parseInt(showFirstNumber.innerText) * parseInt(showSecondNumber.innerText);
    let boxArray = [anserDiv1,anserDiv2,anserDiv3,anserDiv4];    
    let lotteryForBoxes =  random(0,3);
    boxArray[lotteryForBoxes].innerText = result;
}



// function for showing stopwatch in the side panel
const stopWatch = (startingPoint) => {
    stopWatchDiv.style.display = 'flex';
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
            showGameOver();
            console.log("finished");
        }
        
    },1000)
}

// function for showing in the 4 boxes under the main box
const randomizeInBoxes = () => {
    let randomNumberArray = [];
    let boxArray = [anserDiv1,anserDiv2,anserDiv3,anserDiv4];
    for(let i=0;i<4;i++){        
        randomNumberArray.push(Math.ceil(Math.random() * 100));
    }
    for(let i=0;i<boxArray.length; i++){
        boxArray[i].innerText = randomNumberArray[i];
    }
}


// function for showing in the main box
const randomNumberInMainBox = () => {    
    function forFirstNumber(){
        let x = Math.ceil(Math.random()*10);
        if(x===0 || x===1 || x>10){
            return forFirstNumber();
        }
        showFirstNumber.innerText = x;
    }
    function forSecondNumber(){
        let x = Math.ceil(Math.random()*10);
        if(x===0 || x===1 || x>10){
            return forSecondNumber();
        }
        showSecondNumber.innerText = x;
    }
    forFirstNumber();
    forSecondNumber();
}

// function for random number under given min and max
function random(min, max){
    let x = Math.floor(Math.random() * (max-min+1)+min) ;
    return x;
}

function highScores(){
    
    if(score>highScore){
        highScore = score;
        highScoreDiv.innerText = highScore;
    }
}
console.log(highScore);

function answerDivFunction () {
    let clickedDiv = parseInt(event.target.innerText);
    let result = parseInt(showFirstNumber.innerText) * parseInt(showSecondNumber.innerText);
    
    if(clickedDiv===result){
        score = score + 5;
        scoreSpan.innerText = score;
        gameOverScore.innerText = score;
        highScores();
    }else{
        if(score>0 && score-2 >= 0){                    
            score = score -2;
            scoreSpan.innerText = score;
            gameOverScore.innerText = score;   
            highScores();
        }
    }
    if(anserDiv1.innerText){
        randomizeInBoxes();
        randomNumberInMainBox();
        calculation();
    }
}

function showGameOver(){
    gameOverDivs.style.display = 'flex';
    let answerDiv = document.getElementsByClassName('answerDiv1');
    for(let answerdiv of answerDiv){
        answerdiv.style.display = 'none';
        console.log(answerdiv);
    }
}