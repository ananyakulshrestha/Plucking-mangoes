class Stone
{
    constructor(x, y, width, height){
    var options={
        isStatic:false,
        restituition:0,
        friction:1,
        density:1.2
    }
    this.stone = Constraint.create(options);
}
}