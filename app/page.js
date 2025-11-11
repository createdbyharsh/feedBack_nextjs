import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import FeedBackList from "@/components/FeedBackList";

export default function Home() {
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

        <section className="lg:w-[50%] w-full mt-6">
          <FeedBackList />
        </section>
      </main>

      <Footer />
    </>
  );
}
