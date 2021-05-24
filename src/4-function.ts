export {};
const add = (a: number, b: number): number => {
  return a + b;
};

const add2: (a: number, b: number) => number = (a, b) => {
  return a + b;
};

const add3 = (a: number, b: number) => {
  return a + b;
};

//to avoid such mistake we are going to use first syntax all time
const add4 = (a: number, b: number) => {
  a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiple = function (a: number, b: number): number {
  return a * b;
};

// void no return | return undefined or null;

function print(message: string): void {
  console.log(message);
  //return null || undefined
}

//never - when function never going to reach at the end of function

function throwError(): never {
  throw new Error();
}
