
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var mango1, mango2, mango3, mango4, mango5;
var stone, tree;
 

function preload()
{
  //  var boy = loadImage("boy.png");
  //  image(boy, 100, 100, 50, 50);
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
  
  //Create the Bodies Here.
  mango1 = new dustbin(0,0,0,0);
  // tree = new Tree(300, 500, 70, 70);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(fff);


  mango1.display();
  // mango2.display();
  // mango3.display();
  // mango4.display();
  // mango5.display();
  tree.display();
  
  drawSprites();
 
}

function detectCollision(stone, mango){
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyposition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r)
  {
    Matter.Body.setStatic(lmango.body,false);
  }
}

function keyPressed(){
  if(keyCode === 32)
  {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
    launcherObject.attach(stoneObj.body);
  }
}



