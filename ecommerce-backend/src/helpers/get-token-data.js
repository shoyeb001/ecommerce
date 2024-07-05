import {NextResponse} from "next/server";
import jwt from "jsonwebtoken";
import * as jose from "jose";
import {configs} from "@/config/config";
export const getTokenData = async(req)=>{
    try {
        const token = req.cookies.get("token")?.value || req.headers.get('Authorization').split(" ")[1];
        console.log(token);
        const secret = new TextEncoder().encode(
            configs.JWT_SECRET,
        )
        const { payload } = await jose.jwtVerify(token, secret);
        console.log(payload)
        return payload;
    }catch (e){
        throw new Error(e?.message)
    }
}
