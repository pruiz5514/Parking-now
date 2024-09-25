import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './services/token';

export async function middleware(request: NextRequest) {
  const cookieToken = request.cookies.get("servToken")?.value;

  if (!cookieToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  else {
    try {
      const validateToken = await verifyToken(cookieToken);
      if (!validateToken.success) {
        return NextResponse.redirect(new URL('/', request.url));
      }
    } catch (e) {
      console.log(e)
    }

  }

}

export const config = {
  matcher: ['/parkings', '/payment', '/users/:path*', '/parking-information/:path*', '/my-parkings/:path*', '/register-parking/:path*']
}