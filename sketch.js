const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;






var bg_img
var characterImg
var character1
var snow
var engine
var world

function preload(){
  bg_img=loadImage("snow1.jpg")
characterImg=loadImage("character1.png")


}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

 character1=createSprite(150,250,20,10)
  character1.addImage(characterImg)
  character1.scale=0.5
  if(frameCount%100===0){ 
    for(var i=0; i<200;i++)
    { snow=new Snow(random(0,700),random(0,700),7,7); } }

    
}


function draw() {
  background(bg_img) 
  drawSprites();
   
  Engine.update(engine);
  
  for(var i=0; i<200;i++)
  { snow[i].display(); }
}