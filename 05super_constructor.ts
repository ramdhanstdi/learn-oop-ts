class Binatang {
  nama: string;
  kaki: number;
  constructor(nama: string, kaki: number) {
    this.nama = nama;
    this.kaki = kaki;
  }
}

class Kadal extends Binatang {
  beracun: boolean;
  constructor(nama: string, kaki: number, beracun: boolean) {
    super(nama, kaki); // Ini constuct dari class Binatang
    this.beracun = beracun;
  }
}

const biawak = new Kadal("biawak", 4, false);
console.log(biawak);
