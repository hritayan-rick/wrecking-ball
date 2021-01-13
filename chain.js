class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length:60,
        }
        
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    attach(body){
        this.chain.bodyA = body;
    }
    
    fly(){
        this.chain.bodyA = null;
    }

    display(){
        
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            push();

            strokeWeight(3);
            stroke("green");
           line (pointB.x , pointB.y , pointA.x , pointA.y);
           pop();
           
            
           
        }
    }
    
}