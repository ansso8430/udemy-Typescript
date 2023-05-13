// const names = ["so", "hi"];
// generic type
// const names: Array<string> = []; // string[]

// // promise type
// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("This is done");
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   //   data.split(''); // ERR!!
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "so", hobbies: ["Sports"] }, { age: 22 });
console.log(mergedObj.name);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 value";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}

// console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["Sports", "Cooking"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Vaulue: " + obj[key];
}

extractAndConvert({ name: "so" }, "name");

interface I_CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): I_CourseGoal {
  let courseGoal: Partial<I_CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as I_CourseGoal;
}

const names: Readonly<string[]> = ["Max", "Anna"];
// names.push("Manu"); // !ERR
