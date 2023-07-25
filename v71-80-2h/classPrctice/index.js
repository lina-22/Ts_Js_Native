class Student {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  set studentName(name) {
    this.name = name;
  }

  get studentInfo() {
    return this.id + "" + this.name;
  }
}

let s1 = new Student(1, "Lina");

console.log(s1);
console.log(s1.id);
console.log(s1.name);
s1.studentName = "lalala";
console.log(s1.name);
console.log(s1.studentInfo);
