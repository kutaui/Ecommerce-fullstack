import prisma from "@lib/prisma";
import * as bcrypt from "bcrypt"

interface RequestBody {
    email: string,
    password: string
}

export async function POST(req: Request) {
    const body: RequestBody = await req.json();
    const user = await prisma.user.create({
        data: {
            email: body.email,
            password: await bcrypt.hash(body.password, 10)
        }
    })

    const {password, ...userWithoutPass} = user
    return new Response(JSON.stringify(userWithoutPass))

}