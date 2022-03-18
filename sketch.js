var rex, rexCorrendo;
var terra ;
var terra_plana ;
var invisiblie_ground ;
var clouds ;
var joinville_chove_muito
var cacto1
var cacto2
var cacto3
var cacto4
var cacto5
var cacto6
var points
var grupoNuvens;
var grupoCactos;
var JOGANDO = 1;
var PERDEU = 0;
var estado = JOGANDO;
var colisao
var game_over
var reset
var abacaxi 
var mamao 
var record
var globo
var band
var mensagem = "Isso é uma mensagem";










function preload(){
rexCorrendo = loadAnimation("trex1.png","trex3.png","trex4.png");
terra_plana = loadImage ("ground2.png");
joinville_chove_muito = loadImage ("cloud.png") ;
cacto1 = loadImage("obstacle1.png") 
cacto2 = loadImage("obstacle2.png")
cacto3 = loadImage("obstacle3.png")
cacto4 = loadImage("obstacle4.png")
cacto5 = loadImage("obstacle5.png")
cacto6 = loadImage("obstacle6.png")
colisao =loadAnimation("trex_collided.png") ;
abacaxi = loadImage ("gameOver.png") ;
mamao = loadImage ("restart.png") ;
record = loadSound("jump.mp3")
globo = loadSound("die.mp3")
band = loadSound("checkPoint.mp3")





}

function setup(){

createCanvas(windowWidth,windowHeight);

rex = createSprite(50, height-70, 20, 50);

rex.scale = 0.5;

rex.addAnimation("correndo", rexCorrendo);
rex.addAnimation("parado", colisao) ;
game_over = createSprite (width/2, height/2-50);
game_over.addImage (abacaxi) ;
reset = createSprite(width/2, height/2) ; 
reset.addImage (mamao) ;
reset.scale = 0.4

borda = createEdgeSprites();

terra = createSprite(width/2, height-80, width, 125) ;

invisiblie_ground = createSprite (width/2, height-10, width, 125) ;

invisiblie_ground.visible = false ;

terra.addImage (terra_plana) ;

terra.x = terra.width/2 ; 

points = 0

grupoNuvens = new Group();

grupoCactos = new Group();

rex.debug = false;

rex.setCollider("rectangle",0,0,60,70);

//var aleatorio = Math.round(random(1,100));
//console.log(aleatorio);


}

function draw(){
   
   //console.log(mensagem);
   background("white");
   //console.log (rex.y) ;
   //console.log(frameCount);

if(estado === JOGANDO){
   if(keyDown("space")&& rex.y >= height-150 || touches.length > 0 && rex.y >= height-150){
      rex.velocityY = -11  
      record.play()
      touches = [];
   }
if (points > 0 && points % 100 === 0) {
   band.play() ;
}
    rex.velocityY += 1;
   terra.velocityX = -(4 + points / 100) ; 
 if(terra.x < 0){
 terra.x = terra.width/2 ;
}
cloud();
cactos();
points += Math.round(frameRate() / 60) ;
game_over.visible = false ;
reset.visible = false ;

if (grupoCactos.isTouching(rex)) {
   estado = PERDEU ;
globo.play()
}



} else if (estado === PERDEU){
terra.velocityX = 0 ;
grupoCactos.setVelocityXEach(0) ;
grupoNuvens.setVelocityXEach(0) ;
rex.changeAnimation("parado") ;
grupoCactos.setLifetimeEach(-1) ;
grupoNuvens.setLifetimeEach(-1) ;
rex.velocityY = 0 ;
reset.visible = true ;
game_over.visible = true ; 

if(mousePressedOver(reset) || touches.length > 0){
   restart();
   touches = [];
}
 }
rex.collide(invisiblie_ground);



drawSprites();

textSize(18);
text(points, width-100, height/2) ;
}

function restart(){
   estado = JOGANDO ;
grupoNuvens.destroyEach(); 
grupoCactos.destroyEach(); 
rex.changeAnimation("correndo") ;
points = 0 
   


}

function cloud(){
if(frameCount % 60=== 0){
clouds=createSprite (width+20, height-300, 40, 10) ;
clouds.addImage (joinville_chove_muito) ;
clouds.y = Math.round (random(10, height/2)) ;



clouds.velocityX =-3 ;
clouds.depth = rex.depth ;
rex.depth += 1 ;

clouds.lifetime = 250;

grupoNuvens.add(clouds);

}}
function cactos (){
if(frameCount % 60 ===0){
var planta = createSprite(width, height-95, 10, 40) ;
planta.velocityX = -(6 + points / 100)
var infinito = Math.round(random(1, 6)) ;
switch (infinito) {
     case 1:planta.addImage(cacto1);
        break;
     case 2:planta.addImage(cacto2);
        break;
     case 3:planta.addImage(cacto3);
        break;
     case 4:planta.addImage(cacto4);
        break;
     case 5:planta.addImage(cacto5);
        break;
     case 6:planta.addImage(cacto6) ;
        break;

    default:
        break;
}
planta.scale = 0.5 ;
planta.lifetime = 300 ;

grupoCactos.add(planta);

}


}



