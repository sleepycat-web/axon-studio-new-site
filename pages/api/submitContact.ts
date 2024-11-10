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
    const {
      fullName,
      email,
      phoneNumber,
      services,
      projectObjectives,
      niche,
      website,
    } = req.body;



    // Connect to database using the utility function
    const { db } = await connectToDatabase();

    // Insert the document
    const result = await db.collection("Contact").insertOne({
      fullName,
      email,
      phoneNumber,
      services,
      projectObjectives,
      niche,
      website,
      timestamp: new Date(),
    });

    return res.status(201).json({
      message: "Contact form submitted successfully",
      result,
    });
  } catch (error) {
    console.error("Failed to submit contact form:", error);
    return res.status(500).json({
      message: "Failed to submit contact form",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
