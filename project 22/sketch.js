var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite = createSprite(width/2,80);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	helicopterSprite = createSprite(width/2,200);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite =createSprite(width/2,height-5,width,10);
	groundSprite.shapeColor = "brown";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2,200,5,{restitution:0.6,isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2,680,width,10,{isStatic:true});
	World.add(world, ground);
	
	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background("cyan");

    packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 

	keyPressed();

	drawSprites();
}

function keyPressed() {
 if (keyDown("down_arrow")) {
	Matter.Body.setStatic(packageBody,false);

	helicopterSprite.velocityX = 20;
	helicopterSprite.lifetime = 50;
  }
}