class Box{
    constructer(x,y,width,hieght){
    var options = {
        restitution: 1
    }
    this.body = Bodies.rectangle(x,y,width,hieght);
    World.add(world.this.body);
    Matter.Body.setStatic(this.body,isStatic);

        display() {
        var pos= this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x,pos.y,this.width,this.length);
    }
}
};