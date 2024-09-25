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
      console.log(validateToken.decode.role_id);

      if (!validateToken.success) {
        return NextResponse.redirect(new URL('/', request.url));
      }
      else if (validateToken.decode.role_id === 1) {
        if (request.nextUrl.pathname.startsWith('/users')) {
          return NextResponse.redirect(new URL('/', request.url));
        }
      }
      else if (validateToken.decode.role_id === 2) {
        const paths = ['/my-parkings', '/parking-information', '/payment', '/register-parking'];
        if (paths.some(path => request.nextUrl.pathname.startsWith(path))) {
          return NextResponse.redirect(new URL('/users', request.url));
        }
      }
    } catch (e) {
      console.log(e)
    }

  }

}

export const config = {
  matcher: ['/parkings', '/payment', '/users/:path*', '/parking-information/:path*', '/my-parkings/:path*', '/register-parking/:path*']
}