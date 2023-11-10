import express  from "express";
const route = express.Router();
import {mostrar, enviar, product, cardProduct} from "./controller.js"
import {body} from "express-validator"


const validar = [
    body("name").notEmpty().withMessage("El campo nombre no puede estar vacio"),
    body("email").notEmpty().withMessage("El campo email no puede estar vacio"),
    body("consulta")
      .notEmpty()
      .withMessage("El campo mensaje no puede estar vacio")
      .bail()
      .custom((value) => {
        if (value.trim() === "") {
          throw new Error(
            "El campo mensaje no puede contener solo espacios en blanco"
          );
          }
        return true;
      }),
  ];

route.get("/", mostrar );
route.post("/enviar",validar, enviar)

route.get("/products", product)

route.get("/products/*", cardProduct)

export default route;
