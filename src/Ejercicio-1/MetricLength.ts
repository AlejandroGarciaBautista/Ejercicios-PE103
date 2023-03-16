export class MetricLength {
  constructor(private centimetros: number) {
    this.centimetros = centimetros;
  }

  get getCentimetros() {
    return this.centimetros;
  }

  setCentimetros(centimetros: number) {
    this.centimetros = centimetros;
    return this.centimetros;
  }

  setMetros(metros: number) {
    this.centimetros = metros * 100;
    return this.centimetros;
  }

  get getMetros() {
    return (this.centimetros / 100);
  }

  setKm(km: number) {
    this.centimetros = km * 100000;
    return this.centimetros;
  }

  get getKm() {
    return (this.centimetros / 100000);   
  }
}