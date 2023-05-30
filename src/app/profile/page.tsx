"use client"
import '../globals.css'
import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import Link from "next/link";

interface Profile {
    name: string
    bio: string
}
export default function Profile() {
    const router = useRouter()
    const {data: session} = useSession();
    const [profile, setProfile] = useState<Profile | null>(null)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/profile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (res.ok) {
                    setProfile(await res.json());
                    setIsLoading(false)

                } else if (!res.ok) {

                }
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        const redirectTimeout = setTimeout(() => {
            if (!profile) {
                toast('Please create your profile', {
                    icon: '⚠️',
                });
                router.push('/profile/edit');
            }
        }, 2000);

        return () => {
            clearTimeout(redirectTimeout);
        };
    }, [profile, router]);


    if (isLoading) {
        return
    }

    return (
        <>
            <div className="mt-10 m-auto w-full">
                <div className="ml-[30rem] w-[50%]">

                    <h1 className="ml-28 text-4xl mb-10">Your Profile</h1>
                    <div className="w-[100%] h-52">
                        <h2 className="text-3xl mb-5 w-[50%]">Name</h2>
                        <h2 className="border p-1 bg-white border-black w-[50%] text-xl">{profile && profile.name}</h2>
                        <h2 className=" mt-10 text-3xl mb-5 w-[50%]">Biography</h2>
                        <p className="w-[50%] p-1 border bg-white  border-black  break-words">{profile && profile.bio}</p>
                    </div>

                </div>
                <div className="flex justify-between mt-52 ml-72 w-[40%]">
                    <Link href="/profile/edit">
                    <button
                        className="rounded-3xl bg-black w-32 h-10 font-semibold hover:bg-stone-500 text-white">Edit
                        Profile
                    </button>
                    </Link>
                    <button onClick={() => signOut()}
                            className="rounded-3xl bg-white w-32 h-10 font-semibold hover:bg-stone-800 hover:text-white ">Sign
                        out
                    </button>
                </div>
            </div>

        </>
    )
}

