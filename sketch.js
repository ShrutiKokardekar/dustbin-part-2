
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,paperIMG,paperSprite;
var ground;
var dustbin,dustbinIMG,dustbinSprite;

function preload()
{
	paperIMG=loadImage("paper.png");
	dustbinIMG=loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=createSprite(50,320,200,40);
	ground.shapeColor("white");
	
	dust1=createSprite(350,200,30,60);
	dust1.shapeColor("green");
	dust2=createSprite(350,230,60,30);
	dust2.shapeColor("green");
	dust3=createSprite(410,200,30,60);
	dust3.shapeColor("green");
	dustbinSprite.addImage(dustbinIMG);

	paper=createSprite(100,300,40,40);
	paper.shapeColor("pink");
	paperSprite.addImage(paperIMG);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ground.display();
  dust1.display();
  dust2.display();
  dust3.display();
  paper.display();
  
  drawSprites();
 
}



