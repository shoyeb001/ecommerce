import {NextResponse} from "next/server";
import joi from "joi";
import {getTokenData} from "@/helpers/get-token-data";
import db from "@/lib/db";

export async function PUT(req){
    try {
        const {id} = await getTokenData(req);
        const cartUpdateSchema = joi.object({
            quantity: joi.number().required(),
            productId: joi.string().required(),
            id: joi.string().required()
        });
        const body = await req.json();
        const {error} = cartUpdateSchema.validate(body);
        if(error){
            return NextResponse.json({
                message:"Not valid data inputs"
            },{
                status:202
            });
        }
        const newData = await db.cart.update({
            where:{
                productId: body.productId,
                userId: id,
                id: body.id
            },
            data:{
                quantity: body.quantity
            },
            include:{
                product:{
                    select:{
                        id: true,
                        title:true,
                        price:true,
                        discountPrice:true,
                        thumbnail:true,
                        description:true
                    }
                }
            }
        })
        return NextResponse.json(newData,{
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