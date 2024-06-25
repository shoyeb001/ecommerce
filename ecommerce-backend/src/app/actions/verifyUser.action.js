"use server"
import db from "@/lib/db";
export async function verifyUserAction({payload}){
    try {
        const users = await db.user.findUnique({
            where:{
                id: payload?.id,
                role: payload?.role
            },
            select:{
                id: true,
                role: true
            }
        });
        return users;
    }catch (e) {
        console.log(e?.message)
    }
}