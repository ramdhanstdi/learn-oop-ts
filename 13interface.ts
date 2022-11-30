// isi dari interface harus di gunakan bila ada class yang mengimplementasi interface
interface Android {
  name: string;
  menu(): void;
  back(): void;
  power(): void;
}

// isi dari ini harus sama dengan apa yang ada di android
class Samsung implements Android {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  menu(): void {
    console.log("Menu Phone");
  }
  back(): void {
    console.log("Back Phone");
  }
  power(): void {
    console.log("Screen Lock");
  }
}

//Class ini bisa di isi method method yang ada pada Android
class GameAndroid {
  private phone: Android;

  constructor(phone: Android) {
    this.phone = phone;
  }
  back(): void {
    console.log("back to menu game");
  }
  menu(): void {
    this.phone.menu();
  }
  power(): void {
    this.phone.power();
  }
}

const samsung = new Samsung("S100");
const game = new GameAndroid(samsung);

samsung.back();
samsung.menu();
samsung.power();
game.back();
game.menu();
game.power();
