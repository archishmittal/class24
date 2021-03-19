const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var log1, log2 ;


var engine, world;
var box1, box2, box3 ,box4 ;
var bird1;
var pig1, pig2;

function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    log1 = new log(810,260,300,PI/2);
    log2 = new log(810,180,300,PI/2);
    pig1 = new pig(810,350);
    pig2 = new pig(810,220);
    bird1= new bird(100,100);
    ground = new Ground(200,height,1600,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    log1.display();
    log2.display();
    pig1.display();
    pig2.display();
    bird1.display();
    
    ground.display();
}