import mongoose from "mongoose";

const residenceListingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  trending: {
    type: Boolean,
    default: false,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  popular: {
    type: Boolean,
    default: false,
  },
  images: [String], // Array of image URLs
  amenities: [String], // Array of amenity names
  listedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming you have a User model
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const List = mongoose.model("ResidenceListing", residenceListingSchema);

export default List;
