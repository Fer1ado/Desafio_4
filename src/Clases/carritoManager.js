import { promises as fs } from "fs";
import Carrito from "./carrito.js";
import productManager from "./productManager.js";

const rutaCarro = "../carrito.json";
const ruta = "../products.json";

export default class CarritoManager {
  constructor() {
    this.carrito = [];
  }

  async isAdded(id) {
    const produ = JSON.parse(await fs.readFile(rutaCarro, "utf-8"));
    return produ.some((e) => e.id === id);
  }

  async addCarrito(id) {
    const produ = JSON.parse(await fs.readFile(ruta, "utf-8"));
    const item = produ.find((e) => e.id === id);
    const idCheck = await this.isAdded(item.id);

    console.log(idCheck);

    if (idCheck) {
      const vieneCarro = JSON.parse(await fs.readFile(rutaCarro, "utf-8"));
      const indx = vieneCarro.findIndex((e) => e.id === parseInt(item.id));
      const nuevoValor = vieneCarro[indx].cantidad + 1;
      const creado = new Carrito(item.id, nuevoValor);
      const nuevoJson = vieneCarro.slice(indx, indx);
      await fs.writeFile(rutaCarro, JSON.stringify(nuevoJson));
      let saborido = [creado, ...nuevoJson];
      console.log(saborido);
      await fs.writeFile(rutaCarro, JSON.stringify(saborido));
      
      console.log("numero incrementado en Carrito");
      return;
    } else {
      const creado = new Carrito(item.id, 1);
      await fs.writeFile(rutaCarro, JSON.stringify(creado));
      console.log("producto agregado a carrito");
      return;
    }
  }
}

const carro = new CarritoManager();

carro.addCarrito(4);
