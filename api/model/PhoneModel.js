const mongoose = require("mongoose");

const phoneSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  brand: String,
  model: String,
  network_technology: String,
  [`2G_bands`]: String,
  [`3G_bands`]: String,
  [`4G_bands`]: String,
  network_speed: String,
  GPRS: String,
  EDGE: String,
  announced: String,
  status: String,
  dimentions: String,
  weight_g: String,
  weight_oz: String,
  SIM: String,
  display_type: String,
  display_resolution: String,
  display_size: String,
  OS: String,
  CPU: String,
  Chipset: String,
  GPU: String,
  memory_card: String,
  internal_memory: String,
  RAM: String,
  primary_camera: String,
  secondary_camera: String,
  loud_speaker: String,
  audio_jack: String,
  WLAN: String,
  bluetooth: String,
  GPS: String,
  NFC: String,
  radio: String,
  USB: String,
  sensors: String,
  battery: String,
  colors: String,
  approx_price_EUR: String,
  img_url: String,
  downloaded: Boolean
});

module.exports = mongoose.model("Mobile", phoneSchema, "MobileCollection");