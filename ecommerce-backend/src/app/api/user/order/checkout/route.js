import {NextResponse} from "next/server";
import {getTokenData} from "@/helpers/get-token-data";
import joi from "joi";
import db from "@/lib/db";
import {OrderStatus} from "@prisma/client";

export async function POST(req){
    try {
        const {id} = await getTokenData(req);
        const checkoutSchema = await joi.object({
            firstName: joi.string().required(),
            lastName: joi.string().required(),
            address:joi.string().required(),
            city:joi.string().required(),
            state: joi.string().required(),
            country: joi.string().required(),
            houseName: joi.string().required(),
            pin: joi.string().required(),
            postOffice: joi.string().required(),
            totalPrice: joi.number().required(),
            paymentMethod: joi.string().required(),
            paymentId:joi.string(),
            paymentStatus: joi.string(),
            orderStatus: joi.string(),
            gstPrice: joi.number().required(),
        });
        const body = await req.json();
        console.log(body)
        const {error} = checkoutSchema.validate(body);
        if(error){
            return NextResponse.json({
                message:"Invalid input data"
            },{
                status:202
            })
        }
        const {firstName, lastName, address, city, state, country, gstPrice,  houseName, pin, postOffice, totalPrice, paymentMethod, paymentId, paymentStatus, orderStatus} = body;
        const order = await db.order.create({
            data:{
                firstName,
                lastName,
                address,
                city,
                state,
                country,
                houseName,
                pin,
                postOffice,
                totalPrice: parseFloat(totalPrice),
                paymentMethod,
                paymentId: paymentId || "",
                paymentStatus,
                gstPrice: parseFloat(gstPrice),
                orderStatus: OrderStatus.ORDERED,
                userId:id
            }
        });
        return  NextResponse.json(order,{
            status:200
        })
    }catch (e){
        return NextResponse.json({
            message:e?.message
        },{
            status:500
        })
    }
}