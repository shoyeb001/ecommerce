import db from "@/lib/db";
import {NextResponse} from "next/server";

export async function GET(req){
    const { searchParams } = new URL(req.url);
    const category =searchParams.get("category") ? searchParams.get("category").split(',') : [];
    const priceRange = searchParams.get("priceRange") || null;
    const tags = searchParams.get("tags") ? searchParams.get("tags").split(',') : [];
    const sortBy = searchParams.get("sortBy") || "latest";
    const limit =  parseInt(searchParams.get("limit")) || 10;
    let whereClause={};
    if(category.length>0){
        console.log(category)
        whereClause.categoryId = { in: category };
    }
    if(priceRange){
        whereClause.price = {lte:parseInt(priceRange)}
    }
    if(tags.length){
        whereClause.tags={in:tags}
    }
    let orderByClause = [];
    if(sortBy){
        switch (sortBy){
            case "atoz":
                orderByClause.push({name:"asc"});
                break
            case "ztoa":
                orderByClause.push({name:"desc"});
                break
            case "latest":
                orderByClause.push({createdAt:"desc"});
                break;
            case "oldest":
                orderByClause.push({createdAt:"asc"})
                break;
            case "lowtohigh":
                orderByClause.push({price:"asc"});
                break;
            case "hightolow":
                orderByClause.push({price:"desc"});
                break;
        }
    }
    try {
        const products = await db.product.findMany({
            where:whereClause,
            orderBy:orderByClause,
            take: limit
        });
        return NextResponse.json(products,{
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