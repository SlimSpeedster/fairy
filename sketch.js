const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var fairy, fairyImg;
var star;
var realStar, starImg;
var music;
var backgroundImg, back;
var engine, world;
//var star_options;

function preload()
{
    starImg = loadImage("star.png");
    fairyImg = loadImage("fairy1.png");
    backgroundImg = loadImage("starnight.png");

}

function setup() {
  createCanvas(600, 600);

  back = createSprite(300, 300, 20, 20);
  back.addImage("night", backgroundImg);
  back.scale = 0.5;


  //calling the Engine to the variable "engine"
    engine = Engine.create();


  //connecting the world to the physics engine
    world = engine.world;

    var star_options = {
      isStatic: true
    }

  star = Bodies.circle(450, 100, 30, star_options);
  realStar = createSprite(20, 20, 20, 20);
  realStar.addImage("starFall", starImg);
  realStar.scale = 0.3;

  World.add(world, star);

  fairy = createSprite(150, 425, 20, 20);
  fairy.addImage("fairy", fairyImg);
  fairy.scale = 0.25;

  
}


function draw() {
  background("skyblue");

  Engine.update(engine);
  

  ellipseMode(RADIUS);

  ellipse(star.position.x, star.position.y, 25, 25);
  
 
  if(keyDown("down_arrow")){
    Matter.Body.setStatic(star, false);
  }

  if(keyDown("right_arrow")){

      fairy.x = fairy.x+3;
  } else if(keyDown("left_arrow")){

      fairy.x = fairy.x-3; 
  }


  if(star.position.y >= 400){
  
    Matter.Body.setStatic(star, true);

  }
    realStar.x = star.position.x;
    realStar.y = star.position.y-5;
  drawSprites();
}
