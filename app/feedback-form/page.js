"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const feedbackSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  feedback: z.string().min(5, "Feedback should be at least 5 characters long"),
});

const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(feedbackSchema),
  });

  const onSubmit = (data) => {
    console.log("Submitted:", data);
    alert("Thanks for your feedback!");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-6 rounded-xl shadow-md bg-base-100 space-y-4"
    >
      <h1 className="text-2xl font-semibold text-center">
        Your Feedback is Valuable
      </h1>

      {/* Name Input */}
      <div>
        <label className="label">
          <span className="label-text">Your Name</span>
        </label>
        <input
          {...register("name")}
          type="text"
          placeholder="John Doe"
          className="input input-bordered w-full"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Feedback Textarea */}
      <div>
        <label className="label">
          <span className="label-text">Feedback</span>
        </label>
        <textarea
          {...register("feedback")}
          placeholder="Write your feedback..."
          className="textarea textarea-bordered w-full h-32"
        ></textarea>
        {errors.feedback && (
          <p className="text-red-500 text-sm mt-1">{errors.feedback.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default FeedbackForm;
