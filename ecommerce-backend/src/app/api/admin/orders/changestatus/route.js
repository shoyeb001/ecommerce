import {NextResponse} from "next/server";
import db from "@/lib/db";

export async function PUT(req){
    try {
        const { searchParams } = new URL(req.url)
        const orderId = searchParams.get("orderId");
        if(!orderId){
            return NextResponse.json({
                message:"Invalid Api Call"
            },{
                status:406
            })
        }
        const {status} = await req.json();
        const updatedOrder = await db.order.update({
            where:{
                orderId:orderId
            },
            data:{
                orderStatus: status
            }
        });
        return NextResponse.json(updatedOrder,{
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