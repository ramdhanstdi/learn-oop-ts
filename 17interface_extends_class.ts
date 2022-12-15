class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

interface IKuda extends Animal {
  run(): void;
}

class Kuda implements IKuda {
  name: string = "Jaran";
  constructor(name: string) {
    this.name = name;
  }

  run(): void {
    console.log("berjalan");
  }
}
