class Ground
{
    constructor(x, y, width, height)
    {
     var options= {
         isStatic : true
        };
     
     this.body = Bodies.rectangle(x,y,width,height,options)
     this.height = height;
     this.width = width;
     World.add(world,this.body);
    }
    
    display() {
        var posi = this.body.position
        push();
        rectMode(CENTER);
        stroke(255)
        fill("green")
        
        rect( posi.x,posi.y, this.width, this.height)
        pop()
        }
}