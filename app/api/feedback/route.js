import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import Feedback from "@/models/feedback";
import { revalidatePath } from "next/cache";

export async function POST(request) {
  try {
    await connectMongo();
    const body = await request.json();
    const { name, feedback } = body;
    if (!name || !feedback) {
      return NextResponse.json({ error: "missing data" }, { status: 400 });
    }
    const newFeedback = await Feedback.create({ name, feedback });
    console.log("saved feedback:", newFeedback);
    revalidatePath("/");

    return NextResponse.json(
      { message: "feedback saved", data: newFeedback },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
