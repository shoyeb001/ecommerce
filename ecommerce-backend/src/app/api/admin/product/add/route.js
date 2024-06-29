import joi from "joi";
import {NextResponse} from "next/server";
import db from "@/lib/db";

export async function POST(req){
    const body = await req.json();
    const productSchema = joi.object({
        title: joi.string().min(10).max(200).required(),
        thumbnail: joi.string().required(),
        image1: joi.string().required(),
        image2: joi.string().required(),
        image3: joi.string().required(),
        price: joi.number().required(),
        categoryId: joi.string().required(),
        description: joi.string().min(40).required(),
        slug: joi.string().required(),
        tags: joi.string().required(),
        isFeatures: joi.boolean(),
        isActive: joi.boolean(),
        longDesc: joi.string().required(),
        quantity: joi.number().required(),
        discountPrice: joi.number(),
    });
    const {error} = productSchema.validate(body);
    if(error){
        return NextResponse.json({
            message: error?.message
        },{
            status:202
        })
    }
    try {
        await db.product.create({
            data: body
        });
        return NextResponse.json({
            message:"Product added successfully"
        },{
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