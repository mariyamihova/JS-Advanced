class List{
    constructor(){
        this.collection=[];
        this.size=this.collection.length;
    }
    add(element){
        this.collection.push(element);
        this.size++;
        this.orderCollection();
    }
    remove(index){
        if(index>=0&&index<this.collection.length){
            this.collection.splice(index,1);
            this.size--;
            this.orderCollection();
        }else{
            throw new Error("Invalid index");
        }
    }
    get(index){
        if(index>=0&&index<this.collection.length) {
            return this.collection[index]
        }else{
            throw new Error("Invalid index")
        }
    }
    orderCollection(){
        this.collection=this.collection.sort((a,b)=>a-b);
    }
}
let list = new List();
list.add(5);
list.add(4);
list.add(3);
list.add(6);
list.add(8);
list.add(10);
list.remove(1)
console.log(list.get(0))
list.get(0)

console.log(list.collection);
console.log(list.size);
