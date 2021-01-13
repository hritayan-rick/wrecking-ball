class Ball {
    constructor(x , y , radius){
        var options ={
            density: 1.0,
            friction: 2.0,
            restitution:1
        }
        this.body = Bodies.circle(x , y , radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x , pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0 , 0 , 2*this.radius , 2*this.radius);
        pop();
    }
}