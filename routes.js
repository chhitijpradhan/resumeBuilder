const express = require("express");

const router = express.Router();
router.get("./get-templetes", getTempletes);
router.post("/login", userLogin);
router.post("/register", userRegister);
module.export = router;
