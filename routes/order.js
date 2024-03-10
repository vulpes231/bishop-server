const express = require("express");
const { createNewOrder } = require("../handlers/orderController");

const router = express.Router();

router.route("/").post(createNewOrder);

module.exports = router;
