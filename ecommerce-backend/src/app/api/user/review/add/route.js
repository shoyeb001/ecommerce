import {NextResponse} from "next/server";
import joi from "joi";
import {getTokenData} from "@/helpers/get-token-data";
import db from "@/lib/db";

export async function POST(req){
    const {id} = await getTokenData(req);
    try {
        const reviewSchema = joi.object({
            description: joi.string().required(),
            rating: joi.number().required(),
            productId: joi.string().required()
        })
        const body = await req.json();
        const {error} = reviewSchema.validate(body);
        if(error){
            return NextResponse.json({
                message:"Invalid data input"
            });
        }
        const {description, rating, productId} = body;
        const isExist = await db.review.findFirst({
            where:{
                userId: id,
                productId: productId
            }
        });
        if(isExist){
            return NextResponse.json({
                message:"Review already exists"
            },{
                status:406
            })
        }
        const newReview = await db.review.create({
            data:{
                productId,
                userId:id,
                description,
                rating
            },
            include:{
                user:true
            }
        })
        return NextResponse.json(newReview,{
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