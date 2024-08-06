const amqplib = require("amqplib");

const { config } = require("./index");
const { EmailService } = require("../services");

async function connectQueue(logger) {
  try {
    const connection = await amqplib.connect(config.QUEUE_CONNECTION_URL);
    const channel = await connection.createChannel();
    await channel.assertQueue(config.QUEUE);
    channel.consume(config.QUEUE, async (data) => {
      console.log(`${Buffer.from(data.content)}`);
      const object = JSON.parse(`${Buffer.from(data.content)}`);
      await EmailService.sendEmail(
        config.HOST_EMAIL,
        object.recepientEmail,
        object.subject,
        object.text
      );
      channel.ack(data);
    });
  } catch (error) {
    logger.error(`Error in connecting Queue in config: ${error}`);
  }
}

module.exports = {
  connectQueue,
};