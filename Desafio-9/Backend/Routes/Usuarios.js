const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

const users = []; // ESTRUCTURA: { id, email, passwordHash }

// POST /api/usuarios/register
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validaciones básicas
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email y password son requeridos" });
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ message: "Formato de email inválido" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "La contraseña debe tener al menos 6 caracteres" });
    }

    // Duplicado
    const existente = users.find((u) => u.email === email);
    if (existente) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    // Hash
    const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS, 10) || 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const newUser = { id: users.length + 1, email, passwordHash };
    users.push(newUser);

    return res.status(201).json({ message: "Usuario registrado" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error de servidor", error: err.message });
  }
});

// POST /api/usuarios/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = users.find((u) => u.email === email);
    if (!user) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // Generamos JWT
    const token = jwt.sign(
      { sub: user.id, email: user.email }, // payload
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1h" }
    );

    return res.json({
      message: "Login correcto",
      token,
      user: { id: user.id, email: user.email },
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error de servidor", error: err.message });
  }
});

module.exports = router;
