import 'mocha'
import { expect } from 'chai'
import { ImperialMass } from "../../src/Ejercicio-1/ImperialMass"

const ejemplo1 = new ImperialMass(100);

describe ("Tests de la clase ImperialMass", () => {
  it ("El constructor no debe devolver undefined", () => {
    expect(new ImperialMass(10)).not.to.be.eql(undefined)
  });

  it ("El getter del las onzas en el ejemplo 1 debe devolver 100", () => {
    expect(ejemplo1.getOnzas).to.be.eql(100);
  });

  it ("El setter de las nueva cantidad en onzas debe devolver la cantidad nueva", () => {
    expect(ejemplo1.setNuevasOnzas(250)).to.be.eql(250)
  });

  it("Pasamos de libras a onzas", () => {
    expect(ejemplo1.setLibras(10)).to.be.eql(160)
  });

  it("Pasamos de onzas a libras", () => {
    expect(ejemplo1.getLibras).to.be.eql(10);
  });

  it("Pasamos de piedras a onzas", () => {
    expect(ejemplo1.setPiedras(4)).to.be.eql(896)
  });

  it ("Pasamos de onzas a piedras", () => {
    expect(ejemplo1.getPiedras).to.be.eql(4)
  });

  it ("Pasamos de toneladas a onzas", () => {
    expect(ejemplo1.setToneladas(0.5)).to.be.eql(17635)
  });

  it("Pasamos de onzas a tonelada", () => {
    expect(ejemplo1.getTonelada).to.be.eql(0.5)
  });

  it ("Pasamos de centenas a onzas", () => {
    expect(ejemplo1.setCentenas(1)).to.be.eql(1792)
  });

  it ("Pasamos de onzas a centenas", () => {
    expect(ejemplo1.getCentenas).to.be.eql(1)
  });

})