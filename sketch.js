
var trex ,trex_running;

var ground, ground_image;

var dummuyGround, invisible_ground;

var clouds, clouds_image;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");

  ground_image=loadImage("ground2.png");

  clouds_image=loadImage("cloud.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  
 trex=createSprite(300,100,20,20);
 trex.addAnimation("running",trex_running);
 trex.scale=0.5;


 ground=createSprite(300,170,600,20);
 ground.addImage("infinite",ground_image);
 ground.velocityX=-2

 dummyGround=createSprite(300,180,600,20);

 var randomNo=Math.round(random(1,10));
 console.log(randomNo);
}

function draw(){

  background("white")

  if(ground.x<0){
    ground.x=ground.width/2
  }

  if(keyDown("up")&&trex.collide(dummyGround)){
    trex.velocityY= -10
  }

  trex.velocityY=trex.velocityY+0.5;
  trex.collide(dummyGround);
  dummyGround.visible=false;

  createClouds();

  console.log(frameCount);
drawSprites();
}

function createClouds(){

  if(frameCount%100===0){
    clouds=createSprite(700,100,20,20);
    clouds.velocityX=-2;
    clouds.addImage("water",clouds_image);
    clouds.scale=0.5;
    clouds.y=Math.round(random(100,130));
    clouds.depth=trex.depth;
    trex.depth=trex.depth+1
  }

}