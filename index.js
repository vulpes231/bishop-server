const express = require("express");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { corsOptions } = require("./configs/corsOptions");
const { errorLogger, reqLogger } = require("./middlewares/myLoggers");
const { connectDatabase } = require("./configs/connectDB");
const { default: mongoose } = require("mongoose");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

connectDatabase();

app.use(reqLogger);
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/webhook", require("./routes/webhook"));
app.use("/order", require("./routes/order"));
app.use("/", require("./routes/root"));

app.use(errorLogger);

mongoose.connection.once("open", () => {
  app.listen(PORT, () =>
    console.log(`Server started on http://localhost:${PORT}`)
  );
});

// app.listen(PORT, () =>
//   console.log(`Server started on http://localhost:${PORT}`)
// );
