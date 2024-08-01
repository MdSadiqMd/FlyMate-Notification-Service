const express = require("express");

const { EmailController } = require("../../controllers");

const router = express.Router();

router.post("/tickets", EmailController.create);

module.exports = router;
