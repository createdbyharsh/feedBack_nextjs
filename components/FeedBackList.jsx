"use client";
import FeedBackCard from "@/components/FeedBackCard";
import apiClient from "@/libs/api";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const FeedBackList = () => {
  const [feedBacks, setFeedBacks] = useState([]);

  async function getFeedback() {
    const data = await apiClient.get("/feedback");
    setFeedBacks(data);
  }

  async function handleDelete(id) {
    try {
      await apiClient.delete(`/feedback/${id}`);
      setFeedBacks((prev) => prev.filter((x) => x.id !== id));
      toast.success("Deleted");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getFeedback();
  }, []);

  return (
    <>
      {feedBacks.length > 0 ? (
        feedBacks.map((x) => (
          <FeedBackCard
            key={x.id}
            username={x.name}
            feedback={x.feedback}
            onDelete={() => handleDelete(x.id)}
          />
        ))
      ) : (
        <div>Such a empty</div>
      )}
    </>
  );
};

export default FeedBackList;
