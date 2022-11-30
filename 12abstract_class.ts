abstract class Kendaraan {
  name: string;

  constructor(name: string) {
    console.log(`${name} sedang mengisi bahan bakar`);
  }

  abstract bergerak(): void;
}

class Mobil3 extends Kendaraan {
  constructor(name: string) {
    super(name);
    console.log(`Bahan bakarnya bensin`);
  }

  bergerak(): void {
    console.log(`bergerak dengan roda`);
  }
}

class Pesawat extends Kendaraan {
  constructor(name: string) {
    super(name);
    console.log("Bahan bakarnya bensol");
  }

  bergerak(): void {
    console.log("dengan mesin turbofan");
  }
}

const mobil = new Mobil3("BMW");
const airbus = new Pesawat("Air Bus");

mobil.bergerak();
airbus.bergerak();
