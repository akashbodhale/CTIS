import mongoose, { Schema, Document } from "mongoose";

export interface ITrial extends Document {
  id: number;
  title: string;
  description: string;
  condition: string;
  treatment: string;
  phase: string;
  status: string;
  startDate: Date;
  endDate: Date;
  location: string;
  researcherId: number;
}

const TrialSchema: Schema = new Schema(
  {
  id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String },
  condition: { type: String },
  treatment: { type: String },
  phase: { type: String },
  status: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  location: { type: String },
  researcherId: { type: Number, required: true },
},
{
  collection:"trial"
}
);

export const Trial = mongoose.models.Trial || mongoose.model<ITrial>("Trial", TrialSchema);
