import db from "@/lib/db";
import joi from "joi";
import {NextResponse} from "next/server";
import bcrypt from "bcrypt";
import jwtService from "@/lib/jwtService";
import * as jose from 'jose'
import {SignJWT} from "jose";
import {configs} from "@/config/config";

export async function POST(req){
    const loginSchema = joi.object({
        email: joi.string().required(),
        password: joi.string().min(6).required()
    });
    const reqBody = await req.json();
    const {error} = loginSchema.validate(reqBody);
    if(error){
        return NextResponse.json({
            message: "Invalid input details"
        },{
            status: 202
        })
    }
    const {email, password} = reqBody;
    try {
        const user = await db.user.findUnique({
            where:{
                email:email
            }
        })
        if(!user){
            return NextResponse.json({
                message:"User does not found"
            },{
                status: 204
            })
        }

        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) {
           return NextResponse.json({
               message:"Unauthorized user"
           },{
               status: 401
           })
        }
        const secret = new TextEncoder().encode(
            configs.JWT_SECRET,
        )

        const access_token =   await new SignJWT({
            id: user?.id,
            role: user?.role,
        }) // details to  encode in the token
            .setProtectedHeader({ alg: 'HS256' }) // algorithm
            .sign(secret);


        const response =  NextResponse.json({
            access_token: access_token,
            name: user?.name,
            role: user?.role
        },{
            status: 200
        })

        response.cookies.set("token", access_token);
        return response;

    }catch (e) {
        return NextResponse.json({
            message: e.message
        },{
            status: 500
        })
    }
}