const taskOne = () => {
  console.log("taskOne");
};

// const dataLoading = () => {
//   console.log("data loading");
// };
// const taskTwo = () => {
//   setTimeout(dataLoading, 2000);
// };

const taskTwo = () => {
  setTimeout(() => {
    console.log("data loading");
  }, 2000);
};
const taskThree = () => {
  console.log("taskThree");
};
const taskFour = () => {
  console.log("taskFour");
};
const taskFive = () => {
  console.log("taskFive");
};

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();
