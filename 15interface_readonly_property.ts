interface Student {
  readonly name: string;
  readonly age: number;
}

let student: Student = { name: "ijal", age: 24 }; // karena readonly jadi tidak bisa di reasign sama seperti const
