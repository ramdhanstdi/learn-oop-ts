class Cowo {
  readonly gender: string = "pria";
}

const reza = new Cowo();
personalbar.gender = "wanita"; // tidak bisa di ubah kerena ini properti readonly
