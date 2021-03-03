class Tree
{
    constructor(x, y, width, height){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("assets/tree.png");
        World.add(world, body);
    }
    display(){
        var pos = this.body.position; 
        // imageMode(CENTER);
        fill("pink");
        image(this.image, pos.x, pos.y, 50, 50);

    }

}