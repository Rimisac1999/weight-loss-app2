import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.toLowerCase() || ''
  const { pathname, search } = new URL(request.url)

  // Rewrite tools subdomains to /tools-domain/*
  if (host === 'tools.bonnevalsolutions.com' || host === 'preview-tools.bonnevalsolutions.com') {
    const destinationPath = `/tools-domain${pathname}`
    const url = new URL(destinationPath + search, request.url)
    return NextResponse.rewrite(url)
  }

  // No special handling for other hosts
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}