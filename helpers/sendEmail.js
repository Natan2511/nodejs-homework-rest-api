const Mailjet = require("node-mailjet");
require("dotenv").config();

const { MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE, MJ_SENDER_EMAIL } = process.env;

const mailjet = new Mailjet({
  apiKey: MJ_APIKEY_PUBLIC,
  apiSecret: MJ_APIKEY_PRIVATE,
});

const sendEmail = async (data) => {
  await mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: MJ_SENDER_EMAIL,
        },
        To: [
          {
            Email: "lapome6045@favilu.com",
          },
        ],
        Subject: data.subject,
        TextPart: "Verify email",
        HTMLPart: data.html,
      },
    ],
  });
  return true;
};

module.exports = sendEmail;
