import {NextResponse} from "next/server";
import db from "@/lib/db";

export async function GET(req){
    try {
        const { searchParams } = new URL(req.url);
        const status = searchParams.get("status");
        if(status){
            const orders = await db.order.findMany({
                where:{
                    status: status
                }
            })
            return NextResponse.json(orders,{
                status:200
            })
        }
        const orders = await db.order.findMany();
        return NextResponse.json(orders,{
            status:true
        })
    }catch (e) {
        return NextResponse.json({
            message:e?.message
        },{
            status:500
        })
    }
}