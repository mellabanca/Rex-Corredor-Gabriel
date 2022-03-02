var rex, rexCorrendo;
var terra ;
var terra_plana ;
var invisiblie_ground ;
var clouds ;
var joinville_chove_muito




function preload(){
rexCorrendo = loadAnimation("trex1.png","trex3.png","trex4.png");
terra_plana = loadImage ("ground2.png");
joinville_chove_muito = loadImage ("cloud.png") ;



}

function setup(){

createCanvas(600,200)

rex = createSprite(50, 160, 20, 50);

rex.scale = 0.5;

rex.addAnimation("correndo", rexCorrendo);

borda = createEdgeSprites();

terra = createSprite(200, 180, 400, 20) ;

invisiblie_ground = createSprite (200, 190, 400, 10) ;

invisiblie_ground.visible = false ;

terra.addImage (terra_plana) ;

terra.x = terra.width/2 ; 

//var aleatorio = Math.round(random(1,100));
//console.log(aleatorio);

}

function draw(){
background("white");
//console.log (rex.y) ;
//console.log(frameCount);

if(keyDown("space")&& rex.y >= 145){
rex.velocityY = -10;
}

rex.velocityY += 1;
terra.velocityX = -2; 
if(terra.x < 0){
terra.x = terra.width/2 ;
}

rex.collide(invisiblie_ground);
cloud();
drawSprites();
}

function cloud(){
if(frameCount % 60=== 0){
clouds=createSprite (600, 100, 40, 10) ;
clouds.addImage (joinville_chove_muito) ;
clouds.y = Math.round (random(5, 100)) ;



clouds.velocityX =-3 ;
clouds.depth = rex.depth ;
rex.depth += 1 ;

clouds.lifetime = 250;

}





}