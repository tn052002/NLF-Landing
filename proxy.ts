import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getLocaleFromAcceptLanguage, isLocale } from "@/lib/i18n";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  if (firstSegment && isLocale(firstSegment)) {
    return NextResponse.next();
  }

  const locale = getLocaleFromAcceptLanguage(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();

  if (pathname === "/") {
    url.pathname = `/${locale}/nlf-hcm`;
    return NextResponse.redirect(url);
  }

  if (pathname === "/workshop") {
    url.pathname = `/${locale}/workshop`;
    return NextResponse.redirect(url);
  }

  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
