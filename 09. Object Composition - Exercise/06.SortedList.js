function modifyArr(){
   return (function () {

       let result=[];

       function getSize() {
           return result.length;
       }
       
       function addElement(e) {
           result.push(e);
           orderArray();

       }
       
       function removeElement(index) {
           if(index>=0&& index<result.length){
               result.splice(index,1);
               orderArray();
           }else{
               throw new Error;
           }
       }

       function getElement(index) {
           if(index>=0&& index<result.length){
               return result[index];
           }else{
               throw new Error;
           }
       }

       function orderArray() {
           result=result.sort((a,b)=>a-b);
       }

       let obj={addElement,removeElement,getElement};
       obj.__defineGetter__("size",getSize);
       return obj;
   })();

}
let arr=modifyArr();
arr.addElement(9);
arr.addElement(8);
arr.addElement(8);
arr.addElement(4);
console.log(arr.getElement(3));
