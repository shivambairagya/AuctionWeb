const AuctionItem = require("../models/AuctionItem");

// Get all auction items
const getItems = async (req, res) => {
  try {
    const items = await AuctionItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new auction item
const addItem = async (req, res) => {
  const { name, price, startTime, endTime } = req.body;

  if (!name || !price || !startTime || !endTime) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newItem = new AuctionItem({ name, price, startTime, endTime });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getItems, addItem };
