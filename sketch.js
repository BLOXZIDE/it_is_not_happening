
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var engine;
var world;
var ball;
var ground;
var bin1;
var bin2;

function setup() {
	createCanvas(800, 350);
    engine = Engine.create();
	world = engine.world;




	//Create the Bodies Here.
  var ball_opt ={
	restitution : 0.3,
	
	density:0.6
 }
    ball = Bodies.circle(100,170,20,ball_opt)
	World.add(world,ball)
	fill("yellow")


	ground = new Ground(400,340,800,20);
	bin1 = new Ground(520,255,30,150)
	bin2 = new Ground(750,255,30,150)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  
  text("GARBAGE BIN",550,100)  
  textFont("impact")
  textSize(30)
  fill("cyan")
  
  ground.display();
  bin1.display()
  bin2.display()
 ellipse(ball.position.x,ball.position.y,20) 
Engine.update(engine)
keyPressed()

}


function keyPressed()
{
  if(keyCode== UP_ARROW)
    {
      Matter.Body.applyForce(ball,ball.position,{x:85,y:-25});
    }

}



