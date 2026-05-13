const mongoose = require("mongoose");

const cryptoSchema = new mongoose.Schema({
  id: String,
  name: String,
  symbol: String,
  image: String,
  current_price: Number,
  market_cap: Number,
  market_cap_rank: Number,
  price_change_percentage_24h: Number,
});

const Crypto = mongoose.model("Crypto", cryptoSchema);

module.exports = Crypto;