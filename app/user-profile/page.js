import FeedBackCard from "@/components/FeedBackCard";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/next-auth";
import connectMongo from "@/libs/mongoose";
import Feedback from "@/models/feedback.schema";

const UserProfile = async () => {
  await connectMongo();
  const session = await getServerSession(authOptions);

  const id = session?.user?.id;

  const feedBacks = await Feedback.find({ user: id });

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

export default UserProfile;
