const express = require("express");
const { receiveWebhook } = require("../handlers/webhookController");

const router = express.Router();

router.route("/").post(receiveWebhook);

module.exports = router;
