// const generics24 = <T>(arg: T): T => {             Ini Tidak bisa
//     console.log(arg.length);

//     return arg
// };

interface Length {
  length: number;
}

const generics24 = <T extends Length>(arg: T): T => {
  console.log(arg.length);

  return arg;
};

const data12 = generics24("Kanjut");
console.log(data12);

const data21 = generics24({ length: 10, value: 200 });
console.log(data21);
