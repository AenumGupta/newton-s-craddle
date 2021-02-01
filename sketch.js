
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
rod=new Rod();
bob1=new Bob(250,300);
bob2=new Bob(300,300);
bob3=new Bob(350,300);
bob4=new Bob(400,300);
bob5=new Bob(450,300);
bob6=new Bob(500,300);
bob7=new Bob(550,300);

rope1=new Rope(bob1.body,{x:250,y:100})
rope2=new Rope(bob2.body,{x:300,y:100})
rope3=new Rope(bob3.body,{x:350,y:100})
rope4=new Rope(bob4.body,{x:400,y:100})
rope5=new Rope(bob5.body,{x:450,y:100})
rope6=new Rope(bob6.body,{x:500,y:100})
rope7=new Rope(bob7.body,{x:550,y:100})
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("aqua");
  rod.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  bob7.display();



  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  rope7.display();


  drawSprites();
 
}

function keyPressed(){

	if(keyCode===32){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50
			,y:-45})
	}
}

