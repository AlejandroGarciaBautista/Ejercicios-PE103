import { Observable } from "./Observable";
import { Observer } from "./Observer";
import { Revista, eventoRevista } from "./Revista";

/**
 * Clase Suscriptor
 */
export class Suscriptor implements Observer {
  private nombre: string;
  private id: string;
  
  /**
   * Constructor de la clase Suscriptor
   * @param nombre 
   * @param id 
   */
  constructor(nombre: string, id: string) {
    this.nombre = nombre;
    this.id = id;
  }

  /**
   * Getter del nombre del suscriptor
   */
  get getNombre() {
    return this.nombre;
  }

  /**
   * Getter del id del suscriptor
   */
  get getId() {
    return this.id;
  }

  /**
   * Método que nos indica cuando ha habido un envento
   * @param observable 
   */
  actualizar(observable: Observable): void {
    if (observable instanceof Revista) {
      switch(observable.getEvento) {
        case eventoRevista.PUBLICACION:
          console.log(`¡Alerta ${this.nombre}! Nueva publicacion de la revista ${observable.getNombre}`)
          break;
        case eventoRevista.ACTUALIZACION:
          console.log(`¡Alerta ${this.nombre}! En la revista ${observable.getNombre} ha habido una actualizacion en una de sus publicaciones`);
          break;
      }
    }
  }
}