import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      maxlength: 200,
    },
    date: {
      type: Date,
      required: [true, "Need to input date"],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Reservation ||
  mongoose.model("Reservation", ReservationSchema);
