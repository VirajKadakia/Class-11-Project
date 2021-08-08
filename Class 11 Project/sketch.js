var pathImage;
var runnerImage;
var boundry1,boundry2;


function preload(){
  //pre-load images
  pathImage=loadImage("path.png")
  runnerImage=loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path=createSprite(200,100,200,200);
  path.addImage(pathImage);

  runner=createSprite(200,200);
  runner.addAnimation("runner",runnerImage);
  runner.scale=0.1;
  
  boundry1=createSprite(60,200,100,400);
  boundry1.visible=false;

  boundry2=createSprite(340,200,100,400);
  boundry2.visible=false;
  
  
}

function draw() {
  background(0);

  path.velocityY=5

  console.log(path.y)

  if(path.y>400){
    path.y=path.width/2;
    // when I was doing it with height, it wasn't working (not sure why)
  }

  runner.x=World.mouseX;

  runner.collide(boundry1);
  runner.collide(boundry2);

  //When it goes into a boundry, it just goes invisible (not sure how to fix; using collide but I don't know if there was something else I was supposed to use)

  drawSprites();
}
