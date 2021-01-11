class Ground extends BaseClass{
    constructor(x,y,width,height) {
      super(x,y,width,height)
    this.image = loadImage("ground.png");
    Matter.Body.setStatic(this.body, true)
    }
     
  };