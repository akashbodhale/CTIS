import { connectMongoDB }  from '@/dbConfig/dbConfig';
import Research from "@/models/Researcher";
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import jwt from "jsonwebtoken";




export async function POST(request:NextRequest){

    try
    {
        await connectMongoDB();
        const reqBody=await request.json();
        const{username,password}=reqBody;

        console.log(reqBody);

        //check if user exists
        const user=await Research.findOne({username});

        if(!user)
        {
            return NextResponse.json({error:"User does not exists!!!"},{status: 400})
        }
        //check if the Password is correct
        const validPassword=await bcrypt.compare(password,user.password)
        if(!validPassword){
            return NextResponse.json({error:"Password is Invalid!!!"},{status: 400})
        }

        // create token object
        const tokenData={
            id: user._id,
            username:user.username,
            email:user.email

        }

        //create token
        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:"1d"})

        const response=NextResponse.json({message: "Login Sucessful", success:true})
        response.cookies.set("token",token,{httpOnly:true})
        return response
    }
    catch(error: unknown)
    {
        const errMsg = error instanceof Error ? error.message : "Internal server error";
        return NextResponse.json({ error: errMsg }, { status: 500 });
    }

}