const { default: axios } = require("axios");

const sendMessage = async (body) => {
  const token = process.env.WHAPI;
  const url = `https://gate.whapi.cloud/messages/text?token=${token}`;
  const response = await axios(url, body, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  return response.data;
};

module.exports = { sendMessage };
