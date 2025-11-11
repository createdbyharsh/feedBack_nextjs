import FeedBackCard from "@/components/FeedBackCard";
import connectMongo from "@/libs/mongoose";
import feedback from "@/models/feedback.schema";

const FeedBackList = async () => {
  await connectMongo();
  const feedBacks = await feedback.find();

  return (
    <>
      {feedBacks.length > 0 ? (
        feedBacks.map((x) => (
          <FeedBackCard key={x.id} username={x.name} feedback={x.feedback} />
        ))
      ) : (
        <div>Such a empty</div>
      )}
    </>
  );
};

export default FeedBackList;
