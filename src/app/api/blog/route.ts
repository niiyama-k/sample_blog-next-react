import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function main() {
  try{
    await prisma.$connect();
  }catch(err){
    return Error("DB接続に失敗しました")
  }finally{

  }
}

//ブログの全記事取得API
export const GET =async (req: Request, res: NextResponse) => {
  try{
    await main();
    const posts = await prisma.post.findMany();
    return NextResponse.json({massage: "Success", posts}, {status: 200});
  }catch(err){
    return NextResponse.json({ message: "Error", err}, {status: 500})
  }finally{
    await prisma.$disconnect();
  }
}