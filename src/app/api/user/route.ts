import prisma from '../../../../lib/prisma'
import * as bcrypt from 'bcrypt'
import { Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

interface RequestBody {
	email: string
	password: string
}

export async function POST(req: Request, res: NextApiResponse) {

	try {
		const body: RequestBody = await req.json()
		const user = await prisma.user.create({
			data: {
				email: body.email,
				password: await bcrypt.hash(body.password, 10),
			},
		})


		const { password, ...userWithoutPass } = user

		return new Response(JSON.stringify(userWithoutPass))
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			if (e.code === 'P2002') {
				const options = { status: 400 }
				return new Response(
					JSON.stringify({ error: 'Email already exists' }),
					options
				)
			}
		}
		throw e
	}
}

