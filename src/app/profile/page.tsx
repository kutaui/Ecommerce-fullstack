"use client"
import '../globals.css'
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";


export default function Profile() {
    const router = useRouter()
    const {data: session} = useSession();
    const [profile, setProfile] = useState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                } else if (!res.ok) {
                    toast.error('Something went wrong');
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
                router.push('/profile/edit');
            }
        }, 500);

        return () => {
            clearTimeout(redirectTimeout);
        };
    }, [profile, router]);
    console.log(session)
    console.log(profile)
    return (
        <>
            <div>
                {profile && JSON.stringify(profile)}
                {profile === undefined && <h1>Loading...</h1>}
                <h1></h1>
            </div>

        </>
    )
}

