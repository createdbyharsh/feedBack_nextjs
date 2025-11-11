import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

const FeedbackSchema = mongoose.Schema({
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
