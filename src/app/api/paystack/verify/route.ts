import { environment } from "@/src/app/environment/environment";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    console.log("api called");
  const body = await req.json();
  const { reference, plan } = body;

  const res = await fetch(
    `https://api.paystack.co/transaction/verify/${reference}`,
    {
      headers: {
        Authorization: `Bearer ${environment.paystack.secretKey}`,
        "Content-Type": "application/json",
      },
    },
  );

  const data = await res.json();

  if (data.data.status === "success") {
    // TODO: Activate subscription here
    // update user plan in database

    return NextResponse.json({
      success: true,
      plan,
    });
  }

  return NextResponse.json({
    success: false,
  });
}
