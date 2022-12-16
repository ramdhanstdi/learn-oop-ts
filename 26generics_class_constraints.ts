interface Product {
  sell(): void;
}

class CarProduct implements Product {
  sell(): void {
    console.log("Jual Mobil");
  }
}

class MotorProduct implements Product {
  sell(): void {
    console.log("Jual Motor");
  }
}

const Jualan = <T extends Product>(product: T[]) => {
  product.forEach((product) => product.sell());
};

const car = new CarProduct();
const motor = new MotorProduct();

Jualan([car, motor]);
