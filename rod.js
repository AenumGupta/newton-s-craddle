class Rod{
    constructor(){
        var options={
            isStatic:true
        }

        this.body=Bodies.rectangle(400,100,500,20,options);
        World.add(world,this.body);
    }

    display(){
       fill ("red");
        rect(this.body.position.x,this.body.position.y,500,20)
    }

}