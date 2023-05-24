'use client'
import React, { useRef, useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Alert from '../ui/Alert'

export default function LoginCard() {
	const { data: session } = useSession()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loginSuccess, setLoginSuccess] = useState(null)
	const router = useRouter()

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		signIn('credentials', {
			email,
			password,
			callbackUrl: '/profile',
		})
	}

	return (
		<>
			<div className="m-auto mt-10 h-96 min-w-[300px] max-w-[30%] rounded-xl bg-white">
				{session && session.user.email}
				<div className="ml-10  pt-10">
					<form className="flex flex-col" onSubmit={onSubmit}>
						<input
							className="h-10 w-52 border border-black"
							type="email"
							id="email"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
						<input
							className="mt-10 h-10 w-52 border border-black"
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						{loginSuccess === true && <Alert>Login successful!</Alert>}
						{loginSuccess === false && <Alert>Invalid credentials</Alert>}
						<button className="mr-10  h-14  w-48 rounded-xl bg-stone-800 text-xl font-semibold text-[#F5F5F5] hover:bg-gray-700">
							Login
						</button>
					</form>
				</div>
			</div>
		</>
	)
}
