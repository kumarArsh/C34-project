class Monster {


  constructor(x,y,width,height){
	    var options = {
        density: 5, 
        frictionAir: 0
  }
        this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
        this.width = width;
        this.height=height
		this.image=loadImage("monster1.png");
		World.add(world, this.body);
  }
	
	display(){
		
		
			push()
			translate(santaPos.x, santaPos.y-100);
			imageMode(CENTER);
			image(this.image, 0,0,this.width, this.height)
			pop()
			
}

}