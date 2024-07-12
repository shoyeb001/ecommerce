
import {NextResponse} from "next/server";
import {configs} from "@/config/config";
import * as jose from "jose"
import {verifyUserAction} from "@/app/actions/verifyUser.action";
import {getTokenData} from "@/helpers/get-token-data";
export async function middleware(req){
    req.headers.set('Access-Control-Allow-Credentials', 'true');
    req.headers.set('Access-Control-Allow-Origin', 'https://grosary-ecomerce.vercel.app');
    req.headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    req.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return new NextResponse(null, { status: 200 });
    }

    const token = req.cookies.get('token')?.value || req.headers.get('Authorization');
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
                req.nextUrl.pathname.startsWith("/api/admin") &&
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
    matcher:["/api/user/:path*", "/api/admin/:path*"]
}