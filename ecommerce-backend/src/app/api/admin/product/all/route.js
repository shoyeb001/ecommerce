import db from "@/lib/db";
import {NextResponse} from "next/server";

export async function GET(){
    try {
        const products = await db.product.findMany({
            include:{
                category:true
            }
        });
        console.log(products)
        return NextResponse.json(products,{
            status:200
        })
    }catch (e) {
        return NextResponse.jsom({
            message: e?.message
        },{
            status:500
        })
    }
}