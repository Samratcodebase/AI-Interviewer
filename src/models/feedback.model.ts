import mongoose, { type InferSchemaType } from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    score: { type: String, required: true },
    comment: { type: String, required: true },
  },
  { _id: false, timestamps: true },
);

const feedBackSchema = new mongoose.Schema(
  {
    interviewID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Interview",
      required: true,
      index: true,
    },
    totalScore: { type: Number, required: true },
    categoryScore: { type: [categorySchema], required: true },
    strengths: { type: [String], required: true },
    areasForImprovement: { type: [String], required: true },
    finalAssesment: { type: String, required: true },
  },
  { timestamps: true },
);
export type feedBackDocument = InferSchemaType<typeof feedBackSchema> & {
  _id: mongoose.Schema.Types.ObjectId;
  createdAt: string;
  updatedAt: string;
};

export const feedBack = mongoose.model<feedBackDocument>(
  "feedBack",
  feedBackSchema,
);
