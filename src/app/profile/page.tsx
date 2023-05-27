"use client"
import '../globals.css'
import {useSession} from "next-auth/react";
import {redirect} from "next/navigation";


export default function Profile() {
    const {data: session} = useSession();
if (session && !session.user.profile) {
    redirect('/profile/edit')
}
    console.log()
    return (
        <>
            <div>
                {session && JSON.stringify(session.user)}
                <h1></h1>
            </div>

        </>
    )
}

