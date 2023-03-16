import 'mocha'
import { expect } from 'chai'
import {ImperialLength} from "../../src/Ejercicio-1/ImperialLength"

const pulgadas = new ImperialLength(10);

describe ("Tests de la clase ImperialLength", () => {
  it ("El constructor no debe devolver undefined", () => {
    expect(new ImperialLength(10)).not.to.be.eql(undefined)
  });

  it ("El getter debe devolver el valor en punlgadas", () => {
    expect(pulgadas.getPulgadas).to.be.eql(10);
  });

  it ("setNuevoValor debe devolver el nuevo valor", () => {
    expect(pulgadas.setNuevasPulgadas(15)).to.be.eql(15)
  });
  
  it ("Pasar de pies a pulgadas", () => {
    expect(pulgadas.setPies(100)).to.be.eql(1200)
  });

  it ("Devolver las pulgadas en pies", () => {
    expect(pulgadas.getPies).to.be.eql(100)
  });

  it ("Pasar de yardas a pulgadas", () => {
    expect(pulgadas.setYardas(200)).to.be.eql(7200)
  });

  it ("Devolver las pulgadas en Yardas", () => {
    expect(pulgadas.getYardas).to.be.eql(200)
  });

  it ("Pasar de millas a pulgadas", () => {
    expect(pulgadas.setMillas(1)).to.be.eql(63360)
  });

  it ("Devolver las pulgadas en Millas", () => {
    expect(pulgadas.getMillas).to.be.eql(1)
  });
});