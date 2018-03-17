function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
        }
    }
    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
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
    return {Person, Teacher, Student};
}
let func = toStringExtension();
let person = new func.Person('pesho', 'pesho@abv');
let teacher = new func.Teacher('gosho', 'gosho@abv', 'PHP');
let student = new func.Student('stoyan', 'stoyan@com', 'PHP');


function extendClass(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}
extendClass(func.Person);
console.log(person.toSpeciesString());
console.log(teacher.toSpeciesString());
console.log(student.toSpeciesString());

teacher.species = 'TeacherName';
console.log(teacher.toSpeciesString());