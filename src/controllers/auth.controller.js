import { validationResult } from "express-validator";

export const register = async (req, res)=> {

  


  console.log(req.body);

  res.json({ ok: true, message: "ROTA REGISTER" });
};

export const login = async (req, res)=> {
  res.json({ ok: true, message: "ROTA LOGIN" });
};

