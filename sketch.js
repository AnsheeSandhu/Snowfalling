//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies =  Matter.Bodies;
//const Constraint = Matter.Constraint;

var bg,bgImg;
var boy,boy_walking;
var ground;
var snowball;
var snowflakes=[];

var PLAY=1;
var END=0;
var gameState=PLAY;


function preload(){
  bgImg=loadImage("BgImg.jpg");
  boy_walking=loadAnimation("Boy1.png","Boy2.png","Boy3.png","Boy4.png","Boy5.png","Boy6.png","Boy7.png","Boy8.png")
  boyImg=loadImage("Boy9.png");
  snowballImage=loadImage("download.jpg")
}
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);


  bg=createSprite(400,50,50,50);
  bg.addImage(bgImg);
  

  ground=createSprite(400,400,800,20)
  ground.visible=false;

  boy=createSprite(100,300);
  boy.addAnimation("walking",boy_walking);
  boy.velocityX=1
  boy.scale=1.3;

   //collider
   boy.setCollider("rectangle",0,0,boy.width-80,boy.height-30);
   boy.collide(ground);
   //boy.debug=true;

   if(frameCount % 275 === 0){
    for(var i=0; i<snowflakes; i++){
    snowflakes.push(new Snow(random(0,1350), random(0,50)));
    }
  }
}

function draw() {
  background(bgImg);  
 

  if(gameState===PLAY){
  if(keyDown("space")){
    boy.velocityY=-12;
    
  }
  //add gravity
  boy.velocityY=boy.velocityY+0.8
  boy.collide(ground);

 
}
for(var i = 0;i < snowflakes; i++){
  snowflakes[i].display();
  snowflakes[i].changePosition();
  }

  drawSprites();
}