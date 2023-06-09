import NextAuth from "next-auth";
import {Profile} from ".prisma/client";

declare module "next-auth" {
    interface Session {
        user: {
            id: number;
            name: string;
            email: string;
            accessToken: string;
            profile: Profile
        };
    }


    interface Profile {
        id: number;
        name: string;
        bio: string;
        user: User,
        userId: number
    }
}
