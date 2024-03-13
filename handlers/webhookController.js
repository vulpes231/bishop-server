const { sendMessage } = require("../utils/sendMessage");

const receiveWebhook = async (req, res) => {
  // const formData = req.body;
  // res.status(200).json({ formData });
  const message = req.body.message.text; //.messages.text
  console.log(message);

  const body = {
    typing_time: 10,
    to: req.body.messages.chat_id,
    body: "Hello, world!",
  };

  const defBody = {
    typing_time: 10,
    to: req.body.messages.chat_id,
    body: "How can i help you today?",
  };

  if (message === "hello") {
    sendMessage(body);
    // await sendMessage("Hi there!");
  } else {
    await sendMessage(defBody);
  }

  res.sendStatus(200);
};

module.exports = { receiveWebhook };
