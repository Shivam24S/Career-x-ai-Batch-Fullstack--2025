class StudentMarks {
  constructor(math, chemistry, physics) {
    (((this.math = math),
    (this.chemistry = chemistry),
    (this.physics = physics)),
      (this.average = ""));
  }

  set examAverage(length) {
    let average = (this.math + this.chemistry + this.physics) / length;
    this.average = average;
  }
}

const student1 = new StudentMarks(30, 40, 50);

const student2 = new StudentMarks(50, 60, 70);

student1.examAverage = 3;

student2.examAverage = 3;

console.log(student1.average);

console.log(student2.average);
