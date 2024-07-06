import {NextResponse} from "next/server";
import {getTokenData} from "@/helpers/get-token-data";
import db from "@/lib/db";

export async function POST(req){
    try {
        const {id} = await getTokenData(req);
        const { searchParams } = new URL(req.url);
        const orderId = searchParams.get("orderId");
        if(!orderId){
            return NextResponse.json({
                message:"Invalid Api Call"
            },{
                status:406
            })
        }
        const body = await req.json();
        const items = await db.orderItems.createMany({
            data:body
        });
        await db.cart.deleteMany({
            where:{
                userId: id
            }
        })
        return NextResponse.json(items,{
            status:200
        })
    }catch (e) {
        return NextResponse.json({
            message: e?.message
        },{
            status:500
        })
    }
}