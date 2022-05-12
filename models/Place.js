import mongoose from "mongoose";

const PlaceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 50,
  },
  image: {
    type: String,
    required: true,
  },
  people: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.Place || mongoose.model("Place", PlaceSchema);
