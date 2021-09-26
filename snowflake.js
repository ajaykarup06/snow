class snow{
    constructor(x,y,r)
    {
        var options={
            restitution:0,
            friction:0.5
            
        } 
        this.x=x
        this.y=y
        this.r=r
        this.image=loadImage("snow4.webp")
        this.body=Bodies.circle(x,y,r,options)
        World.add(myworld,this.body)
    } display()
    {
        push()
        translate(this.body.position.x, this.body.position.y)

        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)
        pop()
    }
} 
