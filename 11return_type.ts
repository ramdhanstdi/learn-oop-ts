class TypeReturn {
  private buah: number = 5;

  banyak(): number {
    //ini kembalian berdasarkan type
    return this.buah;
  }

  //ini kembalian void karena tidak ada isi apa apa
  text(): void {
    console.log("badag banget");
  }

  //async harus di beri Promise<type>
  makan = async (): Promise<number> => {
    return 6;
  };
}
