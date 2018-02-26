function modifyObj(inputObj) {
    let smallEngine={power:90, volume:1800};
    let normalEngine={power:120,volume:2400};
    let monsterEngine={power:200,volume:3500};

    let power=0;
    let volume=0;
    let wheels=[];
    let wheel=0;
    if(inputObj.wheelsize%2===0){
         wheel=inputObj.wheelsize-1;
    }else{
         wheel=inputObj.wheelsize;
    }
    for(let i=0;i<4;i++){
        wheels.push(wheel);
    }

    if(inputObj.power<=90){
        power=90;
        volume=1800;
    }else if(inputObj.power>90 && inputObj.power<=120){
        power=120;
        volume=2400;
    }else if(inputObj.power>120 && inputObj.power<=200){
        power=200;
        volume=3500;
    }

    let newObj={
        model: inputObj.model,
        engine:{power: power,
        volume:volume},
        carriage:{
            type:inputObj.carriage,
            color:inputObj.color
        },
        wheels:wheels
    };
    return newObj;
}
console.log(modifyObj({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }
));