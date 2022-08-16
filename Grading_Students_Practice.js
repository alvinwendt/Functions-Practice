// ## **Student Grades**

// Remember that to add a new property to an object, you use dot notation and an equals sign after the object is created.

// Object creation
// const dog = {
// 	breed: "Shihtzu",
// 	age: 1,
// 	name: "Murph"
// }

// // Adding a property after creation
// dog.neutered = true

// console.log(dog)

// > {
// 	breed: "Shihtzu",
// 	age: 1,
// 	name: "Murph",
// 	neutered: true
// }

// ### **Setup**

// cd
// cd workspace
// mkdir functions-students
// cd functions-students
// touch main.js
// code .

// Once VS Code starts, open the `main.js` file and follow the instructions below.

// ### **Instructions**

// In this exercise, you will define four functions. One will create a student object, and the other three will add a grade for a subject to the student object.

// 1. `createStudent()` should return a new student object. The name of the student, and which grade the student is in, must be passed to the function as arguments. The returned object should have a `name` property and a `grade` property.

// const createStudent = (name, level) => {
//   return {
//     Name: name,
//     Level: level,
//   };
// };

// let student1 = createStudent("Alvin", 12);

// console.log(student1);
// // 2. `addMathGrade()` should add a new "math" property to the student with a value of "B".
// const addMathGrade = (student, mathGrade) => {
//   let newObject = student;
//   newObject.Math = mathGrade;
//   return newObject;
// };
// console.log(addMathGrade(student1, "B"));

// // 3. `addHistoryGrade()` should add a new "history" property to the student with a value of "C".
// const addHistoryGrade = (student, historyGrade) => {
//   let newObject = student;
//   newObject.History = historyGrade;
//   return newObject;
// };
// console.log(addHistoryGrade(student1, "C"));

// // // 4. `addScienceGrade()` should add a new "science" property to the student with a value of "A".
// const addScienceGrade = (student, scienceGrade) => {
//   let newObject = student;
//   newObject.Science = scienceGrade;
//   return newObject;
// };
// console.log(addScienceGrade(student1, "A"));

// Remember to follow the flow that you learned about in the last chapter.

// 1. Each function should define a parameter to hold the object.
// 2. Each function should be invoked with an object provided as an argument.
// 3. Each function should return the object after the property is added.
// 4. The return value of the function should be stored in a variable.

// Hint: Final object state

// Example. The order of the properties are irrelevent.
// {
// 	student: "Andri Alexeandrou",
//     grade: 6,
// 	math: "B",
// 	history: "C",
// 	science: "A",
// }

const createStudent = (objName, objGrade) => {
  return {
    name: objName,
    grade: objGrade,
  };
};

const addMathGrade = (obj) => {
  obj.math = "B";
};

const addHistoryGrade = (obj) => {
  obj.history = "C";
};

const addScienceGrade = (obj) => {
  obj.science = "A";
};

const Alvin = createStudent("Alvin", 9);

console.log(Alvin);

addMathGrade(Alvin);
console.log(Alvin);

addHistoryGrade(Alvin);
console.log(Alvin);

addScienceGrade(Alvin);
console.log(Alvin);
