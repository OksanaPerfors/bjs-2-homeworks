function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student("Olga", "female", 25);
let student2 = new Student("Oleg", "male", 29);
let student3 = new Student("Oksana", "female", 31);


Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks !== undefined) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if(this.marks === undefined || this.marks.length === 0) {
    return 0;
  } else {
    return this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length;
  };

}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
