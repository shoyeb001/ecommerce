import Razorpay from "razorpay";
import {NextResponse} from "next/server";
import {randomUUID} from "node:crypto";
export async function GET(req){
    try {
        const { searchParams } = new URL(req.url);
        const amount = searchParams.get("amount")
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });

        const options = {
            amount: amount * 100,
            currency: "INR",
            receipt: randomUUID(),
        };

        const order = await instance.orders.create(options);

        if (!order){
            return NextResponse.json({
                message:"Something went wrong"
            },{
                status:500
            })
        }

        return NextResponse.json(order,{
            status:200
        })
    } catch (error) {
        return NextResponse.json(error,{
            status:500
        })
    }
}