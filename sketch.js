var rect1,rect2


function setup() {
  createCanvas(800,400);
  rect1=createSprite(400, 200, 50, 50);
  rect2=createSprite(600,400,50,50);
}

function draw() {
  background(255,255,255); 
  rect1.shapeColor="green" 
  rect2.shapeColor="green"
  rect1.x=World.mouseX
  rect1.y=World.mouseY
  console.log(rect1.x-rect2.x)
  if(rect1.x-rect2.x<rect1.width/2+rect2.width/2 && rect2.x-rect1.x<rect2.width/2+rect1.width/2 &&rect1.y-rect2.y<rect1.height/2+rect2.height/2 && rect2.y-rect1.y<rect2.height/2+rect1.height/2){
    rect1.shapeColor="teal"
    rect2.shapeColor="yellow"
  }


  drawSprites();
}