import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    blogId: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Blog", 
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);
