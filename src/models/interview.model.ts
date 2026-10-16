import mongoose, {type InferSchemaType } from "mongoose";

const InterviewSchema = new mongoose.Schema(
  {
    role: { type: String, required: true },
    type: { type: String, required: true },
    level: { type: String, required: true },
    techStack: { type: [String], required: true },
    questions: { type: [String], required: true },
    finalized: { type: Boolean, required: true },
    coverImage: { type: String, required: true },
  },
  { timestamps: true },
);
export type InterviewDocument = InferSchemaType<typeof InterviewSchema> & {
  _id: mongoose.Types.ObjectId;
  createdAt: true;
  updatedAt: true; 
};

export const InterView=mongoose.model<InterviewDocument>("Interview",InterviewSchema)