import { Observer } from "./Observer";

/**
 * Interfaz para las clases observables
 */
export interface Observable {
  suscribirse(observer: Observer): void;
  desuscribirse(observer: Observer): void;
  notificar(): void;
}