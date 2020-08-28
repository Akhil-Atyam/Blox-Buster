const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ball,g1,g2,g4,c1,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,g3;
function preload() {

}

function setup(){
    var canvas = createCanvas(1280,520);
    engine = Engine.create();
    world = engine.world;

    Bodies.polygon(50,6,8,50);
    ball = new rock(400,00);
    g4 = new ground (200,260,10,10);
    g1 = new ground(640,515,1280000,10);
    g2 = new ground(975,300,150,10);
    g3 = new ground(675,400,200,10);
    c1 = new Chain(ball.body,g4.body);
    b1 = new Box(930,180,30,30,"red",1);
    b2 = new Box(960,180,30,30,"red",2);
    b3 = new Box(990,180,30,30,"red",3);
    b4 = new Box(1020,180,30,30,"red",4);
    b5 = new Box(945,150,30,30,"brown",5);
    b6 = new Box(975,150,30,30,"brown",6);
    b7 = new Box(1005,150,30,30,"brown",7);
    b8 = new Box(960,120,30,30,"teal",8);
    b9 = new Box(990,120,30,30,"teal",9);
    b10 = new Box(975,90,30,30,"#a2f5b8",10);
    b11 = new Box(615,280,30,30,"#e5b8a4",11);
    b12 = new Box(645,280,30,30,"#e5b8a4",12);
    b13 = new Box(675,280,30,30,"#e5b8a4",13);
    b14 = new Box(705,280,30,30,"#e5b8a4",14);
    b15 = new Box(735,280,30,30,"#e5b8a4",15);
    b16 = new Box(645,250,30,30,"#688648",16);
    b17 = new Box(675,250,30,30,"#688648",17);
    b18 = new Box(705,250,30,30,"#688648",18);
    b19 = new Box(675,220,30,30,"rgb(204, 153, 0)",19);
    
}
function draw(){
    Engine.update(engine);
    background("rgb(0, 153, 255)");
    drawSprites();    
    ball.display();
    g1.display();
    g3.display();
    c1.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    
    g2.display();
    g4.display();

}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    c1.fly();
}