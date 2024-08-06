const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  GMAIL_EMAIL: process.env.GMAIL_EMAIL,
  GMAIL_PASS: process.env.GMAIL_PASSWORD,
  QUEUE: process.env.QUEUE || "noti-queue",
  QUEUE_CONNECTION_URL: process.env.QUEUE_CONNECTION_URL || "amqp://localhost",
  HOST_EMAIL: process.env.HOST_EMAIL,
};
