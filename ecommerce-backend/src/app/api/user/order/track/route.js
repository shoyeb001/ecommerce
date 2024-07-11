import {NextResponse} from "next/server";
import {getTokenData} from "@/helpers/get-token-data";
import db from "@/lib/db";
import e from "jsonwebtoken/lib/JsonWebTokenError";

export async function GET(req){
    try {
        const {id} = await getTokenData(req);
        const { searchParams } = new URL(req.url);
        const orderId = searchParams.get("orderId");
        const status = await db.order.findFirst({
            where:{
                userId: id,
                orderId: orderId
            },
            select:{
                orderStatus: true,
                orderId:true,
                firstName:true,
                lastName:true,
                createdAt:true
            }
        });
        if(!status){
            return NextResponse.json({
                message:"Order not found"
            },{
                status:406
            })
        }
        return NextResponse.json(status, {
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