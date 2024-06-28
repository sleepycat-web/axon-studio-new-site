import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { fullName, email, phoneNumber, message } = req.body;

      // Validate the data if necessary

      const client = await clientPromise;
      const db = client.db("AxonStudio"); // Use your database name if different from default

      const collection = db.collection("Contact"); // Replace with your collection name

      const result = await collection.insertOne({
        fullName,
        email,
        phoneNumber,
        message,
        timestamp: new Date(),
      });

      res.status(201).json({ message: "Form submitted successfully", result });
    } catch (error) {
      res.status(500).json({ message: "Error submitting form", error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
