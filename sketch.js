
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stoneObg1, ground,boyImage,boy; 

function preload()
{
	boyImage  = loadImage("Plucking Mangoes/boy.png");
}

function setup() {
	createCanvas(1600, 1000);


	engine = Engine.create();
	world = engine.world;

ground = createSprite(550,800,2000, 20);
 
stoneObg1 =new Stone(500,500);
boy = addImage(boyImage);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



