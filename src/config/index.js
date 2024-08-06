module.exports = {
  config: require("./server.config"),
  MAILER: require("./email.config"),
  Queue: require("./queue.config"),
  logger: require("./logger.config"),
};
