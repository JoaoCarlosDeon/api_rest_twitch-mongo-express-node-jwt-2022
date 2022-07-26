import "dotenv/config";
import mongoose from "mongoose";



try {
  await mongoose.connect(process.env.URI_MONGO)
  console.log("DB_MONGO CONECTADO COM SUCESSO!");
} catch (error) {
  console.log("ERRO AO CONECTAR DB_MONGO" + error);
};