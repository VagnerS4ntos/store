import { cookies } from "next/headers";
import { adminAuth } from "../_Firebase/admin";

export async function getCurrentUser() {
  const session = (await cookies()).get("session");

  if (!session) return null;

  try {
    return await adminAuth.verifySessionCookie(session.value, true);
  } catch {
    return null;
  }
}
