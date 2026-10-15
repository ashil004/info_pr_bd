import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  
  if (!token && pathname.startsWith('/portal-v92x8/dashboard')) {
    return NextResponse.redirect(new URL('/portal-v92x8', request.url));
  }

  
  if (token && pathname === '/portal-v92x8') {
    return NextResponse.redirect(new URL('/portal-v92x8/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/portal-v92x8/:path*'],
};