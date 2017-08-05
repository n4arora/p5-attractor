function Mover(){
  this.location = createVector(random(width), height/2);
  this.velocity = createVector(2, 1);
  this.acceleration = createVector(0, 0);
  this.mass = 0.4;

  this.applyForce = function(force){
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  this.update = function(){

    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);

    this.velocity.limit(5);

    this.acceleration.mult(0);
  }

  this.render = function(){
    var r = map(this.location.x, 0, width, 0, 255);
    var b = map(this.location.y, 0, height, 0, 255);
    fill(r, 0, b, 100);
    ellipse(this.location.x, this.location.y, this.mass*10, this.mass*10);
  }

}
