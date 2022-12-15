const getData = (value: any) => {
  return value;
};

const data1 = getData("jut");
console.log(data1);
//----------
//tanda <T> namanya adalah generics dinamis
const getData2 = <T>(value: T) => {
  return value;
};

const data2 = getData2<string>("heloo");
console.log(data2.toLocaleUpperCase());
const data3 = getData2<number>(123123);
console.log(data3.toPrecision());
