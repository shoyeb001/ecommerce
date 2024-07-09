import {NextResponse} from "next/server";
import {getTokenData} from "@/helpers/get-token-data";
import db from "@/lib/db";

export async function GET(req){
    try {
        const id = await getTokenData(req)
        const { searchParams } = new URL(req.url);
        const orderId = searchParams.get("orderId");
        if(!orderId){
            return NextResponse.json({
                message:"Invalid Api Call"
            },{
                status:406
            })
        }
        const order = await db.order.findUnique({
            where:{
                id:orderId,
                userId: id,
            },
            include:{
                OrderItems:{
                    include:{
                        product:true
                    }
                }
            }
        })
        return NextResponse.json(order,{
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