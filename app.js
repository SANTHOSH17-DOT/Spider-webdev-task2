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

//spaceship design
function ship(x,ctxm){
    
    //body
    ctxm.fillStyle ='blue';
    ctxm.strokeStyle = 'black';
    ctxm.lineWidth = 2.5;

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
    ctxm.lineWidth = 2.5;
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
    ctxm.lineWidth = 2.5;
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

//Basic white spike design
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
//White spike boss 
function bossD1(x,ctxm){
    ctxm.fillStyle = 'white';
    ctxm.beginPath();
    ctxm.arc(0,0,25/x,0,2*Math.PI);
    ctxm.fill();
    var ang = 0;
    while(ang<=360){
        ctxm.rotate(ang*Math.PI/180);
        ctxm.beginPath();
        ctxm.fillStyle = 'white';
        ctxm.moveTo(50/x,0);
        ctxm.lineTo(75/x*Math.cos(Math.PI/12),75/x*Math.sin(Math.PI/12));
        ctxm.lineTo(50/x*Math.cos(Math.PI/6),50/x*Math.sin(Math.PI/6));
        ctxm.fill();
        ctxm.rotate(-ang*Math.PI/180);
        ang+=30;
    }

}
function bossD2(x,ctxm){
    var ang = 0;
    ctxm.fillStyle = 'white';
    ctxm.beginPath();
    while(ang<=360){
        ctxm.rotate(-ang*Math.PI/180);
        ctxm.moveTo(0,0);
        ctxm.lineTo(100/x*Math.cos(15*Math.PI/180),100/x*Math.sin(15*Math.PI/180));
        ctxm.lineTo(50/x*Math.cos(30*Math.PI/180),50/x*Math.sin(30*Math.PI/180));
        ctxm.rotate(ang*Math.PI/180);
  
        ang+=30;
    }
    ctxm.fill();
}

function bossD3(x,ctxm){
    var ang = 0;
    ctxm.fillStyle = 'white';
    ctxm.beginPath();
    ctxm.arc(0,0,25/x,0,2*Math.PI);
    ctxm.fill();
    ctxm.fillStyle = 'white';
    ctxm.beginPath();
    while(ang<=360){
        ctxm.rotate(-ang*Math.PI/180);
        ctxm.moveTo(40/x,0);
         ctxm.lineTo(130/x*Math.cos(15*Math.PI/180),130/x*Math.sin(15*Math.PI/180)); 
         ctxm.lineTo(70/x*Math.cos(30*Math.PI/180),70/x*Math.sin(30*Math.PI/180));
        ctxm.rotate(ang*Math.PI/180);
        
        ang+=30;
        
      }
      ctxm.fill();
}
function bossD4(x,ctxm){
    ctxm.fillStyle = 'white';
    ctxm.beginPath();
    ctxm.arc(0,0,25/x,0,2*Math.PI);
    ctxm.fill();
    var ang = 0;
    while(ang<=360){
        ctxm.rotate(ang*Math.PI/180);
        ctxm.beginPath();
        ctxm.fillStyle = 'white';
        ctxm.moveTo(50/x,0);
        ctxm.lineTo(75/x*Math.cos(Math.PI/12),75/x*Math.sin(Math.PI/12));
        ctxm.lineTo(50/x*Math.cos(Math.PI/6),50/x*Math.sin(Math.PI/6));
        ctxm.fill();
        ctxm.fillStyle= 'white';
        ctxm.arc(90/x*Math.cos(Math.PI/12),90/x*Math.sin(Math.PI/12),10,0,2*Math.PI);
        ctxm.fill();
        ctxm.rotate(-ang*Math.PI/180);
        
        ang+=30;
    }
}
function bossD5(x,ctxm){
    var ang = 0;
    ctxm.fillStyle = 'white';
    ctxm.beginPath();
    ctxm.arc(0,0,25/x,0,2*Math.PI);
    ctxm.fill();
    ctxm.fillStyle = 'white';
    ctxm.beginPath();
    while(ang<=360){
        ctxm.rotate(-ang*Math.PI/180);
        ctxm.moveTo(40/x,0);
         ctxm.lineTo(130/x*Math.cos(15*Math.PI/180),130/x*Math.sin(15*Math.PI/180)); 
         ctxm.lineTo(70/x*Math.cos(30*Math.PI/180),70/x*Math.sin(30*Math.PI/180));
         ctxm.fillStyle= 'white';
         ctxm.arc(145/x*Math.cos(Math.PI/12),145/x*Math.sin(Math.PI/12),10,0,2*Math.PI);
         ctxm.fill();
         ctxm.rotate(ang*Math.PI/180);
        
        ang+=30;
        
      }
      ctxm.fill();
}
//missile design
function missileD(x,ctxm){
    ctxm.beginPath();
    ctxm.fillStyle = 'rgb(102, 156, 33)'
    ctxm.moveTo(0,0);
    ctxm.quadraticCurveTo(0,-50/x,-100/x,-25/x);
    ctxm.quadraticCurveTo(-125/x,-30/x,-125/x,-40/x);
    ctxm.lineTo(-125/x,40/x);
    ctxm.quadraticCurveTo(-125/x,30/x,-100/x,25/x);
    ctxm.quadraticCurveTo(0,50/x,0,0);
    ctxm.fill();
    ctxm.fillStyle = 'yellow';
    ctxm.beginPath();
    ctxm.moveTo(-125/x,-40/x);
    ctxm.lineTo(-140/x,-40/x);
    ctxm.lineTo(-140/x,40/x);
    ctxm.lineTo(-125/x,40/x);
    ctxm.fill();
}
//game page
document.querySelector('#pDetails').innerHTML = highScore;

var alienkill = new sound('alienkill.wav');
var levelup = new sound('levelup.wav');
var bulletSound = new sound('bullet.wav');
var playgame = new sound('play.wav');
var death = new sound('Death.wav');
var complete = new sound('Complete.wav');
//game area
var aliens = [];
var boss = [];
var bullets = [];
var missiles = [];
var spacer;
var missileIcon;
var hit = false;
var curDead;

function startGame(){
    gameArea.start();
    spacer = new spaceship(100,200);
    missileIcon = new missile(75,350,3.5,1,0);
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
function specialBar(x){
    this.x = x;
    this.update = function(){
        ctx = gameArea.context;
        ctx.translate(580,30);
        ctx.fillStyle = 'black';
        ctx.fillRect(0,0,200,30);
        ctx.strokeStyle = 'yellow';
        ctx.beginPath();
        ctx.moveTo(60,0);
        ctx.lineTo(60,30);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(120,0);
        ctx.lineTo(120,30);
        ctx.stroke();
        ctx.fillStyle = 'red';
        ctx.fillRect(5,5,this.x,25);
        ctx.translate(-580,-30);
    }
}
function missile(x,y,scale,type,count){
    this.x = x;
    this.y = y;
    this.type = type;
    this.scale = scale;
    this.count = count;
    this.update =function(){
        ctx =gameArea.context;
        ctx.translate(this.x,this.y);
        missileD(this.scale,ctx);
        ctx.fillStyle = 'white';
        if(this.type ==1){
            ctx.font = '30px Arial';
            
        ctx.fillText(this.count,-5,25);
        }
        
        ctx.translate(-this.x,-this.y);
    }
    this.kill=()=>{
        kill = false;
        for(i=0;i<aliens.length;i++){
            
            if(80/3>=Math.sqrt((this.x-aliens[i].x)**2+(this.y-aliens[i].y)**2)){
                
                kill = true;
                
                break;
            }
        }
        return kill;
    }
    this.boss1Kill = ()=>{
        kill = false;
        for(i =0;boss.length;i++){
            if(75/boss[i].scale>=Math.sqrt((this.x-boss[i].x)**2+(this.y-boss[i].y)**2)){
                
                    kill = true;
                    break;
                
            }
        }
        return kill;
    }
    this.boss2Kill = ()=>{
        kill = false;
        for(i=0;boss.length;i++){
            if(100/boss[i].scale>=Math.sqrt((this.x-boss[i].x)**2+(this.y-boss[i].y)**2)){
                
                        kill = true;
                        break;
                    
            }
           
        }
        return kill;
    }
    this.boss3Kill = ()=>{
        kill = false;
        for(i=0;boss.length;i++){
            if(130/boss[i].scale>=Math.sqrt((this.x-boss[i].x)**2+(this.y-boss[i].y)**2)){
                
                        kill = true;
                        break
                    }
           
        }
        return kill;
    }
    this.boss4Kill = ()=>{
        kill = false;
        for(i=0;boss.length;i++){
            if(130/boss[i].scale>=Math.sqrt((this.x-boss[i].x)**2+(this.y-boss[i].y)**2)){
                
                        kill = true;
                        
                    }
            }
            return kill;
        
        
    }
    this.boss5Kill = ()=>{
        kill = false;
        for(i=0;boss.length;i++){
            if(130/boss[i].scale>=Math.sqrt((this.x-boss[i].x)**2+(this.y-boss[i].y)**2)){
                
                        kill = true;
                        
                    }
            }
            return kill;
        
        
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
    this.shipW1 = (boss1)=>{
        crash = true;
        shipL = this.x-65;
        shipR = this.x-5;
        shipT = this.y-70/2;
        shipB = this.y+70/2;      
        boss1T = boss1.y-75/boss1.scale;
        boss1B = boss1.y +75/boss1.scale;
        boss1R = boss1.x + 75/boss1.scale;
        boss1L = boss1.x-75/boss1.scale;  
        if(boss1L>shipR||boss1R<shipL||boss1T>shipB||boss1B<shipT){
                
            crash = false;
        }
        return crash;
    }
    this.shipW2 = (boss2)=>{
        crash = true;
        shipL = this.x-65;
        shipR = this.x-5;
        shipT = this.y-70/2;
        shipB = this.y+70/2;   
        boss2T = boss2.y-100/boss2.scale;
        boss2B = boss2.y +100/boss2.scale;
        boss2R = boss2.x + 100/boss2.scale;
        boss2L = boss2.x-100/boss2.scale;   
        if(boss2L>shipR||boss2R<shipL||boss2T>shipB||boss2B<shipT){
                
            crash = false;
        }
        return crash;  
    }
    this.shipW3 = (boss3)=>{
        crash = true;
        shipL = this.x-65;
        shipR = this.x-5;
        shipT = this.y-70/2;
        shipB = this.y+70/2;       
        boss3T = boss3.y-100/boss3.scale;
        boss3B = boss3.y +100/boss3.scale;
        boss3R = boss3.x + 100/boss3.scale;
        boss3L = boss3.x-100/boss3.scale;  
        if(boss3L>shipR||boss3R<shipL||boss3T>shipB||boss3B<shipT){
                
            crash = false;
        }
        return crash;       
    }
    this.shipW4 = (boss4)=>{
        crash = true;
        shipL = this.x-65;
        shipR = this.x-5;
        shipT = this.y-70/2;
        shipB = this.y+70/2;       
        boss4T = boss4.y-150/boss4.scale;
        boss4B = boss4.y +150/boss4.scale;
        boss4R = boss4.x + 150/boss4.scale;
        boss4L = boss4.x-150/boss4.scale;   
        if(boss4L>shipR||boss4R<shipL||boss4T>shipB||boss4B<shipT){
                
            crash = false;
        }
        return crash;           
    }
}
function whiteSpike(x,y,dec){
    this.x = x;
    this.y = y;
    this.type = 1;
    this.life = 1;
    if(dec==1){
        this.up = false;
    }else{
        this.up = true;
    }
    
    this.update = function(){
        ctx = gameArea.context;
        ctx.translate(this.x,this.y);
        whiteSpikes(3,ctx);
        ctx.translate(-this.x,-this.y);
    }
}
function boss1(x,y,dec,scale){
    this.x = x;
    this.y = y;
    this.type == 2;
    this.life = 2;
    this.scale = scale;
    if(dec==1){
        this.up = false;
    }else{
        this.up = true;
    }
    this.update = function(){
        ctx = gameArea.context;
        ctx.translate(this.x,this.y);
        bossD1(this.scale,ctx);
        ctx.translate(-this.x,-this.y);
    }
}
function boss2(x,y,dec,scale){
    this.x = x;
    this.y =y ;
    this.type = 3;
    this.life = 3;
    this.scale = scale;
    if(dec==1){
        this.up = false;
    }else{
        this.up = true;
    }
    this.update = function(){
        ctx = gameArea.context;
        ctx.translate(this.x,this.y);
        bossD2(this.scale,ctx);
        ctx.translate(-this.x,-this.y);
    }
}
function boss3(x,y,dec,scale){
    this.x = x;
    this.y = y;
    this.type = 4;
    this.life = 4;
    this.scale = scale;
    if(dec==1){
        this.up = false;
    }else{
        this.up = true;
    }
    this.update = function(){
        ctx = gameArea.context;
        ctx.translate(this.x,this.y);
        bossD3(this.scale,ctx);
        ctx.translate(-this.x,-this.y);
    }
}
function boss4(x,y,dec,scale){
    this.x = x;
    this.y = y;
    this.type = 5;
    this.life = 5;
    this.scale = scale;
    if(dec==1){
        this.up = false;
    }else{
        this.up = true;
    }
    this.update = function(){
        ctx = gameArea.context;
        ctx.translate(this.x,this.y);
        bossD4(this.scale,ctx);
        ctx.translate(-this.x,-this.y);
    }
}
function boss5(x,y,dec,scale){
    this.x = x;
    this.y = y;
    this.type = 6;
    this.life = 6;
    this.scale = scale;
    if(dec==1){
        this.up = false;
    }else{
        this.up = true;
    }
    this.update = function(){
        ctx = gameArea.context;
        ctx.translate(this.x,this.y);
        bossD5(this.scale,ctx);
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
                if(aliens[i].life!=0){
                    aliens[i].life-=1;
                }
                kill = true;
                curDead = i;
                break;
            }
        }
        return kill;
    }
    this.boss1Kill = ()=>{
        kill = false;
        for(i =0;boss.length;i++){
            if(this.radius+75/boss[i].scale>=Math.sqrt((this.x-boss[i].x)**2+(this.y-boss[i].y)**2)){
                boss1Kill+=1;
                shot = 1;
                if(boss1Kill==5){
                    kill = true;
                    break;
                }
            }
        }
        return kill;
    }
    this.boss2Kill = ()=>{
        kill = false;
        for(i=0;boss.length;i++){
            if(this.radius+100/boss[i].scale>=Math.sqrt((this.x-boss[i].x)**2+(this.y-boss[i].y)**2)){
                boss2Kill+=1;
                    shot = 1;
                    if(boss2Kill==10){
                        kill = true;
                        
                    }
            }
            return kill;
        }
        
    }
    this.boss3Kill = ()=>{
        kill = false;
        for(i=0;boss.length;i++){
            if(this.radius+130/boss[i].scale>=Math.sqrt((this.x-boss[i].x)**2+(this.y-boss[i].y)**2)){
                boss3Kill+=1;
                    shot = 1;
                    if(boss3Kill==10){
                        kill = true;
                        
                    }
            }
            return kill;
        }
        
    }
    this.boss4Kill = ()=>{
        kill = false;
        for(i=0;boss.length;i++){
            if(this.radius+130/boss[i].scale>=Math.sqrt((this.x-boss[i].x)**2+(this.y-boss[i].y)**2)){
                boss4Kill+=1;
                    shot = 1;
                    if(boss4Kill==10){
                        kill = true;
                        
                    }
            }
            return kill;
        }
        
    }
    this.boss5Kill = ()=>{
        kill = false;
        for(i=0;boss.length;i++){
            if(this.radius+130/boss[i].scale>=Math.sqrt((this.x-boss[i].x)**2+(this.y-boss[i].y)**2)){
                boss5Kill+=1;
                    shot = 1;
                    if(boss5Kill==10){
                        kill = true;
                        
                    }
            }
            return kill;
        }
        
    }


}
window.addEventListener('keydown',()=>{
    //keypress and keydown give diff keycode
    if(event.keyCode==32){
        if(missileIcon.count!=0){
            missileIcon.count-=1;
            
        missiles.push(new missile(spacer.x,spacer.y,2.5,0,0));
        
        }
        
    }
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
document.querySelector('#game').addEventListener('click',()=>{
    
    try{
        bulletSound.start();
        if(specPow%1000<300){
            bullets.push(new bullet(spacer.x,spacer.y,10,'gold'));
        }
        else if(600>specPow%1000&&specPow%1000>=300){
            
            bullets.push(new bullet(spacer.x-25,spacer.y-35,10,'gold'));
            bullets.push(new bullet(spacer.x-25,spacer.y+35,10,'gold'));
        }

        else if(600<=specPow%1000<=1000){
            bullets.push(new bullet(spacer.x-25,spacer.y-35,10,'gold'));
            bullets.push(new bullet(spacer.x-25,spacer.y+35,10,'gold'));
            bullets.push(new bullet(spacer.x,spacer.y,10,'gold'));
        }
    }
    catch{}
});


var level = 1;
var levelComp = 0;
var alienPos = 3;
var num = 1;
var alienSpeed = 1;
var killStreak = 0;
var streak = 0;
var streakPoint = 0;
var remTime = 40;
var bossEntry = 0;
var boss1Kill = 0;
var boss2Kill = 0;
var boss3Kill = 0;
var boss4Kill = 0;
var boss5Kill = 0;
var shot = 0;
var missileCount=0;
var missileIcon;
    var interval = setInterval(()=>{
        
        remTime -=1;
        
    },1000);
    var specPow =0; 
function updateGame(){
    
    if(remTime==0){
        remTime = 40;
    }
    var kill = false;
    var bossKill = false;
    i = 0;
    bullen = bullets.length;
    
    for(let i=0;i<bullen;i++){
        
        try{
            kill = bullets[i].kill();
            if(level==1){
                bossKill = bullets[i].boss1Kill();
            }
            else if(level==2){
                bossKill = bullets[i].boss2Kill();
            }
            else if(level==3){
                bossKill = bullets[i].boss3Kill();
            }
            else if(level==4){
                bossKill = bullets[i].boss4Kill();
            }
            else if(level==5){
                bossKill = bullets[i].boss5Kill();
            }
        }
        catch{

        }
        
        if(shot==1){
            bullets.splice(i,1);
            shot = 0;
        }
        if(bossKill==true){
            boss.splice(0,1);
            bullets.splice(i,1);
            points = document.querySelector('#points').textContent;
            document.querySelector('#points').textContent=parseInt(points)+50;
        }
        
        
        if(kill==true && aliens[curDead].life==0){
            killStreak +=1;
            aliens.splice(curDead,1);
            alienkill.start();
            
            bullets.splice(i,1);
            
            curDead = null;
            points = document.querySelector('#points').textContent;
            document.querySelector('#points').textContent=parseInt(points)+10;
            kill = false;
            i-=1;
        }else if(kill==true){
            bullets.splice(i,1);
            kill = false;
            i-=1;
        }
    }
    
    
    
        
    
   var gameover = false;
   try{
    
       if(level==1){
        if(spacer.shipW(boss[0]) == true){
            gameover=true;
           
        }
       }else if(level==2){
        if(spacer.shipW1(boss[0]) == true){
            gameover=true;
        }
       }
       else if(level==3){
        if(spacer.shipW2(boss[0]) == true){
            gameover=true;
        }
       }
       else if(level==4){
        if(spacer.shipW3(boss[0]) == true){
            gameover=true;
        }
       }
       else if(level==5){
        if(spacer.shipW4(boss[0]) == true){
            gameover=true;
        }
       }
   }
  catch{

  }
if(gameover==false){
    for(i=0;i<aliens.length;i++){
        if(level==1){
         if(spacer.shipW(aliens[i]) == true&& aliens[i].type ==1){
             gameover = true;
             break;
         }
         
        }
        else if(level==2){
         if(spacer.shipW1(aliens[i]) == true && aliens[i].type ==2){
             gameover = true;
             break;
         }
        }
        else if(level==3){
            if(spacer.shipW2(aliens[i]) == true && aliens[i].type ==3){
                gameover = true;
                break;
            }
           }
           else if(level==4){
            if(spacer.shipW3(aliens[i]) == true && aliens[i].type ==4){
                gameover = true;
                break;
            }
           }
           else if(level==5){
            if(spacer.shipW4(aliens[i]) == true && aliens[i].type ==5){
                gameover = true;
                break;
            }
           }
    }
}
   
   if(gameover){
       gameArea.stop();
       
        document.querySelector('#game').style.pointerEvents = 'none';
        document.querySelector('#game').style.cursor = 'pointer';
       document.querySelector('.fa-redo-alt').style.display = 'block';
       document.querySelector('#specialLevel').style.display = 'block';
        document.querySelector('#reset').style.display = 'block';
        gameArea.canvas.style.opacity = 0.4;
        clearInterval(interval);remTime = 31;
        death.start();
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
    if(killStreak==5 &&killStreak!=0){
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
                levelup.start();
            points = document.querySelector('#points').textContent;
            document.querySelector('#points').textContent=parseInt(points)+50;
            alienPos +=1.25;
            freq-=20;
            alienSpeed +=0.5;
            levelComp = 1;
                num+=1;
            
            }
            
        }
        if(levelComp == 1){
            gameArea.context.fillStyle = 'lightgreen';
            gameArea.context.font = '20px Arial';
            gameArea.context.fillText('level completion bonus +50',180,30);
            
        setTimeout(()=>{levelComp =0;},2000);
        }
        
    for(i=0;i<aliens.length;i++){
        if(aliens[i].y>350){
            aliens[i].up = true;
        }else if(aliens[i].y<50){
            aliens[i].up = false;
        }
        
        if(level>=3){
            
            if(aliens[i].up ==true){
                aliens[i].y-=alienSpeed;
            }else{
                aliens[i].y+=alienSpeed;
            }
            
        }
        
            aliens[i].x -=alienSpeed;
        
        
        aliens[i].update();
    }
    // Missiles
    for(i=0;i<missiles.length;i++){
        console.log(missiles);
        missiles[i].x +=5;
        missiles[i].update();
        try{
            if(missiles[i].kill()||missiles[i].boss1Kill||missiles[i].boss2Kill||missiles[i].boss3Kill||missiles[i].boss4Kill||missiles[i].boss5Kill){
                points = document.querySelector('#points').textContent;
            document.querySelector('#points').textContent=parseInt(points)+10*aliens.length+50;
                aliens = [];
                boss =  [];
                missiles.splice(i,1);
            }
        }catch{}
           
        
    }
    if(gameArea.frameNo%125==0 ){
        decision = Math.floor(Math.random()*alienPos)+1;
        if(level==1){
            for(i=1;i<=num;i++){
                aliens.push(new whiteSpike(800+100*(i-1),decision*400/(alienPos+1),Math.floor(Math.random()*2)));
            }
        }else if(level==2){
            for(i=1;i<=num;i++){
                aliens.push(new boss1(800+100*(i-1),decision*400/(alienPos+1),Math.floor(Math.random()*2),2.2));
            }
        }else if(level==3){
            for(i=1;i<=num;i++){
                aliens.push(new boss2(800+100*(i-1),decision*400/(alienPos+1),Math.floor(Math.random()*2),2.5));
            }
        }else if(level==4){
            for(i=1;i<=num;i++){
                aliens.push(new boss3(800+100*(i-1),decision*400/(alienPos+1),Math.floor(Math.random()*2),3.1));
            }
        }
        else if(level==5){
            for(i=1;i<=num;i++){
                aliens.push(new boss4(800+100*(i-1),decision*400/(alienPos+1),Math.floor(Math.random()*2),3));
            }
        }
        
        
    }
    for(i=0;i<boss.length;i++){
        
        if(remTime<3){
            boss[i].x -= 7;
        }else{
            boss[i].x -= 0.25;
        }
        
        boss[i].update();
        if(boss[i].x<-75){
            boss.splice(i,1);
        }
    }
    if(remTime==15 && level==1 && bossEntry == 1){
        boss.push(new boss1(875,200,1,1.2));
        bossEntry = 0;
    } else if(remTime !=15){
        bossEntry = 1;
    }
    if(remTime==15 && level==2 && bossEntry == 1){
        boss.push(new boss2(875,200,1,1.3));
        bossEntry = 0;
    } else if(remTime !=15){
        bossEntry = 1;
    }
    if(remTime==15 && level==3 && bossEntry == 1){
        boss.push(new boss3(875,200,1,1.3));
        bossEntry = 0;
    } else if(remTime !=15){
        bossEntry = 1;
    }if(remTime==15 && level==4 && bossEntry == 1){
        boss.push(new boss4(875,200,1,1.3));
        bossEntry = 0;
    } else if(remTime !=15){
        bossEntry = 1;
    }if(remTime==15 && level==5 && bossEntry == 1){
        boss.push(new boss4(875,200,1,1.3));
        bossEntry = 0;
    } else if(remTime !=15){
        bossEntry = 1;
    }
    gameArea.frameNo+=0.5;
   }
   if(level==6){
       complete.start();
    gameArea.stop();
    gameArea.clear();
    clearInterval(interval);
    remTime = 40;
    
       var points = parseInt(document.querySelector('#points').textContent);
        if(points>highScore){
            localStorage.setItem('highScore',points);
            document.querySelector('#pDetails').innerHTML = points;
        }
        gameArea.context.fillStyle = 'red';
        gameArea.context.font = '40px Arial';
        gameArea.context.fillText('Game Over',300,200);
        document.querySelector('#game').style.pointerEvents = 'none';
        document.querySelector('#game').style.cursor = 'pointer';
        setTimeout(()=>{
            document.querySelector('.fa-redo-alt').style.display = 'block';
        document.querySelector('#reset').style.display = 'block';
        gameArea.canvas.style.opacity = 0.4;
        },1000);
       
    
}

ctx = gameArea.context;
ctx.fillStyle = 'yellow';
ctx.font='30px Arial';
ctx.fillText(remTime,750,375);

//special bar 

powerBar = new specialBar((specPow%1000)/(100/19));




specPow = parseInt(document.querySelector('#points').textContent);
    
    powerBar.update();

   
if(missileCount!=Math.floor(specPow/1000)){
    console.log(missileIcon.count);
    missileIcon.count +=1;
    
}
missileIcon.update();
missileCount = Math.floor(specPow/100);
}
document.querySelector('#specialLevel').addEventListener('click',()=>{
    document.querySelector('#speclvl').style.display = 'block';
    document.querySelector('.fa-redo-alt').style.display = '';
    document.querySelector('#reset').style.display = '';
    document.querySelector('#gameArea').style.display = 'none';
    document.querySelector('#specialLevel').style.display = 'none';
    
});
//special level
var nums = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
var puzz = [];
var puzzI = [];
var click = 0;
var val1;
var val2;
for(i=0;i<4;i++){
  arr = [];
  for(j=0;j<4;j++){
    dec =Math.floor(Math.random()*nums.length);
    arr.push(nums[dec]);
    nums.splice(dec,1);
  }
  puzz.push(arr);
}
var canvasSpeclvl = document.querySelector('#speclvl');
canvasSpeclvl.width = 400;
canvasSpeclvl.height = 400;
ctxSL = canvasSpeclvl.getContext('2d');
function card(i,j){
    ctxSL.translate(i*50,j*50);
    ctxSL.fillStyle = 'black';
  ctxSL.strokeStyle = 'white';
  ctxSL.rect(0,0,50,50);
  ctxSL.fill();
  ctxSL.stroke();
  ctxSL.translate(-i*50,-j*50);
}
function emptyCard(i,j){
    ctxSL.translate(i*50,j*50);
    ctxSL.fillStyle = 'white';
    ctxSL.fillRect(0,0,50,50);
  
    ctxSL.translate(-i*50,-j*50);
}
for(i=1;i<5;i++){
  for(j=1;j<5;j++){
  card(i,j);
  }
  
}
canvasSpeclvl.addEventListener('click',(event)=>{
    
    click+=1;
    if(click==2){
    for(i=1;i<5;i++){
  for(j=1;j<5;j++){
        card(i,j);
  }
  
}
    click = 0;
      val1 = 0;
    val2 = 0;
  }
  for(k = 0 ;k<puzzI.length;k++){
    emptyCard(puzzI[k][1],puzzI[k][0]);
}  
    x = event.clientX;
    y = event.clientY;
  console.log(x,y);
  for(i=1;i<5;i++){
    for(j=1;j<5;j++){ 
    if(x<50*(j-1)+670&&y<50*(i-1)+325&&x>50*(j-1)+620&&y>50*(i-1)+275){
      
      if(val1!=0){
        val2= [i-1,j-1];
      }else{
        val1 = [i-1,j-1];
        
      }
      
      try{
        if(puzz[val1[0]][val1[1]]==puzz[val2[0]][val2[1]]){ 
             val1[0]+=1;
             val1[1] +=1;
             val2[0]+=1;
             val2[1]+=1;
          puzzI.push(val1);
          puzzI.push(val2);
        }
      }
       catch{}
     ctx.translate(50*j,50*i);
      ctx.strokeStyle = 'white';
      ctx.font= '20px Arial';
      
      ctx.strokeText(puzz[i-1][j-1],25,25);
      ctx.translate(-50*j,-50*i);
    }
    }
  }
   
});

//play btn
play = document.querySelector('#playBtn');
play.addEventListener('click',()=>{
    document.querySelector('#game').style.display = 'flex';
    document.querySelector('#speclvl').style.display = 'none';
    document.querySelector('#intro').style.display = 'none';
    document.querySelector('#points').innerHTML = 0;
    document.querySelector('#game').style.pointerEvents = 'all';
    startGame();
    clearInterval(interval);
    complete.stop();
    death.stop();
    playgame.start();
    remTime = 40;
    interval = setInterval(()=>{
        
        remTime -=1;
        
    },1000);
    aliens = [];
    boss = [];
    level = 1;
    
 levelComp = 0;
 alienPos = 3;
 freq = 125;
 num =1;
 alienSpeed = 0.25;
 killStreak = 0;
 streak = 0;
 streakPoint = 0;
  bossEntry = 0;
 boss1Kill = 0;
  boss2Kill = 0;
 boss3Kill = 0;
 boss4Kill = 0;
 boss5Kill = 0;
 shot = 0;
});

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click',()=>{
    document.querySelector('#specialLevel').style.display = 'none';
    var points = parseInt(document.querySelector('#points').textContent);
        if(points>highScore){
            localStorage.setItem('highScore',points);
            document.querySelector('#pDetails').innerHTML = points;
        }
    document.querySelector('.fa-redo-alt').style.display = '';
    document.querySelector('#reset').style.display = '';
    
    document.querySelector('#intro').style.display = 'flex';
    document.querySelector('#game').style.display = 'none';
    gameArea.canvas.style.opacity = 1;
    document.querySelector('body').style.cursor = 'auto';
    
});
function sound(src){
    this.sound = document.createElement('audio');
    this.sound.src = src;
    this.sound.style.display = 'none';
    document.body.appendChild = this.sound;
    this.start = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}