// Jaymes Dec - Remixed by Qianyu Zhou 
// A&HA4084001:Digital Fndtns: Creative Tech
// Final Project - The Orange Fish Eats Bubbles 
// FAlL 2020

// MicroBit Sensors Data to P5
// Adapted from Geert Roumen
// https://www.hackster.io/lemio/connect-the-micro-bit-to-p5-js-to-play-pong-165e57

// initialize variables
var ballX = 500;
var ballY = 350;
var particleSystem = [];
let parNum = 50;
let vx = 0;
let vy = 0;
let timer = 40;
var mySound;
let player;
let fish;
let sea;
let win;
var bgm;
var soundIsPlaying = false;

function preload(){
  player = loadImage('redfish.png');
  sea = loadImage('bg.jpeg');
  win = loadSound('win2.mp3');
  bgm = loadSound('bgm.mp3');
  mySound = loadSound('pop1.mp3');
}

function setup() {
  createCanvas(1000, 700);
  bgm.play();
  for (let i = 0; i<parNum; i++){
  let newPar= new particle();
  particleSystem.push(newPar);}
}

function draw() {
   background(sea);
     for (let i = 0; i < particleSystem.length; i++){
   particleSystem[i].move();
     particleSystem[i].show();
     particleSystem[i].checkEdge();
     if(particleSystem[i].contain(vx,vy)){
      particleSystem.splice(i,1);
        mySound.play();
     }
   }

// draw player
  noCursor();
  noStroke();
  image(player,ballX,ballY,player.width/45,player.height/45); 
  vx = ballX;
  xy = ballY;
  
//timer 
  textAlign(CENTER);
  fill('black');
  if(frameCount%60===0 && timer>0){
    timer --; }
  else if (timer ===0 ){
    bgm.pause();
    text("Great Job!", width/2,height/2);
    let score = parNum - particleSystem.length;
    for (let i = 0; i < particleSystem.length; i++){
      particleSystem[i].delete();
    }
    text("Your score is " + score, width/2, height/2-40)
  }
  text(timer,width/2,30);
  textSize(15);
    if (timer ===0 && !soundIsPlaying){
    win.play();
    soundIsPlaying= true;}
}
  

//connect to the microbit on mousePressed
function mousePressed(){
  microBitConnect();
}

// A function to split the message from the microbit
function microBitReceivedMessage(message){ 
  let splitString = split(message, ',');

   roll = splitString[0];
   pitch = splitString[1];
   ballX = map(roll,-90,90,0,width)
   ballY = map(pitch,-15,15,0,height)
}

class particle{
  constructor(){
    this.speed = createVector(random(-2,2),random(-2,2))
    this.x = random(width);
    this.y = random(height);
    this.r = random(20); //size
    //this.c = color('blue'); //color
  }
  move(){
    this.x = this.x + this.speed.x;
    this.y = this.y + this.speed.y;
  }
  show(){
    fill(186,218,236);
   ellipse(this.x,this.y,this.r*2);
  }
  checkEdge(){
    if(this.x>width || this.x<0){
      this.speed.x = -this.speed.x;
    }
    if(this.y>height || this.y<0){
      this.speed.y = -this.speed.x;
    }
 }
  contain(x2,y2){
   let d = dist(x2,y2,this.x,this.y);
   if(d<this.r*5){
      return true;
   } else{return false;}
   }
    changeColor(newColor){
      this.c = color(newColor);
  }
  delete(){
    this.x = 1000;
    this.y = 1000;
  }
}