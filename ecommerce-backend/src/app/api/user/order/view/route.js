import {NextResponse} from "next/server";
import {getTokenData} from "@/helpers/get-token-data";
import db from "@/lib/db";

export async function GET(req){
    try {
        const {id} = await getTokenData(req);
        const orders = await db.order.findMany({
            where:{
                userId:id
            },
            include:{
                OrderItems:{
                    include:{
                        product: true
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