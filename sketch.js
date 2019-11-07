var fixedRect, movingRect;
var ob1,ob2,ob3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ob1=createSprite(50,100,50,80);
  ob2=createSprite(150,100,50,50);
  ob3=createSprite(250,100,50,80);
  ob1.shapeColor="green";
  ob2.shapeColor="green";
  ob3.shapeColor="green";
  ob1.debug=true;
  ob2.debug=true;
  ob3.debug=true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,ob1))
{
  movingRect.shapeColor="red";
  ob1.shapeColor="blue";
}  

else if(isTouching(movingRect,ob2))
{
  movingRect.shapeColor="red";
  ob2.shapeColor="blue";
}
else if(isTouching(movingRect,ob3))
{
  movingRect.shapeColor="red";
  ob3.shapeColor="blue";
}
else if(isTouching(movingRect,fixedRect))
{
  movingRect.shapeColor="red";
  fixedRect.shapeColor="blue";

}

  drawSprites();
}
