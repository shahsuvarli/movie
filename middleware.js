import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.redirect(new URL("/auth", request.url));
}

export const config = {
  matcher: "/efe",
};
