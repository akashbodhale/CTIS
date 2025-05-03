import { connectMongoDB } from "@/dbConfig/dbConfig";
import { Trial } from "@/models/Trial";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const trials = await Trial.find({});
  return NextResponse.json(trials, { status: 200 });

}

export async function POST(request: NextRequest) {
  await connectMongoDB(); 
  
  try {
    const body = await request.json(); 

    const newTrial = await Trial.create(body); 

    return new Response(JSON.stringify(newTrial), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to create trial" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}