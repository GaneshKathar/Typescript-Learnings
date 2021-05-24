export {};
// what is inference - JS helps to detect
// type of variable from its assign value

// Type inference - infer type
// when deceleration and initiation is on same line
let a = 5;

// when to use - always use inference

// except -
// 1. variable deceleration and initialization is different line
// 2. when type cannot be inferred
// 3. when function return any value and we want to clarify the value

// 1. function return any value

const json = '{"x":10, "y": 15}';
const parsedValue = JSON.parse(json);
console.log(parsedValue);

// fix

const parsedValue2: { x: number; y: number } = JSON.parse(json);
console.log(parsedValue);

//2. variable deceleration and initialization is different line

let someColors = ["green", "red", "blue"];
let isGreenPresent;
isGreenPresent = someColors.some((color) => color === "green");

//fix
// let isGreenPresent: boolean; or let isGreenPresent=false;

// 3.variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
// let numberAboveZero = false;
let numberAboveZero: boolean | number | undefined = false;
numberAboveZero = numbers.find((num) => num > 0);
