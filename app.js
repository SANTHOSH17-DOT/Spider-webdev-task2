//highscore localstorage
var highScore;
if(localStorage.getItem('highScore')==null){
    highScore = 0;
    
}else{
    highScore = localStorage.getItem('highScore');
}

//intro page
var shipIcon = document.querySelector('#spaceShipIcon');

shipIcon.width = 350;
shipIcon.height = 350;
ctxSI = shipIcon.getContext('2d');
ctxSI.translate(200,55);
    ctxSI.rotate(-Math.PI/2);
ship(1,ctxSI);
function ship(x,ctxm){
    
    //body
    ctxm.fillStyle ='blue';
    ctxm.strokeStyle = 'black';
    ctxm.lineWidth = 5;

    ctxm.beginPath();
    ctxm.moveTo(0,0);
    ctxm.lineTo(-20/x,-20/x);
    ctxm.lineTo(-70/x,-15/x);
    ctxm.lineTo(-120/x,-10/x);
    ctxm.lineTo(-120/x,10/x);
    ctxm.lineTo(-70/x,15/x);
    ctxm.lineTo(-20/x,20/x);
    ctxm.lineTo(0,0);
    ctxm.fill();
    ctxm.stroke();

    //wings
    ctxm.fillStyle= 'red';
    ctxm.strokeStyle = 'black';
    ctxm.lineWidth = 5;
    ctxm.beginPath();
    ctxm.moveTo(-50/x,-70/x);
    ctxm.lineTo(-130/x,-70/x);
    ctxm.lineTo(-70/x,-15/x);
    ctxm.lineTo(-20/x,-20/x);
    ctxm.lineTo(-50/x,-70/x);
    ctxm.fill();
    ctxm.stroke();

    ctxm.fillStyle= 'red';
    ctxm.strokeStyle = 'black';
    ctxm.lineWidth = 5;
    ctxm.beginPath();
    ctxm.moveTo(-50/x,70/x);
    ctxm.lineTo(-130/x,70/x);
    ctxm.lineTo(-70/x,15/x);
    ctxm.lineTo(-20/x,20/x);
    ctxm.lineTo(-50/x,70/x);

    ctxm.fill();
    ctxm.stroke();

}


var alienIcon = document.querySelector('#alienIcon');
alienIcon.width = 350;
alienIcon.height = 350;
ctxA1 = alienIcon.getContext('2d');
ctxA1.translate(150,120);

function whiteSpikes(x,ctxm){
    var ang1 = 0;

ctxm.fillStyle = 'white';
ctxm.beginPath();
ctxm.moveTo(80/x*Math.cos(15*Math.PI/180),80/x*Math.sin(15*Math.PI/180));
while(ang1<=360){
  ctxm.rotate(-ang1*Math.PI/180);
  ctxm.lineTo(80/x*Math.cos(15*Math.PI/180),80/x*Math.sin(15*Math.PI/180));
  ctxm.lineTo(30/x,0);
  ctxm.rotate(ang1*Math.PI/180);
  ang1 +=30;
}
ctxm.fill();

}

whiteSpikes(1,ctxA1);



//game page
document.querySelector('#pDetails').innerHTML = highScore;
//game area
var aliens = [];
var bullets = [];
var spacer;
var hit = false;
var curDead;
function startGame(){
    gameArea.start();
    spacer = new spaceship(100,200);
}
var gameArea={
    canvas: document.querySelector('#gameArea'),
    start: function(){
        this.canvas.width = 800;
        this.canvas.height = 400;
        this.context = this.canvas.getContext('2d');
        this.interval = setInterval(updateGame,20);
        this.frameNo = 0;
    },
    clear: function(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    },
    stop: function(){
        clearInterval(this.interval);
    }
}
function spaceship(x,y){
    this.x = x;
    this.y = y;
    this.update=function(){
        ctx = gameArea.context;
        ctx.translate(this.x,this.y);
        ship(2,ctx);
        ctx.translate(-this.x,-this.y);
    }
    this.shipW=(alien)=>{
            crash = true;
            shipL = this.x-65;
            shipR = this.x-5;
            shipT = this.y-70/2;
            shipB = this.y+70/2;
            alienT = alien.y-50/3;
            alienB = alien.y + 50/3;
            alienR = alien.x + 50/3;
            alienL = alien.x-50/3;
            
            if(alienL>shipR||alienR<shipL||alienT>shipB||alienB<shipT){
                
                crash = false;
            }
            return crash;
        
    }
    
}
function whiteSpike(x,y){
    this.x = x;
    this.y = y;
    this.update = function(){
        ctx = gameArea.context;
        ctx.translate(this.x,this.y);
        whiteSpikes(3,ctx);
        ctx.translate(-this.x,-this.y);
    }
}
function bullet(x,y,radius,color){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.update=()=>{
        ctx = gameArea.context;
        ctx.translate(this.x,this.y);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(0,0,this.radius,0,2*Math.PI);
        ctx.fill();
        ctx.translate(-this.x,-this.y);
    }
    this.kill=()=>{
        kill = false;
        for(i=0;i<aliens.length;i++){
            
            if(this.radius+80/3>=Math.sqrt((this.x-aliens[i].x)**2+(this.y-aliens[i].y)**2)){
                
                kill = true;
                curDead = i;
                break;
            }
        }
        return kill;
    }
}
window.addEventListener('keydown',()=>{
    //keypress and keydown give diff keycode
    
    if(event.keyCode==39){
        if(spacer.x!=800){
            spacer.x +=10;
        }
        
    }
    else if(event.keyCode==37){
        if(spacer.x!=50){
            spacer.x -=10;
        }
        
    }
    else if(event.keyCode==40){
        if(spacer.y!=370)
        spacer.y +=10;
    }
    else if(event.keyCode==38){
        if(spacer.y!=30){
            spacer.y -=10;
        }
        
    }
    
});
window.addEventListener('click',()=>{
    bullets.push(new bullet(spacer.x,spacer.y,10,'gold'));
});


var level = 1;
var levelComp = 0;
var alienPos = 3;
var freq = 125;
var alienSpeed = 0.25;
var killStreak = 0;
var streak = 0;
var streakPoint = 0;
function updateGame(){
    console.log(killStreak);
    kill = false;
    i = 0;
    bullen = bullets.length;
    
    for(let i=0;i<bullen;i++){
        
        try{
            kill = bullets[i].kill();
        }
        catch{

        }
        
        if(kill==true){
            killStreak +=1;
            aliens.splice(curDead,1);
            // Something is wrong with splice
            //console.log(i);
           // console.log(bullets[i]);
            bullets.splice(i,1);
            
            curDead = null;
            points = document.querySelector('#points').textContent;
            document.querySelector('#points').textContent=parseInt(points)+10;
            kill = false;
            i-=1;
        }
    }
    
    
    
        
    
   gameover = false;
   for(i=0;i<aliens.length;i++){
       if(spacer.shipW(aliens[i]) == true){
           gameover = true;
           break;
       }
   }
   if(gameover){
       gameArea.stop();
       var points = parseInt(document.querySelector('#points').textContent);
        if(points>highScore){
            localStorage.setItem('highScore',points);
            document.querySelector('#pDetails').innerHTML = points;
        }
       document.querySelector('.fa-redo-alt').style.display = 'block';
        document.querySelector('#reset').style.display = 'block';
        gameArea.canvas.style.opacity = 0.4;
   }
   else{
    gameArea.clear();
    spacer.update();
    
    for(i=0;i<bullets.length;i++){
        if(bullets[i].x>800){
            killStreak = 0;
            bullets.splice(i,1);
        }else{
            bullets[i].x +=10;
            bullets[i].update();
        }
        
    }
    // killing streak bonus
    if(killStreak==3 &&killStreak!=0){
        streakPoint = 1;
        streak = 1;
        killStreak=0;
             
    }
    if(streakPoint==1){
        points = document.querySelector('#points').textContent;
            document.querySelector('#points').textContent=parseInt(points)+25;
            streakPoint =0;
    }
    if(streak==1){
        gameArea.context.fillStyle = 'lightgreen';
        gameArea.context.font = '15px Arial';
        gameArea.context.fillText('killing streak +25',spacer.x+20,spacer.y-20);
       setTimeout(()=>{streak=0},2000);
    }
    // Game levels
    //Dont't depend only on the frameNo for level advancement,
    // think abt the count of aliens
        
        gameArea.context.fillStyle = 'yellow';
        gameArea.context.font = '25px Arial';
        if(level==5){
            gameArea.context.fillText(`LAST LEVEL`,20,30);
        }else{
            gameArea.context.fillText(`LEVEL-${level}`,20,30);
        }
        
    
        if(gameArea.frameNo%1000==0 &&gameArea.frameNo!=0){
            if(level!=6){
                level +=1;
            points = document.querySelector('#points').textContent;
            document.querySelector('#points').textContent=parseInt(points)+50;
            alienPos +=2;
            freq-=25;
            alienSpeed +=1;
            levelComp = 1;
        
            
            }
            
        }
        if(levelComp == 1){
            gameArea.context.fillStyle = 'lightgreen';
            gameArea.context.font = '20px Arial';
            gameArea.context.fillText('level completion bonus +50',150,30);
            
        setTimeout(()=>{levelComp =0;},2000);
        }
    for(i=0;i<aliens.length;i++){
        aliens[i].x -=alienSpeed;
        aliens[i].update();
    }
    
    
    if(gameArea.frameNo%freq==0 ){
        decision = Math.floor(Math.random()*alienPos)+1;
        
        for(i=1;i<=1;i++){
            aliens.push(new whiteSpike(800+100*(i-1),decision*100));
        }
        
    }
    gameArea.frameNo+=0.5;
   }
   if(level==6){
    gameArea.stop();
    gameArea.clear();
    
    
       var points = parseInt(document.querySelector('#points').textContent);
        if(points>highScore){
            localStorage.setItem('highScore',points);
            document.querySelector('#pDetails').innerHTML = points;
        }
        gameArea.context.fillStyle = 'red';
        gameArea.context.font = '40px Arial';
        gameArea.context.fillText('Game Over',300,200);
        setTimeout(()=>{
            document.querySelector('.fa-redo-alt').style.display = 'block';
        document.querySelector('#reset').style.display = 'block';
        gameArea.canvas.style.opacity = 0.4;
        },1000);
       
        
    
}
    
}
//play btn
play = document.querySelector('#playBtn');
play.addEventListener('click',()=>{
    document.querySelector('#game').style.display = 'flex';
    document.querySelector('#intro').style.display = 'none';
    document.querySelector('#points').innerHTML = 0;
    startGame();
    aliens = [];
});

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click',()=>{
    
    document.querySelector('.fa-redo-alt').style.display = '';
    document.querySelector('#reset').style.display = '';
    
    document.querySelector('#intro').style.display = 'flex';
    document.querySelector('#game').style.display = 'none';
    gameArea.canvas.style.opacity = 1;
    document.querySelector('body').style.cursor = 'auto';
    
});