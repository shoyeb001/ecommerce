import joi from "joi";
import {NextResponse} from "next/server";
import db from "@/lib/db";
import bcrypt from "bcrypt"
export async function POST(req){
    const registerSchema = joi.object({
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        email: joi.string().email().required(),
        role: joi.string(),
        password: joi.string().min(6).required(),
    })
    const bodyReq = await req.json();
    const {error} = registerSchema.validate(bodyReq);
    if(error){
        return NextResponse.json({
            message: "Invalid input data"
        },{
            status: 202
        })
    }
    const {email, password, firstName, lastName, role} = bodyReq;
    try {
        const isExits = await db.user.findFirst({
            where:{
                email:email
            },
            select:{
                id: true
            }
        })
        if (isExits?.length){
            return NextResponse.json({
                message:"User already exists"
            },{
                status: 403
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        await db.user.create({
            data:{
                firstName: firstName,
                lastName,
                role: role,
                password: hashedPassword,
                email
            }
        })
       
        return NextResponse.json({
            status: 200,
            message:"Registered Successfully"
        })
    }catch (e){
        return NextResponse.json({
            status: 500,
            message:e?.message
        })
    }
}