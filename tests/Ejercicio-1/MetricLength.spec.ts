import 'mocha'
import { expect } from 'chai'
import { MetricLength } from "../../src/Ejercicio-1/MetricLength"

const ejemplo1 = new MetricLength(10);

describe("Test de la clase MetricLength", () =>{
  it ("El constructor no debe devolver undefined", () => {
    expect(new MetricLength(10)).not.to.be.eql(undefined)
  });

  it ("Getter del ejemplo 1 debe devolver 10", () => {
    expect(ejemplo1.getCentimetros).to.be.eql(10)
  });

  it ("El setter de nuevos centimetros debe devolver el nuevo valor", () => {
    expect(ejemplo1.setCentimetros(100)).to.be.eql(100)
  });

  it ("Paso de metros a centimetros", () => {
    expect(ejemplo1.setMetros(100)).to.be.eql(10000)
  });

  it ("Paso de centimetros a metros", () => {
    expect(ejemplo1.getMetros).to.be.eql(100)
  });

  it ("Paso de km a centimetros", () => {
    expect(ejemplo1.setKm(5)).to.be.eql(500000)
  });

  it ("Paso de centimetros a km", () => {
    expect(ejemplo1.getKm).to.be.eql(5)
  });
});