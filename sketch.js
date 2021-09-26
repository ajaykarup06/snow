var snowImage
var boyImage
var girlImage

const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Body=Matter.Body

var myengine, myworld

var Snow=[]

function preload()
{
  snowImage=loadImage("snow1.jpg")

  boyImage=loadImage("boy-removebg-preview.png")

  girlImage=loadImage("girl-removebg-preview.png")
  
}
function setup() {
  createCanvas(800,400);
  myengine=Engine.create()
  myworld=myengine.world
  //createSprite(400, 200, 50, 50);
  boy=createSprite(400,250,50,50)
  girl=createSprite(650,250,50,50)

  boy.addImage(boyImage)
  girl.addImage(girlImage)  
}

function draw() {
  background(snowImage); 
  Engine.update(myengine)
  if(frameCount%20===0)
  {
    Snow.push(new snow(random(200,600),0,60))
  }
  for(var s=0;s<Snow.length;s++)
  {
    Snow[s].display()
  }

   
  if(keyDown("left"))
{
  boy.x=boy.x-5
}
if(keyDown("right"))
{
  boy.x=boy.x+5
}

if(keyDown("a"))
{
  girl.x=girl.x-5
}
if(keyDown("d"))
{
  girl.x=girl.x+5
}
  drawSprites();
}