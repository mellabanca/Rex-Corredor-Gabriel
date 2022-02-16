var rex, rexCorrendo;

function preload(){
  
  rexCorrendo = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  rex = createSprite(50, 160, 20, 50);
  rex.scale = 0.5;
  rex.addAnimation("correndo", rexCorrendo);
 
  borda = createEdgeSprites();
}

function draw(){
  background("lightgrey");

  if(keyDown("space")){
    rex.velocityY = -10;
  }
  rex.velocityY += 1;

  rex.collide(borda[3]);
  
  drawSprites();
}
