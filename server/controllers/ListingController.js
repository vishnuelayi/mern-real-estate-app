import List from "../models/List.js";

export const listOneItem = async (req, res) => {
  const user = req.user;
  try {
    const item = await List.create({ ...req.body, listedBy: user._id });
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getItemsByUser = async (req, res) => {
  const user = req.user;
  try {
    const items = await List.find({ listedBy: user._id });
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getSingleItem = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await List.findById(id);
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteItem = async (req, res) => {
  const user = req.user;
  const { id } = req.params;
  try {
    const item = await List.findOne({ _id: id, listedBy: user._id });
    if (!item) {
      res.status(404).json({ message: "Item not found" });
    }
    await item.remove();
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const editOneItem = async (req, res) => {
  const user = req.user;
  const { id } = req.params;
  try {
    const item = await List.findOne({ _id: id, listedBy: user._id });
    if (!item) {
      res.status(404).json({ message: "Item not found" });
    }
    await item.updateOne({ ...req.body });
    res.status(200).json({ message: "Item updated successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllItems = async (req, res) => {
  try {
    const items = await List.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
