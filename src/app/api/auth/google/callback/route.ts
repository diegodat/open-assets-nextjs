import { HttpClient } from "@/packages/axios/httpClient";
import { NextResponse } from "next/server";
import * as jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { JwtCookieToken } from "@/packages/constants/auth";

export async function POST(request: Request) {
  try {
    console.log("run route hanler");
    const { code } = await request.json();
    if (!code) {
      return NextResponse.json({
        message: "Invalid credential",
      });
    }

    const response = await HttpClient.post<any>("auth/google/callback", {
      token: code,
    });
    const accessToken = response.data.data.accessToken;
    const decodedToken = jwt.decode(accessToken);
    if (!decodedToken || typeof decodedToken === "string") {
      return NextResponse.json({
        message: "Invalid token",
      });
    }

    cookies().set({
      name: JwtCookieToken,
      value: accessToken,
      httpOnly: true,
      sameSite: "lax",
      maxAge: ((decodedToken.exp ?? 0) - (decodedToken.iat ?? 0)) * 1000,
      domain: process.env.COOKIE_DOMAIN || undefined,
    });

    return NextResponse.redirect(new URL("/threads", request.url));
  } catch (error) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}
