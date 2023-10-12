import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    const hashedPassword = await hash(password, 10);

    const response = await sql`
        insert into users (email, password)
        values (${email}, ${hashedPassword})
    `;
  } catch (e) {
    return NextResponse.json({ message: "failed to signup" });
  }

  return NextResponse.json({ message: "success" });
}
