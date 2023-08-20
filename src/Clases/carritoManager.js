import { promises as fs } from "fs";
import { _dirname } from "../path.js"

const rutaCarro = `${_dirname}/Json/carrito.json`;

export default class CarritoManager {
  constructor() {
    this.carrito = [];
  }

  async isAdded(id) {
    const produ = JSON.parse(await fs.readFile(rutaCarro, "utf-8"));
    return produ.some((e) => e.id === id);
  }

  async founded(id) {
    const produ = JSON.parse(await fs.readFile(ruta, "utf-8"));
    const item = produ.find((e) => e.id === id);
    if (item) {
      return item;
    } else {
      return null;
    }
  }

  async getCarrito(){
    const producto = JSON.parse(await fs.readFile(rutaCarro, "utf-8"));
    return producto;
  }

  async addCarrito(id) {
    const item = await this.founded(id);

    if (item === null) {
      return "producto inexistente";
    }
    if (await this.isAdded(item.id)) {
      const vieneCarro = JSON.parse(await fs.readFile(rutaCarro, "utf-8"));
      const indx = vieneCarro.findIndex((e) => e.id === parseInt(item.id));
      const nuevoValor = vieneCarro[indx].cantidad + 1;
      const creado = { id: item.id, cantidad: nuevoValor };
      let nuevoJson = vieneCarro.filter((prod) => prod.id != item.id);
      let template = nuevoJson.concat(creado);
      await fs.writeFile(rutaCarro, JSON.stringify(template));
      return "numero incrementado en Carrito";
    } else {
      const crear = { id: item.id, cantidad: 1 };
      const vieneCarro = JSON.parse(await fs.readFile(rutaCarro, "utf-8"));
      const push = vieneCarro.concat(crear);
      await fs.writeFile(rutaCarro, JSON.stringify(push));
      return "producto agregado a carrito";
    }
  }
}




