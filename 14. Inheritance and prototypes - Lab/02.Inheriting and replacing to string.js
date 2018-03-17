function toStringExtension() {
    class Person{
        constructor(name,email){
            this.name=name;
            this.email=email;
        }
        toString(){
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
        }
    }
    class Teacher extends Person{
        constructor(name,email,subject){
            super(name,email);
            this.subject=subject;
        }
        toString(){
            return super.toString().slice(0, -1) + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            return super.toString().slice(0, -1) + `, course: ${this.course})`;
        }
    }
    return{Person,Teacher,Student};
}
let func=toStringExtension();
let person= new func.Person('pesho', 'pesho@abv');
let teacher= new func.Teacher('gosho', 'gosho@abv', 'PHP');
let student= new func.Student('stoyan', 'stoyan@com', 'PHP');

// console.log('' + person);
// console.log('' + teacher);
// console.log('' + student);
// console.log(teacher.__proto__);
// console.log(teacher.__proto__.__proto__);
// console.log(func.Teacher.prototype.someFunc);
// console.log(func.Teacher.prototype);
console.log(teacher);
console.log(student);