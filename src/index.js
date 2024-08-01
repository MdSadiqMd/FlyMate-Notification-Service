const express = require("express");

const { config, logger } = require("./config");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(config.PORT, () => {
  logger.info(`Successfully started the server on PORT : ${config.PORT}`);
});
