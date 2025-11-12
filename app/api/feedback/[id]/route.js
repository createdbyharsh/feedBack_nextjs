import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import Feedback from "@/models/feedback.schema";

export async function DELETE(req, { params }) {
  try {
    await connectMongo();
    const { id } = await params;
    await Feedback.findByIdAndDelete(id);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Cant Delete" }, { status: 500 });
  }
}
