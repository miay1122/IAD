var showcl=false;
var i=0;
var plusi = true;
var song;

function preload(){
  song=loadSound("Cute Music.mp3");
}

function setup() {
  createCanvas(800, 800);
  happy=0;
  j=1
  song.play();
}


function draw() {
  //background(135, 118, 105);
  push();
    if(happy===0){
    background(184,212,236);
	fill(165,192,216);
     // fill(155);
	noStroke();
    //rect(0,50,1000,100);
	//rect(0,200,1000,100);
    //rect(0,350,1000,100);    
    rect(0,500,1000,100);
    rect(0,650,1000,100);
    }
  else{
    background(249,205,205);
    fill(246,184,184);
    noStroke();
  y1=50*(j-3); 
    rect(0,y1,1000,100);
    rect(0,y1+150,1000,100);
    rect(0,y1+300,1000,100);  
    rect(0,y1+450,1000,100);
    rect(0,y1+600,1000,100);
    rect(0,y1+750,1000,100);
    j+=0.03;
    if(y1>50)
    {j=1;}  
    }
	pop();
  fill(255,228,181);
  
//hair
  noStroke();
  fill(144,115,76);
  ellipse(350,60,80-i,120-i);
  push();
    if(happy===0){
  fill(184,212,236);}
  else fill(246,184,184);
  
  ellipse(390,90,130-i,130-i);
  if (i>=40)plusi=false;
  if(i<=0)plusi=true;
  if(plusi)i+=2; else i-=2;
  fill(144,115,76);
  ellipse(400,380,560,560);

//face
  fill(245,225,202);
  rect(225,240,360,290);
  //ellipse(225,500,70,60);
  
//bangs
  noStroke;
  fill(144,115,76);
  arc(225,240,250,250,0,HALF_PI);
  arc(590,240,480,250,HALF_PI,PI);  
  
 //eye
  fill(0);
  ellipse(300,400,50,60);
  ellipse(450,400,50,60);
  if(showcl) fill(62,45,21);
  else fill(92,147,99);
  arc(300,400,50,75,PI,0);
  arc(450,400,50,75,PI,0);
  fill(255);
  ellipse(300,400,10,15);
  ellipse(450,400,10,15);
  
//mouth
  stroke(0)
  strokeWeight(8);
  if(showcl){
    line(375,470,365,490);
    line(375,470,385,490);}
  else
    line(350,490,400,490);
    
//eyebrown
  stroke(144,115,76);
  if(showcl)
    {line(280,300,340,340);
    line(410,340,470,300);}
  else
    {line(280,340,340,340);
    line(410,340,550,340);}
  
//highlight hair
  stroke(255);
  strokeWeight(15);
  line(244,220,200,270);
  line(290,230,280,260);
  line(440,210,460,230);
  line(500,230,520,250);
  line(560,250,580,270);
  
//blush
  noStroke();
  if(showcl) fill(255,51,0);
  else fill(250,128,114);
  arc(225,445,100,50,-0.5*PI,HALF_PI);
  ellipse(520,445,100,50);
  
//hand
  fill(255,242,234);
  fill(245,225,202);
  triangle(375,530,250,660,400,660);
  triangle(375,530,500,660,400,660);
  
//clothes
  fill(250,198,136);
  beginShape();
  vertex(350,530);
  vertex(290,700);
  vertex(460,700);
  vertex(400,530);
  endShape(CLOSE);
  fill(255);
  triangle(375,530,350,530,360,540);
  triangle(375,530,400,530,390,540);

  //buttom
  fill(255);
  ellipse(377,551,10);
  ellipse(377,574,10);
  ellipse(377,597,10);

//exclamation mark
  if(showcl){
    stroke(0);
    strokeWeight(30);
    line(100,60,100,150);
    line(100,200,100,202);}

  //print(mouseX, mouseY);
    }

function mousePressed(){
    showcl=true;
  }
function mouseReleased(){
    showcl=false
  }

function mouseClicked()
{
  if(happy===0)
    {happy=1;
    } else{happy=0;
          }
}
  

