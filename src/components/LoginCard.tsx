'use client'
import React, {useRef, useState} from 'react'
import {signIn, useSession} from 'next-auth/react'
import {useRouter, useSearchParams} from 'next/navigation'
import {toast} from "react-hot-toast";

export default function LoginCard() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await signIn('credentials', {
                redirect: false,
                email,
                password,
                callbackUrl: '/profile',
            })
            if (!res?.error) {
                toast.success('Logged in successfully')
                router.push('/profile')
            } else {
                toast.error('Invalid email or password')
            }
        } catch (err: any) {
        }
    }

    return (
        <>
            <div className="m-auto mt-10 h-96 min-w-[300px] max-w-[30%] rounded-xl bg-white">
                <div className="ml-10  pt-10">
                    <form className="flex flex-col" onSubmit={onSubmit}>
                        <label htmlFor="email">Email</label>
                        <input
                            className="h-10 w-52 border border-black"
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <label className="mt-10" htmlFor="password">Password</label>
                        <input
                            className=" h-10 w-52 border border-black"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            className="mt-10 mr-10  h-14  w-48 rounded-xl bg-stone-800 text-xl font-semibold text-[#F5F5F5] hover:bg-gray-700">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
