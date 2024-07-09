import joi from "joi";
import {NextResponse} from "next/server";
import db from "@/lib/db";
import {getTokenData} from "@/helpers/get-token-data";

export async function PUT(req){
    const {id} = await getTokenData(req);
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
        pin: joi.string().min(6).max(6),
        postOffice: joi.string(),
        phone: joi.string().min(10).max(10)
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
        const userData = await db.user.update({
            where:{
                id: id
            },
            data: body,
            select:{
                firstName: true,
                lastName: true,
                email: true,
                password: false,
                avatar: true,
                phone: true,
                address: true,
                city: true,
                state: true,
                country: true,
                houseName: true,
                pin: true,
                postOffice: true,
                role:true,
            }
        })
        return NextResponse.json(userData,{
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