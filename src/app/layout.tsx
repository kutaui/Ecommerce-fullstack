import Nav from '../components/Nav'
import { StateContext } from '../context/StateContext'
import { Toaster } from 'react-hot-toast'
import Providers from '../context/Providers'

export const metadata = {
	title: 'TheSociety',
	description: 'Make a statement with your wardrobe.',
	icons: {
		icon: {
			url: '/favicon.ico',
			type: 'icon',
		},
		shortcut: { url: '/icons/favicon.ico', type: 'icon' },
	},
}
export default function RootLayout(props: any) {
	return (
		<html lang="en" className="bg-bg-primary">
			<body>
				<div className="mx-auto max-w-[82%] " id="div">
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
