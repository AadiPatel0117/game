var ground1,theif,aadi,keyy;
var story1=1;
var story2=2; 
var story3=3;
var story4=4; 
var story5=5;
var story6=6; 
var play= "start";
var end="over";
var out="gameover"
var gamestate=story1;
var counter 

function preload() {


escapekeyimg = loadImage("imagesofprisonergame/escapekey.png")
escaperoomimg = loadImage("imagesofprisonergame/escaperoomimg.jpg")
jailcell = loadImage("imagesofprisonergame/jailcell.jpg")
policestationimg = loadImage("imagesofprisonergame/policestation.jpg")
mainimg = loadAnimation("imagesofprisonergame/runningmain.png","imagesofprisonergame/standingmain.png")
policemanimg = loadAnimation("imagesofprisonergame/standingpoliceman.png","imagesofprisonergame/walkingpoliceman.png")
theifimg = loadAnimation("imagesofprisonergame/standingtheif.png","imagesofprisonergame/walkingtheif.png")
theifstaticimg=loadAnimation("imagesofprisonergame/standingtheif.png")
mainstaticimg=loadAnimation("imagesofprisonergame/standingmain.png")
mainshockimg=loadAnimation("imagesofprisonergame/aadishock.png")
messyroom=loadImage("imagesofprisonergame/messyroom.jpg")
}

function setup (){
createCanvas(1850,970)
ground1 - createSprite(width/2,800,width,20)

theif = createSprite(300,700,40,140)
theif.addAnimation("clueman",theifstaticimg)
theif.scale=2
aadi = createSprite(1100,700,40,140)
aadi.addAnimation("shockmain",mainshockimg)
aadi.addAnimation("staticmain",mainstaticimg)
aadi.addAnimation("runningmain",mainimg)
aadi.scale=1.2
aadi.mirrorX(-1)
counter=0



setInterval(function(){
    counter=counter+1
},1000)

keyy=createSprite(random(50,1800),random(10,600))
    keyy.addImage(escapekeyimg)
    keyy.scale=0.5
    keyy.visible=false
}
function draw()
{
background(jailcell)

if(gamestate===play)
{
    
   background(escaperoomimg)
   
}
//background("white")
//theif.collide(ground1)
 drawSprites()
 
textSize(30)
fill("black")
text(gamestate,width/2,500)
text(mouseX, width/2,300)
text(mouseY,width/2,320)
//console.log(gamestate)
   

    if (gamestate===story1)
    {
    textSize(50)
    fill("black")
    text("Press Space key to know the story",1000,880)  
    
    //console.log(gamestate)
        if (keyDown("space")) 
        {
        
            gamestate=story2 
        }
                     
    }

    if (gamestate===story2)
    {
    textSize(40)
    fill("red")
    text("I can help you escape prison", 300,550)
 
    textSize(50)
    fill("black")
    text("Press *z* to continue", 1300, 880)

        if (keyDown("z"))
        {
        gamestate= story3;
        }
 
    }

    if(gamestate===story3)
    {
        
    textSize(40)
    fill("red")
    text(" What do I have to do?",1000,550)
    
    aadi.changeAnimation("staticmain",mainstaticimg)
    textSize(50)
    fill("black")
    text("Press *x* to continue", 1300, 880)
        if (keyDown("x"))
            {
            gamestate= story4;
            }
   
    }

    if(gamestate===story4)
    {
        
    textSize(40)
    fill("red")
    text(" You need to serach for the keys without",200,500)
    text(" being caught by the policeman. Make sure", 200, 550)
    text("  you find it before the buzzer rings.",200,600)
   
    textSize(50)
    fill("black")
    text("Press *l* to Search for the keys", 1000, 880)
        if (keyDown("l"))
            {
            gamestate= play;
            }
   
    }
    

if (gamestate===play)
{
   // console.log("search the keys")
   //background(escaperoomimg)
    textSize(30)
    fill("red")
    text(mouseX, 300, 300)
    text(mouseY, 300, 320)
    text("Counter"+ counter,160,100)
   
    if (counter===30){
        gamestate=out
    }

    theif.visible=false
    //keyy.visible=true
    setInterval(keyy.visible=true,2000)
    if (keyWentDown("a"))
    {
         aadi.velocityX=-2
        aadi.changeAnimation("runningmain", mainimg)
        aadi.mirrorX(-1)
    }
    if (keyWentUp("a"))
    {
        //aadi.x=aadi.x-2
         aadi.velocityX=0
        aadi.changeAnimation("shockmain", mainshockimg)
        aadi.mirrorX(-1)
    }
    if (keyWentDown("d"))
    {
        aadi.velocityX=2
        aadi.changeAnimation("runningmain", mainimg)
        aadi.mirrorX(1)
    }

    if (keyWentUp("d"))
    {
        //aadi.x=aadi.x-2
         aadi.velocityX=0
        aadi.changeAnimation("shockmain", mainshockimg)
        aadi.mirrorX(1)
    }
    if (keyWentDown("w") && aadi.y>=630)
    {
         aadi.velocityY=-2
        aadi.changeAnimation("runningmain", mainimg)
    }

    if (keyWentUp("w"))
    {
        //aadi.x=aadi.x-2
         aadi.velocityY=0
        aadi.changeAnimation("shockmain", mainshockimg)
    }
    if (keyWentDown("s")&& aadi.y>=630)
    {
         aadi.velocityY=2
        aadi.changeAnimation("runningmain", mainimg)
    }
    if (keyWentUp("s"))
    {
        //aadi.x=aadi.x-2
         aadi.velocityY=0
        aadi.changeAnimation("shockmain", mainshockimg)
    }

    if(aadi.isTouching(keyy)){
        gamestate=end
    }
}
 if (gamestate===out){
     background("black")
     textSize(50)
     fill("white")
     text("Mission Failed",300,500)
     
 }
   if (gamestate===end){
       textSize(50)
       text("Escape Successful",950,450)
   }
}