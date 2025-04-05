
let frame1
let frame2
let frame3
let frame4
let frame5
let frame6
let frame7
let frame8
let frame9
let frame10
let timer = 0
let increment = 1

function preload(){
  frame1 = loadImage("frame1.png") 
  frame2 = loadImage("frame2.png") 
  frame3 = loadImage("frame3.png") 
  frame4 = loadImage("frame4.png") 
  frame5 = loadImage("frame5.png") 
  frame6 = loadImage("frame6.png") 
  frame7 = loadImage("frame7.png") 
  frame8 = loadImage("frame8.png") 
  frame9 = loadImage("frame9.png") 
  frame10 = loadImage("frame10.png") 

}
  

function setup() {
  createCanvas(windowWidth, windowHeight);

}


function draw() {
  background(220);

  timer = timer + increment

  image(frame1, 0,0, frame1.width, frame1.height)

  

  if (timer >= 200){
    image(frame2, 0, 0, frame2.width, frame2.height)}

  if (timer >= 400){
    image(frame3, 0, 0, frame3.width, frame3.height)}

  if (timer >= 600){
    image(frame4, 0, 0, frame4.width, frame4.height)}
      
  if (timer >= 800){
   image(frame5, 0, 0, frame5.width, frame5.height)}

  if (timer >= 1000){
   image(frame6, 0, 0, frame6.width, frame6.height)}

  if (timer >= 1200){
    image(frame7, 0, 0, frame7.width, frame7.height)}

  if (timer >= 1400){
    image(frame8, 0, 0, frame8.width, frame8.height)}

  if (timer >= 1600){
    image(frame9, 0, 0, frame9.width, frame9.height)}
        
  if (timer >= 1800){
    image(frame10, 0, 0, frame10.width, frame10.height)}

   if (timer === 2000){
    timer = 0
   }


}
    
  



