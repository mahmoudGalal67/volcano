const express = require("express");
const { register, login } = require("../controllers/auth.js");
const { getUsers, deleteUser } = require("../controllers/users.js");

const router = express.Router();

router.post("/auth/register", register);
router.post("/auth/login", login);
router.get("/users", getUsers);
router.delete("/users/:id", deleteUser);

module.exports = router;
