import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { valueSub } = req.body;

    if (!valueSub) {
      return res.status(400).json({ message: "valueSub is required" });
    }

    console.log("Received request at", new Date().toISOString());

    try {
      const client = await clientPromise;
      const db = client.db("Innovia");
      const collection = db.collection("Innoviad");

      console.log("Connected to MongoDB at", new Date().toISOString());

      const result = await collection.insertOne({ valueSub });
      console.log("Inserted data at", new Date().toISOString());

      res.status(201).json({ message: "Data saved successfully", result });
    } catch (error) {
      console.error("Failed to save data:", error);
      res.status(500).json({ message: "Failed to save data", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
