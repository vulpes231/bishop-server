const express = require("express");

const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  const filePath = path.join(__dirname, "../views/index.html");
  res.status(200).sendFile(filePath);
});

module.exports = router;
