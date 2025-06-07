import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'I am the world you always say hello to!' });
}

