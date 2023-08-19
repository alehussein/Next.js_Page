import { MongoClient } from "mongodb";

// /api/new-meetup
// POST

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, address, description } = data;
    const client = await MongoClient.connect(
      "mongodb+srv://alejandrohussein1:Zaq12345@cluster0.8rzmsvo.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({ message: "meetups inserted" });
  }
}

export default handler;
