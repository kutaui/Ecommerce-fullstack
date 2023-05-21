'use client'
import Nav from '../components/Nav'
import { StateContext } from '../context/StateContext'
import { Toaster } from 'react-hot-toast'
import Providers from '../context/Providers'

export const metadata = {
	title: 'TheSociety',
	description: 'Make a statement with your wardrobe.',
	icons: {
		icon: {
			url: '/favicon.png',
			type: 'image/png',
		},
		shortcut: { url: '/icons/favicon.ico', type: 'image/png' },
	},
}
export default function RootLayout(props: any) {
	return (
		<html lang="en" className="bg-bg-primary">
			<body>
				<div className="max-w-[82%] mx-auto " id="div">
					<Providers>
						<StateContext>
							<Toaster />
							<Nav />
							{props.children}
							{props.modal}
						</StateContext>
					</Providers>
				</div>
			</body>
		</html>
	)
}
