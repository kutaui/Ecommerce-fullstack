'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
export default function RegisterCard() {
	const router = useRouter()
	let errorMessage
	const handleSubmit = async (event) => {
		event.preventDefault()

		try {
			const res = await fetch('/api/user', {
				method: 'POST',
				body: JSON.stringify({
					email: event.target.email.value,
					password: event.target.password.value,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			})
			if (res.ok) {
				toast.success('Account created successfully')
				event.target.email.value = ''
				event.target.password.value = ''
				const timer = setTimeout(() => {
					router.push('/login')
				}, 1750)
				return () => clearTimeout(timer)
			} else if (!res.ok) {
				toast.error('Email is already in use.')
			}
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<>
			<div className="m-auto mt-10 h-96 min-w-[18.75rem] max-w-[30%] rounded-xl bg-white">
				<div className="ml-10  pt-10">
					<form className="flex flex-col" onSubmit={handleSubmit}>
						<label htmlFor="email">Email</label>
						<input
							className="h-10 w-52 border border-black"
							type="text"
							name="email"
							id="email"
						/>
						<label className="mt-10" htmlFor="password">Password</label>
						<input
							className=" h-10 w-52 border border-black"
							type="password"
							name="password"
							id="password"
						/>

						<button
							className="mt-10 mr-10  h-14  w-48 rounded-xl bg-stone-800 text-xl font-semibold text-[#F5F5F5] hover:bg-gray-700"
							type="submit"
						>
							Register
						</button>
					</form>
				</div>
			</div>
		</>
	)
}