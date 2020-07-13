var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1280, 610);

  thickness = Math.round(random(43, 83));
  speed = Math.round(random(223, 321));
  weight = Math.round(random(30, 52));

  bullet = createSprite(50, 305, 100, 50);

  wall = createSprite(1210, 305, thickness, height / 2);
  wall.shapeColor = rgb(80, 80, 80);
}

function draw() {
  background(0); 

  console.log(speed);
  console.log(weight);
  console.log(thickness);

  bullet.velocityX = speed;

  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;

    var deformation = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);

    if (deformation < 10) {
      wall.shapeColor = rgb(0, 255, 0);
    } else if (deformation > 10) {
      wall.shapeColor = rgb(255, 0, 0);
    }
  }

  drawSprites();
}

function hasCollided(object1, object2) {
  bulletRightEdge = object1.x + object1.width;
  wallLeftEdge = object2.x;
  if (bulletRightEdge >= wallLeftEdge) {
      return true;
  }
      return false;
}