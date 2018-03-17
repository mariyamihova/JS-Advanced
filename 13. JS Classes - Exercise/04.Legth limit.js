class Stringer{
    constructor(innerString,innerLength){
        this.innerString=innerString;
        this.innerLength=innerLength;
    }
    increase(value){
        this.innerLength+=value;
        return this.innerLength;
    }
    decrease(value){
        this.innerLength-=value;
        if(this.innerLength<0){
            this.innerLength=0;
        }
        return this.innerLength;
    }
    toString(){
        let output;
        if(this.innerLength===0){
            output='...';
        }else if(this.innerLength<this.innerString.length){
            output=this.innerString.substring(0,this.innerLength);
            output+='...';
        }else if(this.innerLength>=this.innerString.length){
            output=this.innerString;
        }
        return output;
    }
}
let test = new Stringer('Test',3);
console.log(test.toString());
test.decrease(3);
console.log(test.toString());
test.increase(5);
console.log(test.toString());