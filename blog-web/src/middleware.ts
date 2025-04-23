import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    try {
        const token =  req.cookies.get("token")?.value || req.headers.get("token")?.split(" ")[0] ;
        if (!token) {
            return NextResponse.redirect(new URL('/login', req.url));
        }
        return NextResponse.redirect(new URL('/', req.url));

    } catch (error) {
        console.log('Error during token verification:', error);
        return NextResponse.redirect(new URL('/login', req.url));
    }
}

// Routes 
export const config = {
    matcher: ['/dashboard', '/dashboard/posts', '/dashboard/create' ],
};