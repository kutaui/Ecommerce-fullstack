"use client"
import {getServerSession} from 'next-auth'
import {useSession} from "next-auth/react";
import {useRouter} from 'next/navigation'
import toast from 'react-hot-toast'

export default async function EditProfile() {
    const {data: session} = useSession();
    const router = useRouter()

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
                router.push('/profile')
                toast.success('Successfully updated')

            } else if (!res.ok) {
                toast.error('Something went wrong')
            }
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <>
            <div className=" w-[50%] m-auto mt-10">
                <form className="m-auto flex flex-col w-[70%]" onSubmit={handleSubmit}>
                    <label className='text-3xl' htmlFor="name">Name</label>
                    <input className='h-12 p-5  mt-5' type="text" id="name"/>
                    <label className='text-3xl mt-5' htmlFor="bio">Bio</label>
                    <textarea id="bio" className="mt-5 p-1"/>
                    <button type="submit"
                            className="mr-10 mt-10  rounded-xl  w-48 h-14 font-semibold bg-stone-800 text-xl text-[#F5F5F5] hover:bg-gray-700">Update
                        Profile
                    </button>
                </form>
            </div>
        </>
    )
}
