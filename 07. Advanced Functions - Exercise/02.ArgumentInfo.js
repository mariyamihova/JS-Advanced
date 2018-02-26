function solve() {
    let summary={};
    for(let i=0;i<arguments.length;i++){
        let arg=arguments[i];
        let type= typeof arg;
        console.log(`${type}: ${arg}`);

        if(!summary[type]){
            summary[type]=1;
        }else{
            summary[type]++;
        }

    }
    let sortedTypes=[];
    for(let type in summary){
        sortedTypes.push([type,summary[type]]);
    }

    let sortedArr=sortedTypes.sort((a,b)=>b[1]-a[1]);
    for(let type of sortedArr){
        console.log(`${type[0]} = ${type[1]}`);
    }

}
//solve('cat', 42, function () { console.log('Hello world!'); });
solve(2, 'cat', 'a',  42, 3.333, function () { console.log('Hello world!'); });