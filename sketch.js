const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ball;
var rope;

function setup() {
  createCanvas(1500,700);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(600,600,1200,20);
 
  //level one
  block1 = new Block(900,100,70,70); 
  block2 = new Block(900,100,70,70);
  block3 = new Block(900,100,70,70);
  block4 = new Block(900,100,70,70);
  block5 = new Block(900,100,70,70);
  block6 = new Block(900,100,70,70);
  block7 = new Block(800,100,70,70);
  //level two
  block8 = new Block(800,100,70,70);
  block9 = new Block(800,100,70,70);
  block10 = new Block(800,100,70,70);
  block11 = new Block(800,100,70,70);
  block12 = new Block(800,100,70,70);
  //level three
  block13 = new Block(700,100,70,70);
  block14 = new Block(700,100,70,70);
  block15 = new Block(700,100,70,70);
  //top
  block16 = new Block(700,100,70,70);
  block17 = new Block(700,100,70,70);
  block18 = new Block(700,100,70,70);
  block19 = new Block(700,100,70,70);
  block20 = new Block(700,100,70,70);
  //set 2 for second stand
  //level one
  
  //top
  blocks9 = new Block(700,95,30,40);

  //ball holder with slings 
  ball = new Ball (200,200,50,50);
  
  rope = new SlingShot(ball.body,{x:500,y:50});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  ball.display();
  fill("skyblue");
  
  fill("gold");
  

  rope.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
