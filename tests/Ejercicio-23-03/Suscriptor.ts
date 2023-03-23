import 'mocha'
import { expect } from 'chai'
import { Suscriptor } from '../../src/Ejercicio-23-03/Suscriptor'
import { Revista } from '../../src/Ejercicio-23-03/Revista'

const suscriptor1 = new Suscriptor("Juan Jose", "juanjo");
const revista1 = new Revista("Historia", "National Geographic History", ["Historia", "Investigacion"]);
revista1.suscribirse(suscriptor1);

describe("Test de la clase Suscriptor", () => {
  it ("El constructor no debe devolver undefined", () => {
    expect(new Suscriptor("Juan Jose", "juanjo")).not.to.be.eql(undefined)
  });

  it ("El getter del nombre sobre el suscriptor1 debe ser Juan Jose", () => {
    expect(suscriptor1.getNombre).to.be.eql("Juan Jose")
  });

  it ("El getter del ID del suscriptor debe ser juanjo", () => {
    expect(suscriptor1.getId).to.be.eql("juanjo")
  });
});