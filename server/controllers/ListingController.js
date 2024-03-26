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
    if (!item) {
      res.status(404).json({ message: "Requested Item doesn't exist" });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteItem = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await List.findByIdAndDelete(id);
    if (!item) {
      res.status(404).json({ message: "Requested Item doesn't exist" });
    }
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

export const getItemsOnQuery = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 9;
    const startIndex = parseInt(req.query.startIndex) || 0;

    // Parse amenities
    const amenities = req.query.amenities
      ? { amenities: { $all: req.query.amenities.split(",") } }
      : {};

    // Parse boolean fields
    const booleanFields = ["pool", "gardern", "parking", "fireplace", "gym", "wifi"];
    const booleanFilters = {};
    booleanFields.forEach((field) => {
      if (req.query[field] !== undefined) {
        booleanFilters[field] = req.query[field] === "true";
      }
    });

    const searchTerm = req.query.searchTerm
      ? { title: { $regex: new RegExp(req.query.searchTerm, "i") } }
      : {};
    const sort = req.query.sort || "createdAt";
    const order = req.query.order === "asc" ? 1 : -1;

    // Parse nested fields
    const nestedFields = ["listedBy"];
    const nestedFilters = {};
    nestedFields.forEach((field) => {
      if (req.query[field]) {
        nestedFilters[field] = req.query[field];
      }
    });

    const listings = await List.find({
      ...searchTerm,
      ...amenities,
      ...booleanFilters,
      ...nestedFilters,
    })
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex);

    res.status(200).json(listings);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};