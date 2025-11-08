const express = require("express");
const { verificarToken } = require("../middlewares/autenticacion");

const router = express.Router();

// GET /api/privado/perfil  (requiere JWT)
router.get("/perfil", verificarToken, (req, res) => {
  // req.user viene del middleware (payload del token)
  res.json({
    message: "Acceso permitido",
    usuario: req.user, // { sub, email, iat, exp }
  });
});

module.exports = router;
