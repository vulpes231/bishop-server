const { default: axios } = require("axios");

const sendMessage = async (data) => {
  const token = process.env.WHAPI;
  const url = `https://gate.whapi.cloud/messages/text?token=${token}`;
  const response = await axios(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  return response.data;
};

module.exports = { sendMessage };
