import { cookies } from "next/headers";
import { adminAuth } from "@/app/_Firebase/admin";
import { NextResponse } from "next/server";

export async function POST() {
  const session = (await cookies()).get("session");

  if (session) {
    try {
      const decoded = await adminAuth.verifySessionCookie(session.value, true);
      await adminAuth.revokeRefreshTokens(decoded.sub);
    } catch {
      // Ignorar erros — cookie pode estar inválido/expirado
    }
  }

  (await cookies()).delete("session");
  return NextResponse.json({ ok: true });
}
