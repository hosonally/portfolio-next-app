import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const person = searchParams.get("person");
  if (!person) {
    return NextResponse.json({
      message: "I am the world you always say hello to!",
    });
  } else {
    return NextResponse.json({ message: `Hi, I am ${person}` });
  }
}
