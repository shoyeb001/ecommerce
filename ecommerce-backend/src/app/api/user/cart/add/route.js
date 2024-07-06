import {NextResponse} from "next/server";
import joi from "joi";
import db from "@/lib/db";
import {getTokenData} from "@/helpers/get-token-data";

export async function POST(req){
    try {
        const {id} = await getTokenData(req);
        const cartSchema = joi.object({
            productId:joi.string().required(),
            quantity: joi.number().required(),
        });
        const body= await req.json();
        const {error} = await cartSchema.validate(body);
        if(error){
            return NextResponse.json({
                message: error
            },{
                status:202
            })
        }
        const {productId, quantity} = body;
        const isExist = await db.cart.findFirst({
            where:{
                userId:id,
                productId: productId
            }
        });
        if(isExist){
            return NextResponse.json({
                message:"Product already in cart"
            },{
                status: 406
            })
        }
        const cartItem = await db.cart.create({
            data:{
                userId: id,
                productId: productId,
                quantity: quantity
            },
            include:{
                product:true
            }
        });
        return NextResponse.json(cartItem,{
            status:200
        });
    }catch (e) {
        return NextResponse.json({
            message:e?.message
        },{
            status:500
        })
    }
}