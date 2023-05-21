'use client'
import React from 'react'
import { signIn, useSession } from 'next-auth/react'

export default function RegisterCard() {
	const handleSubmit = async (event) => {
		// Stop the form from submitting and refreshing the page.
		event.preventDefault()

		// Get data from the form.
		const data = {
			email: event.target.email.value,
			password: event.target.password.value,
		}

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
		alert(`Is this your full name: ${result.data}`)
	}

	return (
		<>
			<div className="m-auto mt-10 h-96 min-w-[300px] max-w-[30%] rounded-xl bg-white">
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
