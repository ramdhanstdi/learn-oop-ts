class ProductA {
  private _price: number = 0;
  private discount: number = 0.1;

  get price() {
    return this._price;
  }

  set price(price: number) {
    this._price = price - price * this.discount;
  }
}

const baju = new ProductA();
baju.price = 20000; //ini mengakses set price yang ada di class
console.log(baju.price); //ini mengakses get price yang ada di class
