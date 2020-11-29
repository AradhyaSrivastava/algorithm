var fixedrect,movingrect;
var rect1,rect2;

function setup() {
  createCanvas(1200,800);
 fixedrect= createSprite(400, 200, 50, 50);
 fixedrect.shapeColor="RED";
 movingrect=createSprite(200,200,50,50);
 movingrect.shapeColor="RED";
 rect1=createSprite(100,100,80,80);
 rect1.shapeColor="white";
 rect1.velocityY=3
 rect2=createSprite(100,700,80,80);
 rect2.shapeColor="white";
 rect2.velocityY=-3
}

function draw() {
  background("black");
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(movingrect.x-fixedrect.x<=movingrect.width/2+fixedrect.width/2&& fixedrect.x-movingrect.x<=movingrect.width/2+fixedrect.width/2&&movingrect.y-fixedrect.y<=movingrect.height/2+fixedrect.height/2&&fixedrect.y-movingrect.y<=movingrect.height/2+fixedrect.height/2)  {
    movingrect.shapeColor="blue";
    fixedrect.shapeColor="blue";
  }
  else{
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red"; 
  }
  if(rect1.x-rect2.x<=rect1.width/2+rect2.width/2&&rect2.x-rect1.x<=rect1.width/2+rect2.width/2){
rect1.velocityX=rect1.velocityX*-1;
rect2.velocityX=rect2.velocityX*-1;
  }
  if(rect1.y-rect2.y<=rect1.height/2+rect2.height/2&&rect2.y-rect1.y<=rect1.height/2+rect2.height/2){
rect1.velocityY=rect1.velocityY*-1;
rect2.velocityY=rect2.velocityY*-1;
  }
  drawSprites();
}