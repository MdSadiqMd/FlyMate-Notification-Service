const express = require("express");

const { config, Queue, logger } = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

app.listen(config.PORT, async () => {
  logger.info(`Successfully started the server on PORT : ${config.PORT}`);
  await Queue.connectQueue();
});
