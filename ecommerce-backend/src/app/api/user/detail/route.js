import {NextResponse} from "next/server";
import {getTokenData} from "@/helpers/get-token-data";
import db from "@/lib/db";

export async function GET(req){
    try {
        const {id, role} = await getTokenData(req);
        if(role!=="USER" && role!=="ADMIN"){
            return NextResponse.json({
                message:"User not authorized"
            },{
                status:401
            })
        }
        const user = await db.user.findUnique({
            where:{
                id:id,
                role: role
            },
            select:{
                firstName: true,
                lastName: true,
                email: true,
                password: false,
                avatar: true,
                phone: true,
                address: true,
                city: true,
                state: true,
                country: true,
                houseName: true,
                pin: true,
                postOffice: true,
                role:true,
            }
        })
        return NextResponse.json(user,{
            status:200
        })

    }catch (e) {
        return NextResponse.json({
            message:e?.message
        })
    }
}