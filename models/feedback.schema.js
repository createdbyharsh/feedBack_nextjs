import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

const FeedbackSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
  name: {
    type: String,
    trim: true,
  },
  feedback: {
    type: String,
    trim: true,
  },
});

FeedbackSchema.plugin(toJSON);

export default mongoose.models.Feedback ||
  mongoose.model("Feedback", FeedbackSchema);
