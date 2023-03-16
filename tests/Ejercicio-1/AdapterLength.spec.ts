import 'mocha'
import { expect } from 'chai'
import { ImperialLength } from '../../src/Ejercicio-1/ImperialLength'
import { AdapterLength } from "../../src/Ejercicio-1/AdapterLength"

const imperial = new ImperialLength(10);
const metrico = new AdapterLength(imperial);

describe("Tests de la clase AdapterLenght", () => {
  it ("El constructor no debe ser undefined", () => {
    expect(new AdapterLength(imperial)).not.to.be.eql(undefined)
  });

  it("Pruebo el getMetric", () => {
    expect(metrico.getMetric).to.be.eql(25.4)
  });

  it ("Pruebo a obtener el valor en metros", () => {
    expect(metrico.getMetros).to.be.eql(0.254)
  });

  it ("Pruebo a obtener el valor en km", () => {
    expect(metrico.getKm).to.be.eql(0.000254)
  });
});