
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
//var box;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	ball = new Ball(500,670,20,20)
	ground = new Ground(300,300,1600,20)
	ground.velocityX = -6;
	ground.x = ground.width /2;
	Engine.run(engine);
	console.log(ground)
  
}





function draw() {
  rectMode(CENTER);
  background("WHITE");

 ball.display();
 ground.display();
//box.display();

if (ground.x < 20){
	ground.x = ground.width/2;
  }
}


	
