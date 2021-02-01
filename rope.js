class Rope{
    constructor(object1,point1){

        var options={
            bodyA:object1,
            pointB:point1
        }

        this.rope=Matter.Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){

        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.pointB;
        
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}