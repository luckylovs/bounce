class Ball{
constructor(x,y,r){
var options ={
    isStatic:false,
    restitution:0.3,
    friction:1,
    density:1.2
}
this.x = x
this.y = y
this.r =r

this.body = Bodies.circle(x,y,(this.r)/2,options)
//ball.velocityY = mouse
}

display(){
    var pos = this.body.position

    push();
    translate(pos.x,pos.y)
    rectMode(CENTER)
    fill("RED")
    ellipse(0,0,this.r,this.r)
    pop();
}
}