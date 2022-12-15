interface Vehicle {
  name: string;
  wheels: number;
}

interface Sedan extends Vehicle {
  doors: number;
}

class Civic implements Sedan {
  name: string = "Civic";
  wheels: number = 4;
  doors: number = 4;
}
