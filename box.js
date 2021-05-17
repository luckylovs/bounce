class Box{
    constructor(x,y,width,height){
        var options = {
            restitution:1.0,
            friction:1.0,
            density:1.0
        }

        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position

        push();
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill("green")
        rect(pos.x,pos.y,this.body.width,this.body.height)
        pop();
    }
}