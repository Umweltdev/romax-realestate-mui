import mongoose from "mongoose";

const timelineSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
  paragraph: {
    type: Array,
    required: true,
  },
  dateText: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  background: {
    type: String
  }
}, { timestamps: true })

const Timeline = mongoose.model("Timeline", timelineSchema)

export default Timeline

