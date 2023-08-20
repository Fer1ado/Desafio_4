import ProductManager from "./Clases/productManager.js";
;
import primerboot from "./Clases/boot.js";

import express from "express";
import prodRoute from "./Routes/products.routes.js";
import { _dirname } from "./path.js";
import path from "path";


///inicio servidor
const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(_dirname, "/public")));


//ROUTES
app.use("/api/products", prodRoute);


//INICIALIZANDO EL LISTADO DE PRODUCTOS
const ejecutar = new ProductManager();

//CARGA DE PRODUCTOS
primerboot();
