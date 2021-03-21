import express from "express";
import morgan from "morgan";

import pkg from "../package.json";
import serviceRoute from "./Routes/servicioSalud.routes";
import usuarioRoute from "./Routes/usuario.routes";
import cors from "cors";

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.set("pkg", pkg);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({
    autor: app.get("pkg").author,
    descripcion: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

app.use("/api/servicio", serviceRoute);
app.use("/api/usuario", usuarioRoute);

export default app;
