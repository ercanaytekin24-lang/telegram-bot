import TelegramBot from "node-telegram-bot-api";
import fetch from "node-fetch"; // API'ye istek atmak için

// Telegram bot tokenini buraya yaz
const token = "BURAYA_TELEGRAM_BOT_TOKENİNİ_YAZ";

// API endpoint adresin (sana verdiğin API URL’si buraya)
const API_URL = "BURAYA_API_LINKİNİ_YAZ";

const bot = new TelegramBot(token, { polling: true });

// Kullanıcıdan gelen her mesajı yakala
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  try {
    // Mesajı API'ye gönder
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text })
    });

    const data = await response.json();

    // API'den dönen cevabı kullanıcıya gönder
    bot.sendMessage(chatId, data.reply || "API'den cevap yok.");
  } catch (err) {
    console.error("API hatası:", err);
    bot.sendMessage(chatId, "Bir hata oluştu 🚨");
  }
});
