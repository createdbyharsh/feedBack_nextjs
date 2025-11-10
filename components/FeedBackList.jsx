"use client";

import React, { useState } from "react";
import FeedBack from "@/components/FeedBack";
import apiClient from "@/libs/api";

const FeedBackList = ({ initialFeedbacks }) => {
  const [feedbacks, setFeedbacks] = useState(initialFeedbacks);

  const handleDelete = async (id) => {
    try {
      await apiClient.delete(`/feedback/${id}`);
      setFeedbacks((prev) => prev.filter((fb) => fb._id !== id));
    } catch (error) {
      console.error("Error deleting feedback:", error);
    }
  };

  return (
    <>
      {feedbacks.length > 0 ? (
        feedbacks.map((x) => (
          <FeedBack
            key={x._id}
            username={x.name}
            feedback={x.feedback}
            onDelete={() => handleDelete(x._id)}
          />
        ))
      ) : (
        <p className="text-center text-gray-500 mt-4">
          No feedback yet. Be the first to add one!
        </p>
      )}
    </>
  );
};

export default FeedBackList;
