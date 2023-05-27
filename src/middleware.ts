import {getToken} from 'next-auth/jwt'
import {withAuth} from 'next-auth/middleware'
import {NextFetchEvent, NextRequest, NextResponse} from 'next/server'

export default async function middleware(
    req: NextRequest,
    event: NextFetchEvent
) {
    const token = await getToken({req})
    const isAuthenticated = !!token

    if (req.nextUrl.pathname.startsWith('/login') && isAuthenticated) {
        return NextResponse.redirect(new URL('/profile', req.url))
    }
    if (req.nextUrl.pathname.startsWith('/register') && isAuthenticated) {
        return NextResponse.redirect(new URL('/profile', req.url))
    }

    if (req.nextUrl.pathname.startsWith('/profile') && !isAuthenticated) {
        return NextResponse.redirect(new URL('/login', req.url))
    }
    if (req.nextUrl.pathname.startsWith('/profile/edit') && !isAuthenticated) {
        return NextResponse.redirect(new URL('/login', req.url))
    }
    const authMiddleware = await withAuth({
        pages: {
            signIn: req.nextUrl.pathname,
        },
    })

    // @ts-expect-error
    return authMiddleware(req, event)
}

export const config = {
    matcher: ['/login', '/register', '/profile/edit', "/profile/"],
}
