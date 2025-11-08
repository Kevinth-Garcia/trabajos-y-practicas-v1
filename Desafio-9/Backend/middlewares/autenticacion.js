const jwt = require("jsonwebtoken");

function verificarToken(req, res, next) {
  // Esperamos header tipo: Authorization: Bearer <token>
  const auth = req.headers.authorization || "";
  const [, token] = auth.split(" ");

  if (!token) {
    return res.status(401).json({ message: "Token no provisto" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // Guardamos el payload para uso posterior
    req.user = payload;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
}

module.exports = { verificarToken };
