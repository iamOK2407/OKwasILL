
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world;
var papera, ground, dustbin;

function preload()
{
	
}

function setup() {
	  createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 1200,
        height: 700,
        wireframes:true
      }
    });
    //Engine.run(myEngine);
    Render.run(render);
  
    

    
    ground = new Ground(600,height,1200,100)
    papera = new Paper(100,370,50,50)
    dustbin = new Dustbin(600,height-100)
    

     





  

	Engine.run(engine);
  
}


function draw() {
  
  background(150);
  ground.display();
   
  dustbin.display()
  

console.log("positions " + papera.body.position.x + "  "+dustbin.body.position.x)

  //Using, the colliding code of C20
   if( papera.body.position.x<dustbin.body.position.x)  
   {
     papera.display();
   }
   else {
     console.log("collided")
      papera.clean();

   }
}
function keyPressed()
{
  if(keyCode===UP_ARROW)
  Matter.Body.applyForce(papera.body,papera.body.position,{x:100,y:-105});
}



