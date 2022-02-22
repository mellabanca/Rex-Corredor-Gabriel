var rex, rexCorrendo;
var terra ;
var terra_plana
function preload(){
rexCorrendo = loadAnimation("trex1.png","trex3.png","trex4.png");
terra_plana = loadImage ("ground2.png");
}
function setup(){
createCanvas(600,200)
rex = createSprite(50, 160, 20, 50);
rex.scale = 0.5;
rex.addAnimation("correndo", rexCorrendo);
borda = createEdgeSprites();
terra = createSprite(200, 180, 400, 20) ;
terra.addImage (terra_plana) ;
terra.x = terra.width/2 ; 
}
function draw(){
background("white");
if(keyDown("space")){
rex.velocityY = -10;
}
rex.velocityY += 1;
terra.velocityX = -2; 
if(terra.x < 0){
terra.x = terra.width/2 ;
}
rex.collide(terra);
drawSprites();
}