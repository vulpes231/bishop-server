const { allowedOrigins } = require("./allowedOrigins");

const corsOptions = (req, callback) => {
  const origin = req.header("Origin");
  if (allowedOrigins.includes(origin) || !origin) {
    callback(null, { origin: true });
  } else {
    callback(new Error("Not allowed by CORS"));
  }
};

module.exports = { corsOptions };
