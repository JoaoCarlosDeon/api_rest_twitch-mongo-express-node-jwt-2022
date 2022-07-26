import express from 'express';
import "dotenv/config";
import "./database/connect_db.js"
import app from "./app.js"
import authRouter from "./routes/auth.routes.js"
import morgan from "morgan";


//MIDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(morgan("dev"));

//ROUTES
app.use("/api/v1", authRouter);


//SERVER
const PORT = process.env.PORT || 9000
app.listen(PORT, ()=> {
  console.log(`SERVIDOR RODANDO NA PORTA: ${PORT} 🔥🔥🔥`);
})