const TelegramApi = require('node-telegram-bot-api');
const { TOKEN_BOT } = require('./config');
const logger = require('./logger');

const bot = new TelegramApi(TOKEN_BOT, { polling: true });

const start = () => {
  logger.info('Bot started');

  bot.on('message', async (requestFromChat) => {
    const { chat } = requestFromChat;
    const { username } = chat;
    const chatId = chat.id;

    logger.info(`Username: ${username}; Chat id: ${chatId}`);

    return bot.sendMessage(chatId, 'Hi there! Please, send me your location!');
  });

  bot.on('location', async (requestFromChat) => {
    const { chat } = requestFromChat;
    const { latitude, longitude } = requestFromChat.location;
    const chatId = chat.id;

    logger.info(`Latitude: ${latitude}; Longitude: ${longitude}`);

    return bot.sendMessage(chatId, 'Hi! Please, send me your geo!');
  });
};

start();
