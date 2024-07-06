import {NextResponse} from "next/server";
import {getTokenData} from "@/helpers/get-token-data";
import db from "@/lib/db";


export async function GET(req){
    try {
        const {id} = await getTokenData(req);
        const cart = await db.cart.findMany({
            where:{
                userId:id
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
        });
        return NextResponse.json(cart,{
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