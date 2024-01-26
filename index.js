var timer = 60;

var score=0;

var Hitrn=0;

function makeBubble(){
    var clutter = "";

    for(var i=1 ; i<=176 ; i++){
      var rn =   Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`
    };
    
    document.querySelector('#pbtm').innerHTML = clutter;
};


function runtimer(){ 
   var timerInt = setInterval(function(){
        if(timer>0){
            timer--
            document.querySelector('.Int').textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`
        }
    },1000)
}


function hit(){

     Hitrn = Math.floor(Math.random()*10)
    document.querySelector('.Hitval').textContent = Hitrn;
}


 function IncreaseScore(){
    score+=10;
    document.querySelector(".score").textContent=score;
 }

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum == Hitrn){
        IncreaseScore();
        makeBubble();
        hit();
    }
})


makeBubble();

runtimer();

hit();

