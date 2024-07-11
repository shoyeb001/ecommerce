import {NextResponse} from "next/server";
import {getTokenData} from "@/helpers/get-token-data";
import joi from "joi";
import db from "@/lib/db";

export async function POST(req){
    try {
        const {id} = await getTokenData(req);
        const {productId} = await req.json()
        if(!productId){
            return NextResponse.json({
                message:"Invalid Api Call"
            },{
                status:406
            })
        }
        const isExists = await db.wishlist.findFirst({
            where:{
                userId:id,
                productId:productId
            }
        })
        if(isExists){
            return NextResponse.json({
                message:"Product already in wishlist"
            },{
                status:406
            })
        }
         const wishlist = await db.wishlist.create({
            data:{
                userId: id,
                productId: productId,
            },
        })
        return NextResponse.json(wishlist,{
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