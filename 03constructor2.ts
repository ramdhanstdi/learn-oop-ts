// Cara pertama
class Mobil {
  nama: string;
  roda: number;

  constructor(nama: string, roda: number) {
    this.nama = nama;
    this.roda = roda;
  }
}

const mobil1 = new Mobil("Avanza", 4);
console.log(mobil1);

class Mobil2 {
  constructor(public nama: string, public roda: number) {}
}

const mobil2 = new Mobil2("Mobilio", 4);
console.log(mobil2);
