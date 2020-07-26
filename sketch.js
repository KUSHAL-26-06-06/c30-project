  
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World; 
const Constraint = Matter.Constraint;

var box1,box2,box3;
var box4,box5,box6;
var box7,box8,box9;
var ground,polygon;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  
  
  var options = {
    isStatic:true
  }

  polygon=Bodies.circle(50,200,50,options);
  World.add(world,polygon);
  slingshot =new Slingshot(this.polygon,{x:100,y:200});
}

function draw() {
  background(255,255,255); 
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  drawSprites();
}
function mouseDragged(){
  
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}
function keyPressed(){
  if(keyCode===32){
      slingshot.attach(polygon.body);
  }
}