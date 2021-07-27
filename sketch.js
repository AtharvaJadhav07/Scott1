




function preload(){
ISSImg=loadImage("iss.png")
bathImg=loadAnimation("bath1.png","bath2.png");
brushImg=loadImage("brush.png");
drinkImg=loadAnimation("drink1.png","drink2.png");
eatImg=loadAnimation("eat1.png","eat2.png");
gymImg=loadAnimation("gym1.png","gym2.png");
rollImg=loadAnimation("gym11.png","gym12.png");
moveImg=loadAnimation("move.png","move1.png");
bathButton=loadImage("bathButton.png");
brushButton=loadImage("brushButton.jpg");
drinkButton=loadImage("bottleButton.png");
eatButton=loadImage("eatButton.png");
gymButton=loadImage("gym1Button.png");
rollButton=loadImage("rollButton.png");
}



function setup() {
  createCanvas(1000,500);
  //International Space Station
  ISS=createSprite(500,250,20,20);
  ISS.addImage(ISSImg); 
  ISS.scale=0.2;
   
  




}

function draw() {
  background("black");  
 
  //creating Buttons 
 //bathButton
 BathButton=createSprite(100,460,20,20);
 BathButton.addImage(bathButton); 
 BathButton.scale=0.2;
   
 //brushButton
 BrushButton=createSprite(250,460,20,20);
 BrushButton.addImage(brushButton); 
 BrushButton.scale=0.3;

 //drinkButton
 DrinkButton=createSprite(400,430,20,20);
 DrinkButton.addImage(drinkButton); 
 DrinkButton.scale=0.3;

 //eatButton
 EatButton=createSprite(525,450,20,20);
 EatButton.addImage(eatButton); 
 EatButton.scale=0.3;

//gymButton
GymButton=createSprite(700,460,20,20);
GymButton.addImage(gymButton); 
GymButton.scale=0.3;

//rollButton
RollButton=createSprite(880,450,20,20);
RollButton.addImage(rollButton); 
RollButton.scale=0.3;

var Eat = createSprite(500,250,20,20);
  Eat.addAnimation("eat",eatImg);
Eat.scale=0.1;

  drawSprites();

}