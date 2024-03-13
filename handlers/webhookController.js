const { sendMessage } = require("../utils/sendMessage");

const receiveWebhook = async (req, res) => {
  // const formData = req.body;
  // res.status(200).json({ formData });
  const message = req.body; //.messages.text
  console.log(message);

  // const data = {
  //   typing_time: 10,
  //   to: req.body.messages.chat_id,
  //   body: "Hello, world!",
  // };

  // if (message === "hello") {
  //   sendMessage(data);
  //   // await sendMessage("Hi there!");
  // } else if (message === "help") {
  //   const defData = {
  //     typing_time: 10,
  //     to: req.body.messages.chat_id,
  //     body: "How can i help today!",
  //   };
  //   await sendMessage(defData);
  // }

  res.sendStatus(200);
};

module.exports = { receiveWebhook };
