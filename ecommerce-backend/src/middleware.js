
import {NextResponse} from "next/server";
import {configs} from "@/config/config";
import * as jose from "jose"
import {verifyUserAction} from "@/app/actions/verifyUser.action";
import {getTokenData} from "@/helpers/get-token-data";
export async function middleware(req){
    const token = req.cookies.get('token')?.value;
    if(!token){
        return NextResponse.json({
            message:"User is not authorized"
        },{
            status: 401
        })
    }

    try {
        const payload = await getTokenData(req);
            if(!payload){
                return NextResponse.json({
                    message:"User not found"
                },{
                    status:401
                })
            }
            if (
                req.nextUrl.pathname.startsWith("/admin") &&
                payload?.role !== "ADMIN"
            ) {
               return NextResponse.json({
                   message:"Unauthorized user"
               })
            }
            return NextResponse.next()
    } catch (err) {
        return NextResponse.json({
            message:err?.message
        },{
            status:500
        });
    }
}

export const config={
    matcher:["/api/user/:path*"]
}