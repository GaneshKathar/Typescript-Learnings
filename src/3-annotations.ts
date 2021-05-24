export {};
let sum: number = 12;
let someName: string = "abcd";

//Objets
let today: Date = new Date();

//array
let colors: string[] = ["red", "white"];

//classes
class Car {}

let car: Car = new Car();

//object literals with interface

let point1: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//object literals with interface
interface Point {
  x: number;
  y: number;
}

let point: Point = {
  x: 10,
  y: 20,
};

//functions
const logNumber: (i: string) => void = (i: string) => {
  console.log("Hello TS", i);
};
