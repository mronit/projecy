var bg,bg2,form,system,code,security;
var score=0;
var startGame, startImage;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  bg2 = loadImage("bg2.jpg")
  startImage = loadImage("start.jpeg");

  
}

function setup() {
  createCanvas(displayWidth,displayHeight);


 



  

  security = new Security();
  system = new System();


  
  
}

function draw() {
  background(bg);

 
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, width/2-50,height/2-350);
// add code for changing the background to the treasure background




drawSprites()


  if(score === 3) {
    clear()
    background(bg2)
    stroke("black")
    fill("white")
    textSize(40);
    text("TREASURE UNLOCKED",width/2-200, height/2);
  }


}