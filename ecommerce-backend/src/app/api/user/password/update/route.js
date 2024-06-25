import db from "@/lib/db";
import {NextResponse} from "next/server";
import {middleware} from "@/middleware";
import {getTokenData} from "@/helpers/get-token-data";
import joi from "joi";
import bcrypt from "bcrypt";
export async function PUT(req){
    const {id} = await getTokenData(req);
    const body = await req.json();
    const passwordSchema = joi.object({
        oldPassword: joi.string().min(6),
        newPassword: joi.string().min(6)
    });

    const {error} = passwordSchema.validate(body);
    if(error){
        return NextResponse.json({
            message:"Invalid input data"
        },{
            status:202
        })
    }
    const {oldPassword,newPassword} = body;
    try {
        const user  = await db.user.findUnique({
            where:{
                id: id
            },
            select:{
                password:true
            }
        })
        const matchPassword = await bcrypt.compare(oldPassword, user?.password);
        if (!matchPassword) {
            return NextResponse.json({
                message:"Unauthorized user"
            },{
                status: 401
            })
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await db.user.update({
            where:{
                id: id
            },
            data:{
                password: hashedPassword
            }
        })
    }catch (e) {
        return NextResponse.json({
            message:e?.message
        },{
            status:500
        })
    }

}