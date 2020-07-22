class Box {
    constructor(x, y, width, height) {
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      this.Visibility = 255;
      this.velocityX = -5;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      
        strokeWeight(2);
        fill("#1C053B");
        rect(1250,430,40,40);

  }
  }