import { ImperialLength } from "./ImperialLength";
import { MetricLength } from "./MetricLength";

export class AdapterLength extends MetricLength {
  constructor(private imperial: ImperialLength) {
    const pasoAMetrico = imperial.getPulgadas * 2.54;
    super(pasoAMetrico);
  }

  get getMetric() {
    return this.getCentimetros;
  }
}