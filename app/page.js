"use client";
import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FeedBack from "@/components/FeedBack";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [feedBackList, setFeedBackList] = useState([
    {
      username: "harsha",
      feedback: "bad",
    },
    {
      username: "aritra",
      feedback: "Really loved the UI and animations!",
    },
    {
      username: "neha",
      feedback: "Good concept, but loading time is a bit slow.",
    },
    {
      username: "raj",
      feedback: "Clean design and easy to navigate — great job!",
    },
    {
      username: "tanvi",
      feedback: "Could use more color contrast for better readability.",
    },
  ]);

  const handleDelete = (username) => {
    setFeedBackList((prev) => prev.filter((x) => x.username !== username));
  };

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className=" max-w-7xl mx-auto p-8 flex flex-col items-center">
        <div className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center ">
          <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:mb-4">
            FeedBack
          </h1>
        </div>
        <div>
          <button className="bg-purple-700 rounded-md text-white p-2">
            <Link href="/feedback-form">Give Feedback</Link>
          </button>
        </div>
        <section className="lg:w-[50%] w-full ">
          {feedBackList.map((x, id) => (
            <FeedBack
              key={id}
              username={x.username}
              feedback={x.feedback}
              onDelete={() => handleDelete(x.username)}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
