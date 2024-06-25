import joi from "joi";
import {NextResponse} from "next/server";
import db from "@/lib/db";

export async function PUT(req){
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const body = await req.json();
    const userSchema = joi.object({
        firstName: joi.string(),
        lastName: joi.string(),
        email: joi.string(),
        role: joi.string(),
        avatar: joi.string(),
        address: joi.string(),
        city: joi.string(),
        state: joi.string(),
        country: joi.string(),
        houseName: joi.string(),
        pin: joi.string(),
        postOffice: joi.string(),
    });
    const validate = userSchema.validate(body);
    if(!validate){
        return NextResponse.json({
            message:"Invalid input"
        },{
            status:202
        })
    }
    try {
        await db.user.update({
            where:{
                id: id
            },
            data: body
        })
        return NextResponse.json({
            message:"User detail updated successfully"
        },{
            status:200
        })
    }catch (e) {
        return NextResponse.json({
            message: e?.message
        },{
            status:500
        })
    }
}