// pages/api/saveMeeting.ts
import { connectToDatabase } from "@/lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { db } = await connectToDatabase();

    const newTiming = {
      confirmationTime: new Date(),
      status: "pending",
    };

    const result = await db.collection("ContactTimings").insertOne(newTiming);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
}
