const getValue = <T, U extends keyof T>(obj: T, key: U) => {
  return obj[key];
};

let obj = { a: 1, b: 2, c: 3 };

console.log(getValue(obj, "a"));
