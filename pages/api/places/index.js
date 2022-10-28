import dbConnect from "../../../utils/dbConnect";
import Place from "../../../models/Place";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  if (method === "GET") {
    try {
      const place = await Place.find();
      res.status(200).json(place);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    try {
      const place = await Place.create(req.body);
      res.send("Place added");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
