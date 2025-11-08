const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
const usuariosRoutes = require("./Routes/Usuarios");
const privadasRoutes = require("./Routes/Privadas");

app.use("/api/usuarios", usuariosRoutes);
app.use("/api/privado", privadasRoutes);

app.get("/", (_req, res) => {
  res.json({ ok: true, mensaje: "API JWT funcionando" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
