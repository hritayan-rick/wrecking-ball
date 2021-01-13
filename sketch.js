const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,  box2,  box3 ,  box4 ,  box5 ,  box6 ,  box7 ,  box8 ,  box9 ,  box10 ;
var ground,chain;
var wreckingBall;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
  
    
    box1 = new Box(900 , 100 , 70 , 70 );
    box2 = new Box(900 , 100 , 70 , 70 );
    box3 = new Box(900 , 100 , 70 , 70 );
    box4 = new Box(900 , 100 , 70 , 70 );
    box5 = new Box(900 , 100 , 70 , 70 );

    box6 = new Box(800 , 100 , 70 , 70);
    box7 = new Box(800 , 100 , 70 , 70);
    box8 = new Box(800 , 100 , 70 , 70);
    box9 = new Box(800 , 100 , 70 , 70);
    box10 = new Box(800 , 100 , 70 , 70);

   wreckingBall = new Ball(200 , 200 ,30);
   chain = new Chain(wreckingBall.body , {x : 500 , y:400});
}

function draw(){
    
        background("yellow");
    
        
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

   
   wreckingBall.display();
    //log6.display();
    chain.display();    
}

function mouseDragged(){
   Matter.Body.setPosition(wreckingBall.body, {x:mouseX , y:mouseY});


}


