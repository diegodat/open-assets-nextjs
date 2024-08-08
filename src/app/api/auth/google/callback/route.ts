import { HttpClient } from "@/packages/axios/httpClient";
import { NextResponse } from "next/server";
import * as jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { JwtCookieToken } from "@/packages/constants/auth";

export async function POST(request: Request) {
  try {
    const text = await request.text();
    const params = new URLSearchParams(text);
    const credential = params.get("credential");
    if (!credential) {
      return NextResponse.json({
        message: "Invalid credential",
      });
    }

    const response = await HttpClient.post<any>("api/google/login", {
      credential,
    });
    const token = response.data.data.token;
    const decodedToken = jwt.decode(token);
    if (!decodedToken || typeof decodedToken === "string") {
      return NextResponse.json({
        message: "Invalid token",
      });
    }

    cookies().set({
      name: JwtCookieToken,
      value: "token",
      httpOnly: true,
      sameSite: "lax",
      maxAge: ((decodedToken.exp ?? 0) - (decodedToken.iat ?? 0)) * 1000,
      domain: process.env.COOKIE_DOMAIN || undefined,
    });

    return NextResponse.json({ success: false }, { status: 401 });
    // return NextResponse.redirect(new URL("/timeline", request.url));
  } catch (error) {
    // return NextResponse.redirect(new URL("/auth/login", request.url));
    return NextResponse.json(
      { success: false, error: "Sign-in failed" },
      { status: 500 },
    );
  }
}
