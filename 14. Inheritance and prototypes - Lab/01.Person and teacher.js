function PersonAndTeacher(){
    class Person{
        constructor(name,email){
            this.name=name;
            this.email=email;
        }
    }
    class Teacher extends Person{
        constructor(name,email,subject){
            super(name,email);
            this.subject=subject;
        }
    }
    return {Person,Teacher};
}
let func=PersonAndTeacher();
let teacher= new func.Teacher('Ana','something','History');
console.log(teacher.__proto__);
