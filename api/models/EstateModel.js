import mongoose from "mongoose";

const estateModel = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
  categories: {
    type: Array,
  },
  location: {
    type: String,
  },
  img: {
    type: Array,
    required: true,
  },
  features: {
    type: Array,
  },
  house: {
    type: Number,
  },
<<<<<<< HEAD
  price: {
=======
  num: {
>>>>>>> c7d844e4d888b7d2856a331e858d3fcd2357ebec
    type: Number,
  }
}, { timestamps: true })

const Estate = mongoose.model("Estate", estateModel)

export default Estate