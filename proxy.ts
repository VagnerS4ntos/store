import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED_ROUTES = ["/", "/saldo"];

export function proxy(request: NextRequest) {
  const session = request.cookies.get("session")?.value;

  const { pathname } = request.nextUrl;

  const isProtected = PROTECTED_ROUTES.includes(pathname);

  if (!session && isProtected) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (session && pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"],
};
