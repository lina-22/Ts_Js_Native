// how to create promise -pending, resolve, reject
console.log("welcome");

const promise1 = new Promise((resolve, reject) => {
  let completedPromise = false;
  if (completedPromise) {
    resolve("completed promise1");
  } else {
    reject("not completed promise 1");
  }
});

promise1
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("end");
