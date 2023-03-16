/**
 * Clase ImperialLength trabaja con pulgadas
 */
export class ImperialLength {
  /**
   * Constructor de la clase ImperialLength
   * @param pulgadas 
   */
  constructor(private pulgadas: number) {
    this.pulgadas;
  }

  /**
   * Nos devuelve las pulgadas
   */
  get getPulgadas() {
    return this.pulgadas;
  }

  /**
   * Modificamos las pulgadas actuales
   * @param nuevoValor 
   * @returns 
   */
  setNuevasPulgadas(nuevoValor: number): number {
    this.pulgadas = nuevoValor;
    return this.pulgadas;
  }

  /**
   * Convertimos los pies en pulgadas
   * @param pies 
   * @returns 
   */
  setPies(pies: number) {
    this.pulgadas = pies * 12;
    return this.pulgadas;
  }

  /**
   * Convertimos las pulgadas en pies
   */
  get getPies() {
    return (this.pulgadas / 12);
  }

  /**
   * Convertimos las yardas en pulgadas
   * @param yardas 
   * @returns 
   */
  setYardas(yardas: number) {
    this.pulgadas = yardas * 36;
    return this.pulgadas;
  }

  /**
   * Convertimos las pulgadas en yardas
   */
  get getYardas() {
    return (this.pulgadas / 36)
  }

  /**
   * Convertimos las millas en pulgadas
   * @param millas 
   * @returns 
   */
  setMillas(millas: number) {
    this.pulgadas = millas * 63360
    return this.pulgadas;
  }

  /**
   * Convertimos las pulgadas en millas
   */
  get getMillas() {
    return (this.pulgadas / 63360);
  }
}