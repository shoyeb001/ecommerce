import {NextResponse} from "next/server";
import db from "@/lib/db";

export async function GET(){
    try {
        const categories = await db.category.findMany();
        return NextResponse.json(categories,{
            status:200
        })
    }catch (e){
        return NextResponse.json({
            message: e?.message
        },{
            status: 500
        })
    }
}