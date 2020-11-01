var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1;
var box2;
var box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	var options={
		isStatic:true
		}

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//box1= createSprite(20,20,400,600);
	//box1.shapeColor=color(255);
	//stroke("green");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 ,{restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

 box1 = new Box(20,200,200,150);
 box2 = new Box(100,20,150,150);
 box3 = new Box(100,20,250),150

}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
  box1.display();
  box2.display();
  box3.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
    // Look at the hints in the document and understand how to make the package body fall only on
    
  }
}



