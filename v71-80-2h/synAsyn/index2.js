//call back and higher order function
// function square(x) {
//   console.log(`square of ${x}: ${x * x}`);
// }

// // square(5);

// const y = square;
// y(5);

// function higherOrderFunction(num, callback) {
//   callback(num);
// }

// higherOrderFunction(6, square);

const taskOne = (callback) => {
  console.log("taskOne");
  callback();
};

const taskTwo = (callback) => {
  setTimeout(() => {
    console.log("data loading");
    callback();
  }, 2000);
};
const taskThree = (callback) => {
  console.log("taskThree");
  callback();
};
const taskFour = (callback) => {
  console.log("taskFour");
  callback();
};
const taskFive = () => {
  console.log("taskFive");
};

taskOne(function f1() {
  taskTwo(function f2() {
    taskThree(function f3() {
      taskFour(function f4() {
        taskFive();
      });
    });
  });
});
