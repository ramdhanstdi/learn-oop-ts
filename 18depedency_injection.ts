class Store {
  private name: string = "Toko A";
  private profit: number = 1000;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profit;
  }
}

class ClassBajuBaru {
  private store: Store;
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;

    this.store = new Store();
  }

  sell() {
    console.log(
      `${this.name} harga Jualnya adalah ${this.store.getProfit() + this.price}`
    );
  }
}

const redBaju = new ClassBajuBaru("Baju merah", 50000);
redBaju.sell();

/// ----------------

interface IStore {
  name: string;
  profit: number;
  getProfit(): number;
}

class TokoLama implements IStore {
  name: string = "Toko Lama";
  profit: number = 1000;

  getName(): string {
    return this.name;
  }
  getProfit(): number {
    return this.profit;
  }
}

class TokoBaru implements IStore {
  name: string = "Toko Baru";
  profit: number = 3000;

  getName(): string {
    return this.name;
  }
  getProfit(): number {
    return this.profit;
  }
}

class HijabProduct {
  private store: IStore;
  private name: string;
  private price: number;

  constructor(store: IStore, name: string, price: number) {
    this.name = name;
    this.price = price;
    this.store = store;
  }

  sell(): void {
    console.log(
      `${this.name} Harganya adalah ${
        this.store.getProfit() + this.price
      } di toko ${this.store.name}`
    );
  }
}

class GamisProduct {
  private store: IStore;
  private name: string;
  private price: number;

  constructor(store: IStore, name: string, price: number) {
    this.name = name;
    this.price = price;
    this.store = store;
  }

  sell(): void {
    console.log(
      `${this.name} Harganya adalah ${
        this.store.getProfit() + this.price
      } di toko ${this.store.name}`
    );
  }
}

const tokoLama = new TokoLama();
const tokoBaru = new TokoBaru();

const gamisBagus = new GamisProduct(tokoBaru, "Gamis PInk", 80000);
const gamisBagus2 = new GamisProduct(tokoLama, "Gamis PInk", 80000);

gamisBagus.sell();
gamisBagus2.sell();
