import {NextResponse} from "next/server";
import db from "@/lib/db";
export async function GET(req){
    try {
        const users = await db.user.findMany({
            where:{
                role: "USER"
            }, select:{
                firstName:true,
                lastName:true,
                email:true,
                avatar:true,
                country:true,
                state:true
            }
        });
        return NextResponse.json(users);
    }catch (e){
        return NextResponse.json({
            message:e?.message
        },{
            status:500
        })
    }
}