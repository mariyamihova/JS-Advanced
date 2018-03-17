class Circle{

    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
        return 2*this.radius;
    }
    set diameter (d){
        this.radius=d/2;
    }
    get area(){
        return Math.PI*this.radius*this.radius;
    }
}
let c= new Circle(2);
c.diameter=5;
// console.log(c.radius);
console.log(c.diameter);
// console.log(c.area);
console.log(c);