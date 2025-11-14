import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import Feedback from "@/models/feedback.schema";
import { authOptions } from "@/libs/next-auth";
import { getServerSession } from "next-auth";

export async function POST(req) {
  try {
    await connectMongo();
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id || null;

    const data = await req.json();

    const feedback = await Feedback.create({
      user: userId,
      name: data.name,
      feedback: data.feedback,
    });
    return NextResponse.json(
      { message: "successfull", feedback },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create feedback" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectMongo();
    const data = await Feedback.find();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Cant get the data" }, { status: 400 });
  }
}
