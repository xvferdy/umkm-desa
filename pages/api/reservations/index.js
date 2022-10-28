import dbConnect from "../../../utils/dbConnect";
import Reservation from "../../../models/Reservation";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  if (method === "POST") {
    try {
      const reservation = await Reservation.create(req.body);
      res.status(201).json(reservation);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
