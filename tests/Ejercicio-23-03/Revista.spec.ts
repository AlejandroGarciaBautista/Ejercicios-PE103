import 'mocha'
import { expect } from 'chai'
import { eventoRevista, Revista } from '../../src/Ejercicio-23-03/Revista'
import { Suscriptor } from '../../src/Ejercicio-23-03/Suscriptor'

const noSuscrito = new Suscriptor("Juan Jose", "juanjo");
const suscriptor = new Suscriptor("Alejandro", "ale1234");
const revista1 = new Revista("Historia", "National Geographic History", ["Historia", "Investigacion"]);

describe("Test de la clase Revista", () => {
  it ("El constructor no debe devolver undefined", () => {
    expect(new Revista("Historia", "National Geographic History", ["Historia", "Investigacion"])).not.to.be.eql(undefined)
  });

  it ("El getter del nombre sobre el objeto revista1 debe devolver Historia", () => {
    expect(revista1.getNombre).to.be.eql("Historia")
  });

  it ("El getter de la editorial sobre el objeto revista1 debe devolver National Geographic History", () => {
    expect(revista1.getEditorial).to.be.eql("National Geographic History")
  });

  it ("El getter de los generos sobre el objeto revista1 debe devolver [Historia, Investigacion]", () => {
    expect(revista1.getGeneros).to.be.eql(["Historia", "Investigacion"])
  });

  it ("El getter de los eventos sobre el objeto revista1 debe devolver SIN_EVENTO", () => {
    expect(revista1.getEvento).to.be.eql(eventoRevista.SIN_EVENTO)
  });

  it ("Método para suscribirse a una revista", () => {
    expect(revista1.getSuscriptores).to.be.eql([]);
    expect(revista1.suscribirse(suscriptor)).to.be.eql(undefined);
    expect(revista1.getSuscriptores).to.be.eql([suscriptor]);
  });

  // it ("Intento volver a suscribir al mismo usuario", () => {
  //   expect(revista1.suscribirse(suscriptor)).to.be.eql(new Error ("Ya esta suscrito"));
  // });

  // it ("Intento desuscribir a un usuario no suscrito", () => {
  //   expect(revista1.desuscribirse(noSuscrito)).to.be.eql(new Error ("Este usuario no esta suscrito"));
  // });
});