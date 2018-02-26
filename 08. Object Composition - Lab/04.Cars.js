function processCommands(commands) {
    let result=new Map();
    let commandProcessor={
        create:function ([name,inherits,parent]) {
            parent=parent?result.get(parent):null;
            let newObj=Object.create(parent);
            result.set(name,newObj);
            //return newObj;
        },
        set:function ([name,key,value]) {
            let obj=result.get(name);
            obj[key]=value;
        },
        print:function ([name]) {
            let obj=result.get(name);
            let objects=[];
            for(let key in obj){
                objects.push(`${key}:${obj[key]}`);
            }
            console.log(objects.join(", "));
        }
    };
    
    for(let command of commands){
        let commandArgs=command.split(" ");
        let action=commandArgs.shift();
        commandProcessor[action](commandArgs);
    }
}
processCommands(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);