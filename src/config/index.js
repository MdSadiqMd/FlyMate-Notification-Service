const logger = require("./logger.config");
const config = require("./server.config");
const MAILER = require("./email.config");
const Queue = require("./queue.config");

module.exports = {
  config,
  MAILER,
  Queue,
  logger,
};
