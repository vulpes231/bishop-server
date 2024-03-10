const { eventLogger } = require("./logger");

const errorLogger = (err, req, res, next) => {
  eventLogger(`${err.name}\t${err.stack}\t${err.message}`, "error.txt");
  next();
};

const reqLogger = (req, res, next) => {
  eventLogger(`${req.method}\t${req.url}\t${req.ip}`, "requests.txt");
  next();
};

module.exports = { errorLogger, reqLogger };
