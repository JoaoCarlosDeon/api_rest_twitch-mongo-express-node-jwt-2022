import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import { body } from "express-validator";
import { validationResultExpress } from "../midlewares/validationResultExpress.js"


const router = express.Router();

router.post("/register",
  [
  //PROPRIEDADE   //MSG DE ERRO
    body( "email", "Formato de e:mail incorreto" )
      .trim()
      .isEmail()
      .normalizeEmail(),
      
    body( "password", "Senha: Mínimo de 6 caracteres" )
      .trim()
      .isLength({ min: 6 }),

    body( "password", "Senha incorreta" )
      .custom((value, { req })=> {
        if(value !== req.body.repassword) {
          throw new Error("As senhas não coincidem");
        }
        return value;
      })
      
  ],
  validationResultExpress, 
  register)

router.post("/login",
[
   //PROPRIEDADE   //MSG DE ERRO
   body( "email", "Formato de e:mail incorreto" )
   .trim()
   .isEmail()
   .normalizeEmail(),
   
  body( "password", "Senha: Mínimo de 6 caracteres" )
   .trim()
   .isLength({ min: 6 }),

],
validationResultExpress,
login)

export default router;