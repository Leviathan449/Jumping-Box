var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces



    //create box sprite and give velocity
    Box = createSprite(random(20,750),20,20);
    box.shapeColor=("white");
    box.velocityX = 2;
    //surface1 = createSprite();
   // surface2
    //surface3
   // surface4

}

function draw() {
    background(black);
    //create edgeSprite

 if(surface1.isTouching(box) && box.bounceOff(surface1)){

 }
 if(surface2.isTouching(box) && box.bounceOff(surface2)){
   
}
if(surface3.isTouching(box) && box.bounceOff(surface3)){
   
}
if(surface4.isTouching(box) && box.bounceOff(surface4)){
   
}
    //add condition to check if box touching surface and make it box
}

function isTouching(object1,object2){

    if(object1.x-object2.x < object1.width/2 + object2.width/2 && 
      object2.x-object1.x < object2.width/2 + object1.width/2 && 
      object1.y-object2.y < object1.height/2 + object2.height/2 &&
      object2.y-object1.y < object2.height/2 + object1.height/2) {
      
        return true
    }
    else{
      
      return false
    }
  
  }
  
  function bounceOff(object1,object2){
  
    if(object1.x-object2.x < object1.width/2 + object2.width/2 && 
      object2.x-object1.x < object2.width/2 + object1.width/2 ){
  
        object1.velocityX = object1.velocityX * (-1)
        object2.velocityX = object2.velocityX * (-1)
      }
      if(object1.y-object2.y < object1.height/2 + object2.height/2 &&
        object2.y-object1.y < object2.height/2 + object1.height/2){
  
          object1.velocityY = object1.velocityY * (-1)
          object2.velocityY = object2.velocityY * (-1)
        }
  
  
  
  }