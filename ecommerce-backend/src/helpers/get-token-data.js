import {NextResponse} from "next/server";
import jwt from "jsonwebtoken";
import * as jose from "jose";
import {configs} from "@/config/config";
export const getTokenData = async(req)=>{
    try {
        const token = req.cookies.get("token")?.value || "";
        const secret = new TextEncoder().encode(
            configs.JWT_SECRET,
        )
        const { payload, protectedHeader } = await jose.jwtVerify(token, secret);
        return payload;
    }catch (e){
        throw new Error(e?.message)
    }
}
