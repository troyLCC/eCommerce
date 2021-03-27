const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "please enter your product name"],
    trim: true,
    maxLength: [100, "Product name cant be more than 100 char"],
  },
  price: {
    type: Number,
    require: [true, "please enter your product price"],
    trim: true,
    maxLength: [5, "Product name cant be more than 100 char"],
    default: 0.0,
  },
  description: {
    type: String,
    require: [true, "please enter your product description"],
    trim: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please select category for your product"],
    enum: {
      values: [
        "Electronics",
        "Cameras",
        "Laptop",
        "Accessories",
        "Headphones",
        "Food",
        "Books",
        "Cloths",
        "Cloths/shoes",
        "Beauty/health",
        "Sports",
        "Outdoor",
        "Home",
      ],
      message: "Please select correct category for product",
    },
    seller: {
      type: String,
      required: [true, "Please enter product seller"],
    },
    stock: {
      type: Number,
      required: [true, " Please enter product stock"],
      maxLength: [5, "Product name cannot exceed 5 characters"],
      default: 0,
    },
    numofReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
});

module.exports = mongoose.model("Product", productSchema);