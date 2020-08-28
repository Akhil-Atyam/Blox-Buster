class Box {
    constructor(x, y, width, height,c,n) {
      var options = {
          'restitution':0.1,
          'friction':0.3,
          'density':1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.c = c;
      this.n = n;
      World.add(world, this.body);
    }
    display(){
      var ang = this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(ang);
      
      rectMode(CENTER);
      //fill("#00ffff");
      textSize(10);
      fill(this.c);
      rect(0, 0, this.width, this.height);
      fill("black");
      text(this.n,-10,10);
      pop();
    }
  };
  