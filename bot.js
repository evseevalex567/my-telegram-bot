require('dotenv').config();
const token = process.env.BOT_TOKEN;
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(token, { polling: true });

const webAppUrl = 'https://fastidious-puppy-564fa3.netlify.app/';

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Откройте мини-приложение:', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Открыть приложение', web_app: { url: webAppUrl } }]
      ]
    }
  });
});
