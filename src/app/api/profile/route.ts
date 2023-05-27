import prisma from '../../../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]/route'

interface RequestBody {
    name: string
    bio: string
}

export async function POST(req: Request, res: NextApiResponse) {
    const session = await getServerSession(authOptions)
    console.log(session)
    if (!session) {
        return new Response(JSON.stringify({ error: 'Not authenticated' }), { status: 401 })
    }

    try {
        const body: RequestBody = await req.json()

        const user = await prisma.user.findUnique({
            where: {
                id: Number(session.user.id)
            }
        })

        if (!user) {
            throw new Error('User not found')
        }

        const profile = await prisma.profile.create({
            data: {
                name: body.name,
                bio: body.bio,
                user: {
                    connect: {
                        id: user.id
                    }
                }
            }
        })

        return new Response(JSON.stringify(profile))
    } catch (e) {
        throw e
    }
}

export async function GET(req: Request, res: NextApiResponse) {
    const session = await getServerSession(authOptions)
    if (!session) {
        return new Response(JSON.stringify({ error: 'Not authenticated' }), { status: 401 })
    }

    try {
        const profile = await prisma.profile.findUnique({
            where: {
                userId: Number(session.user.id)
            }
        })

        return new Response(JSON.stringify(profile))
    } catch (e) {
        throw e
    }
}