import joi from "joi";
import {NextResponse} from "next/server";
import db from "@/lib/db";
export async function POST(req){
    const body = await req.json();
    const catSchema = joi.object({
      image: joi.string().required(),
        name: joi.string().min(4).required(),
        slug:joi.string().min(4).required()
    });
    const {error} = catSchema.validate(body);
    if(error){
        return NextResponse.json({
            message: error?.message
        },{
            status:202
        })
    }
    try {
        await db.category.create({
            data: body
        });
        return NextResponse.json({
            message:"Category added successfully"
        },{
            status:200
        })
    }catch (e) {
        return NextResponse.json({
            message:e?.message
        },{
            status:500
        })
    }
}