class Paper extends BaseClass{
  constructor(x,y,width,height){
    super(x,y,width,height);
    this.image=loadImage("paper.png")
    this.width=width;
    this.height=height;
    this.visibility=255
  }
  display(){
    
    super.display();
  }

  clean()
  {
    push();
     World.remove(world,this.body)
    this.visibility-=10
    tint(255,this.visibility);
    image(this.image,this.body.position.x, this.body.position.y,this.width,this.height);
    pop()
  }

}