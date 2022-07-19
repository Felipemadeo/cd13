var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg ;
var orangeImg;
var  redImg;
var leafImg ;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
  appleImg = loadImage("apple.png");
  leafImg = loadImage ("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage("rabbit",rabbitImg);
}
rabbit.x = world.mouseX ;
function draw() {
  background("green");
 
  
  if (keyDown("a")) {
    rabbit.x = rabbit.x -4;
  }
  if (keyDown("d")) {
    rabbit.x = rabbit.x +4;
  }

  edges= createEdgeSprites();
  rabbit.collide(edges);
 createApples ();
 createOrange ();
 createRed ();
 createLeaf
  drawSprites();
  
}
function createApples (){
  if (frameCount%100 === 0) {
Apple = createSprite(random (50,350),40,10,10);
Apple.addImage (appleImg);
Apple.scale = 0.07 ;
Apple.velocityY = 3;
Apple.lifetime = 150 ;
  }

}
function createOrange (){
  if (frameCount%60 === 0) {
Orange = createSprite(random (50,350),40,10,10);
Orange.addImage (orangeImg);
Orange.scale = 0.07 ;
Orange.velocityY = 3;
Orange.lifetime = 150 ;
  }
}
function createRed (){
  if (frameCount%80 === 0) {
red= createSprite(random (50,350),40,10,10);
red.addImage (redImg);
red.scale = 0.07 ;
red.velocityY = 3;
red.lifetime = 150 ;
  }
}
function createLeaf (){
  if (frameCount%20 === 0) {
leaf= createSprite(random (50,350),40,10,10);
leaf.addImage (leafImg);
leaf.scale = 0.07 ;
leaf.velocityY = 3;
leaf.lifetime = 150 ;
  }
}