import { Revista } from "./Revista";
import { Suscriptor } from "./Suscriptor";

const revista1 = new Revista("Historia", "National Geographic History", ["Historia", "Investigacion"]);
const primerSuscriptor = new Suscriptor("Alejandro", "ale1234");
const segundoSuscriptor = new Suscriptor("Juan Jose", "juanjo");

console.log("Primer suscriptor");
revista1.suscribirse(primerSuscriptor);
console.log("Segundo suscriptor");
revista1.suscribirse(segundoSuscriptor);

try {
  revista1.suscribirse(primerSuscriptor);
} catch (error) {
  console.log("Ya esta suscrito")
}

console.log("Nueva publicacion");
console.log(revista1.nuevaPublicacion());

console.log("Nueva publicacion");
revista1.nuevaPublicacion();

console.log("Actualizacion")
revista1.nuevaActualizacion();