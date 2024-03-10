const express = require("express");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { corsOptions } = require("./configs/corsOptions");
const { errorLogger, reqLogger } = require("./middlewares/myLoggers");

const PORT = process.env.PORT || 3000;

app.use(reqLogger);
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser());

app.use("/", require("./routes/root"));
app.use("/order", require("./routes/order"));

app.use(errorLogger);

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
