"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { useEffect, useState } from 'react'

interface Profile {
    name: string
    bio: string
}

export default function EditProfile() {
    const { data: session } = useSession()
    const router = useRouter()
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
                })
                if (res.ok) {
                    setProfile(await res.json())
                } else {
                    // Handle error case here
                }
                setIsLoading(false)
            } catch (err) {
                console.error(err)
            }
        }

        fetchData()
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const res = await fetch('/api/profile', {
                method: 'POST',
                body: JSON.stringify({
                    name: event.target.name.value,
                    bio: event.target.bio.value,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (res.ok) {
                setTimeout(() => {
                    router.push('/profile')
                    toast.success('Successfully updated')
                }, 500)
            } else {
                toast.error('Something went wrong')
            }
        } catch (err) {
            console.error(err)
        }
    }

    if (isLoading) {
        // Render loading state while fetching profile data
        return <div>Loading...</div>
    }

    return (
        <>
            <div className=" w-[50%] m-auto mt-10">
                <form className="m-auto flex flex-col w-[70%]" onSubmit={handleSubmit}>
                    <label className="text-3xl" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="h-12 p-5  mt-5"
                        type="text"
                        id="name"
                        value={profile && profile.name}
                    />
                    <label className="text-3xl mt-5" htmlFor="bio">
                        Bio
                    </label>
                    <textarea id="bio" className="mt-5 p-1" maxLength={100} value={profile && profile.bio} />
                    <button
                        type="submit"
                        className="mr-10 mt-10  rounded-xl  w-48 h-14 font-semibold bg-stone-800 text-xl text-[#F5F5F5] hover:bg-gray-700"
                    >
                        Update Profile
                    </button>
                </form>
            </div>
        </>
    )
}
