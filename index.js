const TelegramApi = require('node-telegram-bot-api');
const { TOKEN_BOT, TOKEN_WEATHER_API } = require('./config');
const logger = require('./logger');
const openWeatherMapApiUrlBuilder = require('./lib/openWeatherMapApiUrlBuilder');
const httpsGetJson = require('./lib/httpsGetJson');

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

    const url = openWeatherMapApiUrlBuilder(TOKEN_WEATHER_API, latitude, longitude);
    const json = await httpsGetJson(url).catch((error) => {
      logger.error(`Error occurred while sending request. ${error}`);
    });

    return bot.sendMessage(chatId, JSON.stringify(json));
  });
};

start();
