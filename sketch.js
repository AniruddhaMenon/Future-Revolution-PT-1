const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var running1,running2
var awesomes, awesome,ground,box
var score
var ghost; 
var engine,world;  

function preload(){
  awesome = loadImage("Images/city.jpg");
  running1 = loadAnimation("Images/Run 2.1.png","Images/Run 2.2.png","Images/Run 2.3.png","Images/Run 2.4.png","Images/Run 2.5.png","Images/Run 2.6.png");
  ghost = loadImage("Images/Ghost.jpg");
}

function setup() {
  createCanvas(1200,500);
  engine = Engine.create();
  world = World.create();
  box = new Box(1250,430,40,40);
  // box.velocityX = -3;
  running2 = createSprite(100,400,10,10);
  running2.addAnimation("running",running1);
  //running2.scale = 2; 
  ground = new Ground(600,450,1200,10);
}

function draw() {
  background(awesome);

  fill ("red");
  textSize(30);
  text("Score:",20,30);
  box.display();
  ground.display(); 
//ghost.display();
  drawSprites();
}
