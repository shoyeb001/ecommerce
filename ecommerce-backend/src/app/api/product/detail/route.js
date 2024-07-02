import {NextResponse} from "next/server";
import db from "@/lib/db";

export async function GET(req){
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");
    try {
        if(!slug){
            return NextResponse.json({
                message:"Invalid Api Request"
            },{
                status: 400
            })
        }

        const product = await db.product.findUnique({
            where:{
                slug:slug
            },
            include:{
                category:{
                    select:{
                        name:true,
                        id:true
                    }
                },
                review:true
            }
        });
        const totalReview = product?.review?.length;
        let avgRating = totalReview > 0
            ? product?.review?.reduce((acc, review) => acc + review.rating, 0) / totalReview
            : 0;
        return NextResponse.json({
            ...product,
            totalReview,
            avgRating
        },{
            status:200
        })
    }catch (e){
        return NextResponse.json({
            message:e?.message
        },{
            status:500
        })
    }
}