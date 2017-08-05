var gravity;
var attractor;
var movers = [];

function setup(){
  createCanvas(900, 900);
  for(var i = 0; i < 20; i++)
    movers[i] = new Mover();
attractor = new Attractor();
  background(0);
}

function draw(){
  noStroke();
  ellipseMode(CENTER);

  attractor.render();
  movers.forEach(function(mover){
  gravity = attractor.force(mover);
  mover.applyForce(gravity);
  mover.update();
  mover.render();
  });
}
