import mongoose, { Schema, Document } from "mongoose";

export interface IParticipant extends Document {
    id: number
    name: string
    dob:string
    gender:string
    contact: string
    medicalHistory:string
    trialId:number
}

const ParticipantSchema: Schema=new Schema(
    {
        id:{type:Number,required:true},
        name: { type: String, required: true },
        dob: { type: String, required: true },
        gender: { type: String, required: true },
        contact: { type: String, required: true },
        medicalHistory:{ type: String, required: true },
        trialId: { type: Number, required: true }
    }
);

export const Participant = mongoose.models.Participant || mongoose.model<IParticipant>("Participant", ParticipantSchema);