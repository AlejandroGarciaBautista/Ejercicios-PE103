/**
 * Clase ImperialMass trabaja con onzas
 */
export class ImperialMass {
  /**
   * Constructor de la clase ImperialMass
   * @param onzas 
   */
  constructor(private onzas: number) {
    this.onzas = onzas;
  }

  /**
   * Getter de las onzas
   */
  get getOnzas() {
    return this.onzas;
  }

  /**
   * Modificamos las onzas actuales
   */
  setNuevasOnzas(onzasNuevas: number) {
    this.onzas = onzasNuevas;
    return this.onzas;
  }

  /**
   * Pasamos de libras a onzas
   */
  setLibras(libras: number) {
    this.onzas = libras * 16
    return this.onzas;
  }

  /**
   * Pasamos de onzas a libras
   */
  get getLibras() {
    return (this.onzas / 16)
  }

  /**
   * Pasamos de Piedras a onzas
   * @param piedras 
   * @returns 
   */
  setPiedras(piedras: number) {
    this.onzas = piedras * 224;
    return this.onzas;
  }

  /**
   * Pasamos de onzas a piedras
   */
  get getPiedras() {
    return parseFloat((this.onzas / 224).toFixed(4));
  }

  /**
   * Pasamos de toneladas a onzas
   */
  setToneladas(toneladas: number) {
    this.onzas = toneladas * 35270;
    return this.onzas;
  }

  /**
   * Pasamos de onzas a toneladas
   */
  get getTonelada() {
    return parseFloat((this.onzas / 35270).toFixed(4));
  }

  /**
   * Pasamos de centena a onzas
   */
  setCentenas(centena: number) {
    this.onzas = centena * 1792;
    return this.onzas;
  }

  /**
   * Pasamos de onzas a centenas
   */ 
  get getCentenas() {
    return (this.onzas / 1792);
  }
}