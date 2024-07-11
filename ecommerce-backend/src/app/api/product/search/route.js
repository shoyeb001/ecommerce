import {NextResponse} from "next/server";
import db from "@/lib/db";

export async function GET(req){
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title")
    console.log(title);
    try {
        const product = await db.product.findMany({
            where:{
                title:{
                    contains: title,
                    mode: "insensitive"
                }
            },
            take:6
        });
        return NextResponse.json(product,{
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