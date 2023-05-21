'use client'
import React, { useRef } from 'react'
import { signIn, useSession } from 'next-auth/react'

export default function LoginCard() {
	const { data: session } = useSession()

	const email = useRef('')
	const password = useRef('')

	const onSubmit = async (e) => {
		e.preventDefault()
		const result = await signIn('credentials', {
			email: email.current,
			password: password.current,
			redirect: true,
			callbackUrl: '/profile',
		})
		console.log(result)
	}

	return (
		<>
			<div className="m-auto rounded-xl mt-10 bg-white max-w-[30%] min-w-[300px] h-96">
				{session && session.user.email}
				<div className="ml-10  pt-10">
					<form className="flex flex-col" action="">
						<input
							className="w-52 h-10 border border-black"
							type="text"
							name=""
							id=""
							onChange={(e) => (email.current = e.target.value)}
						/>
						<input
							className="w-52 h-10 border border-black mt-10"
							type="password"
							name=""
							id=""
							onChange={(e) => (password.current = e.target.value)}
						/>
						<button
							className="mr-10  rounded-xl  w-48 h-14 font-semibold bg-stone-800 text-xl text-[#F5F5F5] hover:bg-gray-700"
							onClick={onSubmit}
						>
							Login
						</button>
					</form>
				</div>
			</div>
		</>
	)
}
