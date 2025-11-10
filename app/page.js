import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeedBackList from "@/components/FeedBackList";
import connectDB from "@/libs/mongoose";
import Feedback from "@/models/feedback";
import Link from "next/link";

export const revalidate = 0;
export default async function Home() {
  await connectDB();
  const feedBackList = await Feedback.find().sort({ createdAt: -1 }).lean();

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>

      <main className="max-w-7xl mx-auto p-8 flex flex-col items-center">
        <div className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center">
          <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight mb-4">
            Feedback
          </h1>
        </div>

        <div>
          <Link
            href="/feedback-form"
            className="bg-purple-700 rounded-md text-white px-4 py-2"
          >
            Give Feedback
          </Link>
        </div>

        {/* ✅ Pass feedback data to client component */}
        <section className="lg:w-[50%] w-full mt-6">
          <FeedBackList initialFeedbacks={feedBackList} />
        </section>
      </main>

      <Footer />
    </>
  );
}
