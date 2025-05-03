import mongoose from "mongoose";

const ResearcherSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, "Please provide a username"],
    },
    email:{
        type:String,
        required:[true,"Please provide a email"]
    },
    password:{
        type:String,
        required:[true,"Please provide a password"]
    },
    isVerified:{
        type: Boolean,
        required:true
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifiedToken:String,
    verifiedTokenExpiry:Date,
})

export const Research = mongoose.models.Researcher || mongoose.model("Researcher", ResearcherSchema);

export default Research;

