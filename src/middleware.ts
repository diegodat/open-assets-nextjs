import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { JwtCookieToken } from "@/packages/constants/auth";
import { authRoutes, privateRoutes } from "@/packages/constants/routes";

export function middleware(req: NextRequest) {
  const { nextUrl } = req;
  if (nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/timeline", req.url));
  }

  const cookie = req.cookies.get(JwtCookieToken);
  const isLoggedIn = !!cookie;
  const isPrivateRoute = privateRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isPrivateRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }
  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/timeline", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
