import { pool } from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
    const id = await req.url.split('/')[5]
    try {
        await pool.query(`DELETE FROM notices WHERE id= $1`, [id])
        return NextResponse.json({status: 'OK'})
    } catch (error) {
        return NextResponse.json(error)
    }
}