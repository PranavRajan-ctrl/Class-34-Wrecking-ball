//Class is blueprint of an object
//class contains properties and functions
//class is used to create one or more objects of same kind  
class Ball {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':2.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    strokeWeight(8);
    stroke ("green");
    fill("Blue");
    ellipse(0, 0, this.width, this.height);
    pop();
  }
};
