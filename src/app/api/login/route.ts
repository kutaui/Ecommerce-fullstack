import prisma from '../../../../lib/prisma'
import * as bcrypt from 'bcrypt'

interface RequestBody {
	email: string
	password: string
}

export async function POST(req: Request) {
	const body: RequestBody = await req.json()

	const user = await prisma.user.findFirst({
		where: {
			email: body.email,
		},
	})

	if (user && (await bcrypt.compare(body.password, user.password))) {
		const { password, ...userWithoutPass } = user
		return new Response(JSON.stringify(userWithoutPass))
	} else {
		return new Response(JSON.stringify('error fetching the user'))
	}
}
