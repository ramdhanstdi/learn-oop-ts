type Generics2<T> = T;

const genericsFunction2 = <T>(value: T): Generics2<T> => {
  return value;
};

console.log(genericsFunction2<string>("badag pisan kang"));
console.log(genericsFunction2<number>(123123));
console.log(genericsFunction2<boolean>(true));
