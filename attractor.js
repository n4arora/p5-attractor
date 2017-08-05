function Attractor(){
  this.location = new p5.Vector(width/2, height/2);
  this.mass = 20;

  this.force = function(mover){
    var dir = p5.Vector.sub(this.location, mover.location);
    var r = dir.mag();
    r = constrain(r, 5, 25);
    dir.normalize();
    var f = (mover.mass * this.mass) / (r * r);
    dir.mult(f);
    return dir;
  }

  this.render = function(){
    fill(32,178,170);
    //noFill();
    ellipse(this.location.x, this.location.y, this.mass * 2, this.mass * 2);
  }
}
