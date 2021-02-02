const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.constraint

var box8 , box9 , box10 , box11 , box12

var box13 , box14 , box15

var box16

var polygon
var polygonimg
var catapult

var gameState = "onSling";

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    stand = new Ground(330,360,420,75)
    stand.Color =color(220,220,220);
    ground.Color =color(212,175,55)




 box8 = new Box(330,235,30,40);
 box9 = new Box(360,235,30,40);
 box10 = new Box(390,235,30,40);
 box11 = new Box(420,235,30,40);
 box12 = new Box(450,235,30,40)

 box13 = new Box(360,195,30,40)
 box14 = new Box(390,195,30,40)
 box15 = new Box(420,195,30,40)

 box16 = new Box(390,155,30,40)
polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

polygonimg = loadImage("sprites/polygon.png")

 
catapult = new SlingShot(this.polygon,{x:100,y:200})
}
function draw(){
background("black")
    ground.display()
    stand.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
imageMode(CENTER)
image(polygonimg, polygon.position.x,polygon.position.y,40,40)
}


function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    catapult.fly();
    gameState = "launched";
}