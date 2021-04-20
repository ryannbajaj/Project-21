var bullet, wall, speed, weight, thickness;


function setup() {
  createCanvas(1600,400);
  
  thickness = random(22,83)

  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor = color(80,80,80);

  bullet = createSprite(400, 200, 80, 30);

  speed = random(223,321)
  weight = random(30,52)
  

  bullet.velocityX = speed;
}

function draw() {
  background('black');  

  if (hasCollided(bullet,wall)) {
 bullet.velocityX=0
var damage = 0.5 * weight * speed * speed/ (thickness*thickness*thickness)

if(damage>10){
 bullet.shapeColor = "red";

}

if(damage<=10){
  bullet.shapeColor = "green";
}
  

  }
  drawSprites();
}