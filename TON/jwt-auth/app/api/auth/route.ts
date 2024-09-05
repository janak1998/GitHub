import { validateTelegramWebAppData } from "@/utils/telegramAuth";
import { NextResponse } from "next/server";

export async function POST(request: Request){
  const { initData} = await request.json();

  const validationResult = validateTelegramWebAppData(initData);


  if(validationResult.validatedData){
    console.log('validation result: ',validationResult)
    const user = {telegramId: validationResult.user.id}
  }else {
    return NextResponse.json({ message: validationResult.message}, { status:401})
  }
}