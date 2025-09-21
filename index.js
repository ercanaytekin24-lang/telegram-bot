const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Bot API çalışıyor 🚀");
});

app.post("/webhook", (req, res) => {
  console.log("Telegram'dan veri geldi:", req.body);
  res.send({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});
