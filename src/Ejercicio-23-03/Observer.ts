import { Observable } from "./Observable";

/**
 * Interfaz para las clases observadoras
 */
export interface Observer {
  actualizar(observable: Observable): void
}