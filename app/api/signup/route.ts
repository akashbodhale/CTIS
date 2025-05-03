import { connectMongoDB }  from '@/dbConfig/dbConfig';
import Research from "@/models/Researcher";
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';


connectMongoDB();


export async function POST(request:NextRequest){
    try
    {
        const reqBody=await request.json();
        const{username,email,password}=reqBody

        console.log(reqBody);

        const user= await Research.findOne({email})

        if(user)
        {
            return NextResponse.json({error:"User already exists"},{status: 400})
        }

        const salt= await bcrypt.genSalt(10);
        const hasedPassword=await bcrypt.hash(password,salt);

        const newUser= new Research({
            username,
            email,
            password:hasedPassword,
            isVerified:false
        }) 
        const savedUser=await newUser.save();
        console.log(savedUser);

        return NextResponse.json({message:"Researcher created Sucessfully",sucess:true, savedUser})
    }
    catch(error:unknown)
    {
       return NextResponse.json({error:error},{status:500}) 
    }
}