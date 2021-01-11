class Dustbin extends BaseClass{
  constructor(x,y){
    super(x,y,150,150)
    this.image=loadImage("dustbingreen.png");
        
    Matter.Body.setStatic(this.body,true) 
    
  }
   
}