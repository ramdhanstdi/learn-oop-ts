class Unggass {
  static kaki: number = 2;
  static mamalia: boolean = false;
  nama: string;

  static description() {
    console.log(`hewan ini memiliki ${this.kaki} kaki`); //properti ini tidak bisa mengakses properti object
  }

  nameUnggas() {
    console.log(
      `nama hewan ini adalah ${this.nama} punya ${Unggass.kaki} kaki`
    ); //untuk akses properti static bisa dengan langsung memanggil classnya
  }
}

const bebek = new Unggass();
bebek.nama = "bebek";
bebek.nameUnggas();
Unggass.kaki = 4; //perubahan disini bisa berfek ke object juga
bebek.nameUnggas(); //efek perubahan disini juga ada
Unggass.description(); // ini static
