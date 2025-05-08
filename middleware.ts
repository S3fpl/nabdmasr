import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/dashboard", "/account", "/donation"];
const centerOnlyRoutes = ["/center", "/center/dashboard", "/center/requests"];

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = req.nextUrl;


  if (!token && [...protectedRoutes, ...centerOnlyRoutes].some(route => pathname.startsWith(route))) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }


  if (
    token &&
    centerOnlyRoutes.some(route => pathname.startsWith(route)) &&
    token.role !== "center"
  ) {
    const homeUrl = new URL("/", req.url);
    return NextResponse.redirect(homeUrl);
  }


  return NextResponse.next();
}


export const config = {
  matcher: ["/dashboard/:path*", "/account/:path*", "/donations/:path*", "/center/:path*"],
};
