import {NextResponse} from "next/server";
import db from "@/lib/db";

export async function GET(req){
    try {
        const { searchParams } = new URL(req.url);
        const status = searchParams.get("status");
        if(status){
            const orders = await db.order.findMany({
                where:{
                    orderStatus: status
                },
                include:{
                    OrderItems:{
                        include:{
                            product:true
                        }
                    }
                }
            })
            return NextResponse.json(orders,{
                status:200
            })
        }
        const orders = await db.order.findMany({
            include:{
                OrderItems:{
                    include:{
                        product:true
                    }
                }
            }
        });
        return NextResponse.json(orders,{
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