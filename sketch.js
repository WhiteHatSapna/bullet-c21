var bullet,t,wall,s,w

function setup() {
  createCanvas(1600,400);
  
  bullet = createSprite(200, 200, 10, 30);
  bullet.shapeColor = "white";
  bullet.velocityX =4;

  t = random(22,83);

  wall = createSprite(1200, 200, t, height/2);
  wall.shapeColor = color(80,80,80);

  s= random(223,321)
  w= random(30,52)
}

function draw() {
  background(0,0,0);  

  if(isCollided(bullet,wall))
  {
    bullet.velocityX =0;
    var d = 0.5*w*s*s/(t*t*t);
    if(d>10)
    {
       wall.shapeColor = color(255,0,0);
    }
    if(d<10)
    {
      wall.shapeColor = color(0,255,0);
    }

  }
  
  drawSprites();
}

function isCollided(lbullet,lwall)
{
  bre= lbullet.x+lbullet.width;
  wle=lwall.x;
  if(bre>=wle)
  {
    return true;
  }
  else
  return false;
}