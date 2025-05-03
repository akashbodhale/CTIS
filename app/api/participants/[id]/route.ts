import { connectMongoDB } from "@/dbConfig/dbConfig";
import { Participant } from "@/models/Participant";
import { NextRequest, NextResponse } from "next/server";


export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  await connectMongoDB();

  const participants = await Participant.find({ trialId: Number(id) });

  if (participants.length === 0) {
    return new NextResponse('No participants found.', { status: 404 });
  }

  return NextResponse.json(participants, { status: 200 });
}


export async function PUT(request: NextRequest,{ params }: { params: Promise<{ id: string }>})
{
    const { id } = await params;
    await connectMongoDB();
    // const trials = await Participant.findOne({id});
    const body= await request.json();
    const updatedparticipant = await Participant.findOneAndUpdate(
      { id: Number(id) },   
      { $set: body },        
      { new: true }          
    );

    if( updatedparticipant != null){

        return new Response(JSON.stringify(updatedparticipant), {
            status: 201,
            headers: {
              'Content-Type': 'application/json',
            }
          });
    }

}

// export async function DELETE(request: NextRequest,{params}:{params:{id:number}})
// {
//     const message: string ='This is Expensive operation at this moment can\'t do it in this feature';
//     return new Response(message,{status:200})
// }