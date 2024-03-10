const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  itemName: {
    type: String,
  },
  quantity: {
    type: String,
  },
  price: {
    type: String,
  },
  total: {
    type: String,
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "customer",
  },
  status: {
    type: String,
    default: "pending",
  },
});

module.exports = mongoose.model("order", orderSchema);
