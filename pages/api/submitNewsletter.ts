import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} Not Allowed` });
  }

  try {
    const { valueSub } = req.body;

    // Validate input
    if (!valueSub) {
      return res.status(400).json({ message: "Value is required" });
    }

    const formattedTimestamp = new Date().toLocaleString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    // Connect to database using the utility function
    const { db } = await connectToDatabase();

    // Insert the document
    const result = await db.collection("NewsletterData").insertOne({
      valueSub,
      timestamp: formattedTimestamp,
    });

    return res.status(201).json({
      message: "Data saved successfully",
      result,
    });
  } catch (error) {
    console.error("Failed to save data", error);
    return res.status(500).json({
      message: "Failed to save data",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
