type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
  name: "so",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// 오버로드
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: Combinable, b: Combinable) {
  // type guard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("hi", " soheee");
result.split("");

const fetchedUserData = {
  id: "hi",
  name: "sohee",
  job: { title: "CEO", description: "My own company" },
};

console.log(fetchedUserData.job && fetchedUserData.job.title);
// optional chaining
console.log(fetchedUserData?.job?.title);

const userInput = '';

const storedData = userInput ? 'DEFAULT';

console.log(storedData);


// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log("Name: " + emp.name);
//   if ("privileges" in emp) {
//     console.log("Privileges: " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("StartDate: " + emp.startDate);
//   }
// }

// printEmployeeInformation({ name: "so", startDate: new Date() });

// class Car {
//   drive() {
//     console.log("Driving");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a truck...");
//   }
//   loadCargo(amount: number) {
//     console.log("Loading cargo..." + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//   }
//   console.log("Moving at speed: " + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 10 });

// // const pragraph = document.querySelector("p");
// const pragraph = document.getElementById("message-output");
// // const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
// // const userInputElement = document.getElementById("user-input")! as HTMLInputElement;

// // userInputElement.value = "Hi there!";

// // ! 안쓸때 >> null이 아님을 증명
// const userInputElement = document.getElementById("user-input");

// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = "Hi there!";
// }

// interface ErrorContainer {  // { email: 'Not a valid email', username: 'Must start with a character!' }
//     [prop: string] : string;
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a vaild email!',
//     userName: 'Must start with a character!'
// }
