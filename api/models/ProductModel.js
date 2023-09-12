import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
}, {
  timestamps: true
})

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
  img: {
    type: Array,
    required: true,
  },
  categories: {
    type: Array,
  },
  size: {
    type: Array, //no of beds
  },
  color: {
    type: Array, //location
  },
<<<<<<< HEAD
=======
  parking: {
    type: Number
  },
>>>>>>> c7d844e4d888b7d2856a331e858d3fcd2357ebec
  bath: {
    type: Number,
  },
  features: {
    type: Array,
  },
<<<<<<< HEAD
=======
  payment: {
    type: Array,
  },
>>>>>>> c7d844e4d888b7d2856a331e858d3fcd2357ebec
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0
  },
  price: {
    type: Number,
    required: true
  },
  inStock: {
    type: Boolean,
    default: true,
  }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema)

export default Product