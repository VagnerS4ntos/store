import { NextResponse } from "next/server";
import { adminAuth } from "@/app/_Firebase/admin";
import { cookies } from "next/headers";

const TOKEN_DURATION = 60 * 60 * 24 * 5 * 1000; //5 dias

export async function POST(req: Request) {
  try {
    const { idToken } = await req.json();

    // Verifica assinatura e integridade
    await adminAuth.verifyIdToken(idToken);

    // Cria cookie de sessão Firebase
    const sessionCookie = await adminAuth.createSessionCookie(idToken, {
      expiresIn: TOKEN_DURATION,
    });

    (await cookies()).set("session", sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: TOKEN_DURATION / 1000,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
