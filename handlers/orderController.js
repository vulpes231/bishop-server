const Customer = require("../models/Customer");
const Order = require("../models/Order");

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({ orders });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Can't retrieve orders now. Try again later" });
  }
};

const createNewOrder = async (req, res) => {
  const { name, phone, address, orders } = req.body;

  if (!name || !phone || !address || !orders)
    return res.status(400).json({ message: "bad request!" });

  try {
    // Create new customer
    const newCustomer = await Customer.create({
      name: name,
      phone: phone,
      address: address,
    });

    // Create orders and associate them with the customer
    const createdOrders = await Promise.all(
      orders.map(async (order) => {
        return await Order.create({
          itemName: order.name,
          quantity: order.quantity,
          price: order.price,
          total: order.total,
          customer: newCustomer._id,
        });
      })
    );

    res
      .status(201)
      .json({ message: "Orders created successfully.", orders: createdOrders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occured. Try again later" });
  }
};

module.exports = { getAllOrders, createNewOrder };
