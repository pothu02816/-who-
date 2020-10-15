class Cain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10000
        }
        this.cain=Constraint.create(options)
        World.add(world,this.cain);
    }
    display(){
        var pointA = this.cain.bodyA.position
        var pointB = this.cain.bodyB.position
        line(pointA.x,pointA.y,pointB.x,pointB.y)
} 

}
 