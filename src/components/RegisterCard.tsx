'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Alert from '../ui/Alert'

export default function RegisterCard() {
	const router = useRouter()
	const [registerSuccess, setRegisterSuccess] = useState(null)
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
				setRegisterSuccess(true)
				event.target.email.value = ''
				event.target.password.value = ''
				const timer = setTimeout(() => {
					router.push('/login')
				}, 1750)
				return () => clearTimeout(timer)
			} else if (!res.ok) {
				setRegisterSuccess(false)
			}
		} catch (err) {
			console.error(err)
		}
<<<<<<< HEAD

		// Send the data to the server in JSON format.
		const JSONdata = JSON.stringify(data)

		// API endpoint where we send form data.
		const endpoint = '/api/user'

		// Form the request for sending data to the server.
		const options = {
			// The method is POST because we are sending data.
			method: 'POST',
			// Tell the server we're sending JSON.
			headers: {
				'Content-Type': 'application/json',
			},
			// Body of the request is the JSON data we created above.
			body: JSONdata,
		}

		// Send the form data to our forms API on Vercel and get a response.
		const response = await fetch(endpoint, options)

		// Get the response data from server as JSON.
		// If server returns the name submitted, that means the form works.
		const result = await response.json()
=======
>>>>>>> 7f259a50909b5170c2de86161ff759bb9d887db6
	}

	return (
		<>
			<div className="m-auto mt-10 h-96 min-w-[18.75rem] max-w-[30%] rounded-xl bg-white">
				<div className="ml-10  pt-10">
					<form className="flex flex-col" onSubmit={handleSubmit}>
						<input
							className="h-10 w-52 border border-black"
							type="text"
							name="email"
							id="email"
						/>
						<input
							className="mt-10 h-10 w-52 border border-black"
							type="password"
							name="password"
							id="password"
						/>
						{registerSuccess === true && (
							<Alert>Successfully registered!</Alert>
						)}
						{registerSuccess === false && (
							<Alert>E-mail is already in use</Alert>
						)}
						<button
							className="mr-10  h-14  w-48 rounded-xl bg-stone-800 text-xl font-semibold text-[#F5F5F5] hover:bg-gray-700"
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
