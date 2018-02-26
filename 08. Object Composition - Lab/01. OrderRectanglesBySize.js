function orderRectangles(input) {

    let rectsArray=[];
    for(let line of input){
        let rectangle=createRectangle(line[0],line[1]);
        rectsArray.push(rectangle);
    }
    rectsArray.sort((a,b)=>a.compareTo(b));
    return rectsArray;

    function createRectangle(width,height) {
        let rect={
            width:width,
            height:height,
            area:()=>rect.width*rect.height,
            compareTo:function (other) {
                let result=other.area()-rect.area();
                return result || (other.width-rect.width)
            }
        };
        return rect;
    }
}
console.log(orderRectangles([[10,5], [3,20], [5,12]]));
