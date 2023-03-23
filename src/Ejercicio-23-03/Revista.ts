import { Observable } from "./Observable";
import { Observer } from "./Observer";

/** Enumerado que contiene los posibles eventos de una revista */
export enum eventoRevista {"PUBLICACION", "ACTUALIZACION", "SIN_EVENTO"};

/**
 * Clase revista
 */
export class Revista implements Observable {
  private nombre: string;
  private editorial: string;
  private generos: string[];
  private suscriptores: Observer[];

  private evento: eventoRevista = eventoRevista.SIN_EVENTO;

  /**
   * Constructor de la clase Revista
   */
  constructor(nombre: string, editorial: string, generos: string[]) {
    this.suscriptores = [];
    this.nombre = nombre;
    this.editorial = editorial;
    this.generos = generos;
  }

  /**
   * Getter del nombre de la revista
   */
  get getNombre() {
    return this.nombre;
  }

  /**
   * Getter de la editorial de la revista
   */
  get getEditorial() {
    return this.editorial;
  }

  /**
   * Getter del genero de la revista
   */
  get getGeneros() {
    return this.generos;
  }

  /**
   * Getter del evento actual
   */
  get getEvento() {
    return this.evento;
  }

  get getSuscriptores() {
    return this.suscriptores;
  }

  /**
   * Método para añadir un suscriptor a la revista
   * @param observer 
   */
  suscribirse(observer: Observer): void {
    if (this.suscriptores.includes(observer)) {
      throw new Error("Ya esta suscrito")
    } else {
      this.suscriptores.push(observer);
    }
  }

  /**
   * Método para desuscribirse de la revista
   * @param observer 
   */
  desuscribirse(observer: Observer): void {
    const indice = this.suscriptores.indexOf(observer)
    if (indice === -1) {
      throw new Error("Este usuario no esta suscrito")
    } else {
      this.suscriptores.splice(indice, 1);
    }
  }

  /**
   * Método para realizar una notificación de un evento a la revista
   */
  notificar(): void {
    this.suscriptores.forEach((suscriptor) => suscriptor.actualizar(this));
  }

  /**
   * Método para representar una nueva publicación de la revista
   */
  nuevaPublicacion(): void {
    this.evento = eventoRevista.PUBLICACION;
    this.notificar();
  }

  /**
   * Método para representar una actualiazcion de la revista
   */
  nuevaActualizacion(): void {
    this.evento = eventoRevista.ACTUALIZACION;
    this.notificar();
  }
}