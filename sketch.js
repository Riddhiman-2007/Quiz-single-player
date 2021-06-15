var bg,bg2,form,system,code,security;
var score=0;


function preload() {
 
  
  bg= loadImage("bg.png")
  //load image for the treasure background
  bg2= loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  security.display();
  
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 300);
  }

  drawSprites()
 
}