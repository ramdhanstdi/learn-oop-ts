//Inharitance turunan

class Hewan1 {
  nama: string;
  kaki: number;
}

class HewanDarat extends Hewan1 {
  nafas: string;

  bernafas() {
    console.log(`${this.nama} bernafas dengan ${this.nafas}`);
  }
}

const kambing = new HewanDarat();

kambing.nama = "kambing";
kambing.kaki = 4;
kambing.nafas = "paru paru";
console.log(kambing);
kambing.bernafas();
