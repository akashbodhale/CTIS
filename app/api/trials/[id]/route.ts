import { connectMongoDB } from "@/dbConfig/dbConfig";
import { Trial } from "@/models/Trial";
import { NextRequest, NextResponse } from "next/server";

// type TD={
//     title: { type: String, required: true },
//     description: { type: String },
//     condition: { type: String },
//     treatment: { type: String },
//     phase: { type: String },
//     status: { type: String },
//     startDate: { type: Date },
//     endDate: { type: Date },
//     location: { type: String },
//   }

export async function GET(request: NextRequest,{ params }: { params: Promise<{ id: string }>}) {
  const { id } = await params;
  await connectMongoDB();
  const trials = await Trial.findOne({ id: Number(id) });

  if(!trials){
     return new Response('Product not found!!',{status:200})
    }
  return NextResponse.json(trials, { status: 200 });
}

// export async function POST(request: NextRequest) {
//   await connectMongoDB(); 

//   try {
//     const body = await request.json(); 

//     const newTrial = await Trial.create(body); 

//     return new Response(JSON.stringify(newTrial), {
//       status: 201,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error(error);
//     return new Response(JSON.stringify({ error: "Failed to create trial" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }


export async function PUT(request: NextRequest,{ params }: { params: Promise<{ id: string }>})
{
    const { id } = await params;
    await connectMongoDB();
    //const trials = await Trial.findOne({id});
    const body= await request.json();
    const updatedTrial = await Trial.findOneAndUpdate(
      { id: Number(id) },   
      { $set: body },        
      { new: true }          
    );

    if( updatedTrial !=null){

        return new Response(JSON.stringify(updatedTrial), {
            status: 201,
            headers: {
              'Content-Type': 'application/json',
            }
          });
    }
}

// export async function DELETE(request: NextRequest,{params}:{params:{id:string}})
// {
//     const message: string ='This is Expensive operation at this moment can\'t do it in this feature';
//     return new Response(message,{status:200})
// }







