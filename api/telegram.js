export default function handler(req, res) {
  if (req.method === "POST") {
    const chatId = req.body.message.chat.id;
    const text = req.body.message.text;

    // Şimdilik sadece geri cevap veriyoruz (echo bot)
    res.status(200).json({
      method: "sendMessage",
      chat_id: chatId,
      text: "Sen yazdın: " + text
    });
  } else {
    res.status(200).json({ message: "Bot çalışıyor!" });
  }
}

