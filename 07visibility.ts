//public bisa di gunakan dimana saja
//protected hanya bisa digunakan di dalam class itu dan turunannya saja
//private bisa di gunakan di dalam classnya saja

class Hewan3 {
  public nama: string;
  protected kaki: number;
  private mamalia: boolean;

  constructor(nama: string, kaki: number, mamalia: boolean) {
    this.nama = nama;
    this.kaki = kaki;
    this.mamalia = mamalia;
  }

  desciption() {
    console.log(
      `hewan ini namanya adalah ${this.nama} mempunyai ${this.kaki} kaki`
    );
  }
}

class Kodok extends Hewan3 {
  private umurTelur: number = 5;
  private umurKecebong: number = 6;
  private umurKatak: number = 90;

  getUmur() {
    console.log();
  }
}
