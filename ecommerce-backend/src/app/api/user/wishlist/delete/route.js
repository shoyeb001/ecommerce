import {NextResponse} from "next/server";
import {getTokenData} from "@/helpers/get-token-data";
import db from "@/lib/db";

export async function DELETE(req){
    try {
        const {id} = await getTokenData(req);
        const { searchParams } = new URL(req.url);
        const wishlistId = searchParams.get("wishlistId");
        if(!wishlistId){
            return NextResponse.json({
                message:"Invalid Api Call"
            },{
                status:406
            })
        }
        await db.wishlist.delete({
            where:{
                userId:id,
                id:wishlistId
            }
        });
        return NextResponse.json({
            message:"Successfully deleted wishlist",
        },{
            status:200
        })
    }catch (e) {
        return NextResponse.json({
            message:e?.messages
        },{
            status:500
        })
    }
}