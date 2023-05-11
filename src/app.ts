// const names = ["so", "hi"];
// generic type
const names: Array<string> = []; // string[]

// promise type
const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("This is done");
    resolve(10);
  }, 2000);
});

promise.then((data) => {
  //   data.split(''); // ERR!!
});
