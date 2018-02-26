function modifyObject(inputObj) {
    if(inputObj.handsShaking===true){
        inputObj.bloodAlcoholLevel+=inputObj.weight*inputObj.experience*0.1;
        inputObj.handsShaking=false;
    }
    return inputObj;
}
console.log(modifyObject({ weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: true }
));