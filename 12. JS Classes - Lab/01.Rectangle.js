class Rectangle{
    constructor(width, height, color){
        this.width=width;
        this.heigth=height;
        this.color=color;
    }
    calcArea(){
        return this.width*this.heigth;
    }
}
let rect=new Rectangle(20,30,'yellow');
console.log(rect.calcArea());
console.log(rect.heigth);