import {signJwtAccessToken} from "../../../../lib/jwt";
import prisma from "../../../../lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
    email: string;
    password: string;
}

export async function POST(request: Request) {
    const body: RequestBody = await request.json();
    console.log(body)

    const user = await prisma.user.findFirst({
        where: {
            email: body.email,
        },
    });
    console.log(user)
    if (user && (await bcrypt.compare(body.password, user.password))) {
        const {password, ...userWithoutPass} = user;
        const accessToken = signJwtAccessToken(userWithoutPass);
        const result = {
            ...userWithoutPass,
            accessToken,
        };
        console.log(result)
        return new Response(JSON.stringify(result));
    } else return new Response(JSON.stringify(null));
}