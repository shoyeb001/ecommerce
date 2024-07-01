import {NextResponse} from "next/server";
import db from "@/lib/db";

export async function GET(){
    try {
        const products = await db.product.findMany({
            where:{
                isFeatures: true
            },
            include:{
                category:{
                    select:{
                        slug: true,
                        name: true
                    }
                },
            }
        });
        return NextResponse.json(products,{
            status:200
        });
    }catch (e) {
        return NextResponse.json({
            message: e?.message
        },{
            status:500
        })
    }
}