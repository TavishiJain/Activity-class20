var fixedRect, movingRect;



function setup() {
  createCanvas(800,800);

  fixedRect= createSprite(400,400,50,80);
  fixedRect.shapeColor= "blue";

  movingRect= createSprite(200,400,80,50);
  movingRect.shapeColor="purple";
}

function draw() {
  background("yellow");  

  movingRect.x= World.mouseX;
  movingRect.y= World.mouseY;

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    &&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    &&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 ){
    movingRect.shapeColor="red";
    fixedRect.shapeColor= "red";
  }

  else{
    fixedRect.shapeColor= "blue";
    movingRect.shapeColor="purple";

  }
  drawSprites();
}