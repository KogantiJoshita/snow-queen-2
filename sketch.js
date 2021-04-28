// we have to press the up arrow key constantly so that sofia will be in the canvas, if she fell out of the canvas the game will be over.
// gameOver condition - when sofia.y>580   

var sofia,sofiaImg;
var police,policeImg;
var diamond, diamondImg, snowflake, snowflakeImg, fireball , fireballImg;
var rock, rockImg, water, waterImg, tree, treeImg;
var background, backgroundImg;

function preload(){
 sofiaImg = loadAnimation("Images/1.png","Images/2.png","Images/3.png","Images/4.png")
 policeImg = loadAnimation("Images/police_1.png","Images/police_2.png","Images/police_3.png","Images/police_4.png")

 diamondImg = loadImage("Images/diamond.png")
 snowflakeImg = loadImage("Images/snowflake.png")
 fireballImg = loadImage("Images/fireball.png")
 rockImg = loadImage("Images/rock.png")
 waterImg = loadImage("Images/water.png")
 treeImg = loadImage("Images/tree.png")

 backgroundImg = loadImage("Images/bg1.jpg")
 
}
function setup(){
    createCanvas(1000,580)
 background=createSprite(500,290,1000,580)
 background.addImage(backgroundImg)
 background.scale=2

 sofia = createSprite(122,415,10,10)
 sofia.addAnimation("running",sofiaImg)
 sofia.scale=2.5

 police = createSprite(50,430,10,10)
 police.addAnimation("running",policeImg)
 police.scale = 0.5



}

function draw(){
    
 if(keyDown("right_arrow")){
     sofia.x = sofia.x+5
 }

 if(keyDown("up_arrow")){
     sofia.velocityY = -4
 }

 sofia.velocityY = sofia.velocityY+0.5
 
 spawnPowercoins();
 drawSprites();

 text(mouseX+","+mouseY,mouseX,mouseY)

}

function spawnPowercoins(){
 
    if(frameCount % 80 === 0){
       powerup = createSprite(1000,302,10,10)
      // powerup.addImage(diamondImg)
      // powerup.scale = 0.25

     // powerup.addImage(fireballImg)
      //powerup.scale = 0.2

       powerup.addImage(snowflakeImg)
       powerup.scale = 0.2
       
       powerup.velocityX = -5
      
    }


}

