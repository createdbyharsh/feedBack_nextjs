import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import Feedback from "@/models/feedback.schema";

export async function POST(req) {
  try {
    await connectMongo();
    const data = await req.json();
    await Feedback.create(data);
    return NextResponse.json("successfull", { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create feedback" },
      { status: 500 }
    );
  }
}
