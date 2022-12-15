interface Generics<T> {
  propA: T;
}

const genericsFunction = <T>(value: T): Generics<T> => {
  const data: Generics<T> = {
    propA: value,
  };
  return data;
};

console.log(genericsFunction<string>("badag pisan kang"));
console.log(genericsFunction<number>(123123));
console.log(genericsFunction<boolean>(true));
