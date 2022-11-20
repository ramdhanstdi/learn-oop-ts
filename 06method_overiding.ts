// berfungsi untuk mereplace method sebelumn
class Binatang1 {
  nama: string;
  bernafas() {
    console.log("shuuuuuu");
  }
}

class Neko extends Binatang1 {
  //Disini replacenya
  bernafas() {
    console.log("ahihihih");
  }
}

const neko = new Neko();
neko.bernafas();
