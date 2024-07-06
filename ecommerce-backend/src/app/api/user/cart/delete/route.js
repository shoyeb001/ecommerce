import {NextResponse} from "next/server";
import {getTokenData} from "@/helpers/get-token-data";
import db from "@/lib/db";

export async function DELETE(req){
    try {
        const {id} = await getTokenData(req);
        const { searchParams } = new URL(req.url);
        const cartId = searchParams.get("cartId");
        if(!cartId){
            return NextResponse.json({
                message:"There is some problem"
            },{
                status:406
            })
        };
        await db.cart.delete({
            where:{
                id:cartId,
                userId:id
            }
        });
        return NextResponse.json({
            message:"Item deleted from Cart"
        },{
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