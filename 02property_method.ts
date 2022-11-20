class Hewan2 {
  nama: string = "";
  kaki: number = 0;
  mamalia: boolean = false;

  //ini method
  bernafas() {
    console.log(`${this.nama} sedang bernafas`);
  }
}

const kuda = new Hewan2();
console.log(kuda);

kuda.nama = "kuda jingkrak";
kuda.kaki = 4;
kuda.mamalia = true;
console.log(kuda);

kuda.bernafas();
