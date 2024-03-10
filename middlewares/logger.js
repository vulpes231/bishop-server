const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;
const { v4: uuid } = require("uuid");
const { format } = require("date-fns");

const eventLogger = async (message, fileName) => {
  const currenDate = format(new Date(), "yyyy/dd/MM\tHH:mm:ss");
  const logItem = `${currenDate}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  const logFolder = path.join(__dirname, "../logs");
  try {
    if (!fs.existsSync(logFolder)) {
      await fsPromises.mkdir(logFolder);
    }
    const savePath = path.join(logFolder, fileName);
    await fsPromises.appendFile(savePath, logItem);
  } catch (error) {
    console.log(error);
  }
};

// eventLogger("Hello world", "log.txt");

module.exports = { eventLogger };
