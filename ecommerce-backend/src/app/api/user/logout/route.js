import {NextResponse} from "next/server";

export async function GET(req){
    try {
        req.cookies.set("token","");
        return NextResponse.json({
            message:"User logged out"
        },{
            status:200
        });

    }catch (e) {
        return NextResponse.json({
            message:e?.error
        })
    }
}