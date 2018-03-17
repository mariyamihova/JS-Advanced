class Rat{
    constructor(name){
        this.name=name;
        this.unitedRats=[];
    }
    getRats(){
        return this.unitedRats;
    }
    unite(obj){
        if(obj instanceof Rat){
            this.unitedRats.push(obj);
        }
    }
    toString(){
        let output=this.name;
        for(let rat of this.unitedRats){
            output+=`\n#${rat.name}`
        }
        return output;
    }
}
let test=new Rat("Pesho");
//console.log(test);

test.unite(new Rat('Gosho'));
test.unite(new Rat('Sasho'));
console.log(test.toString());