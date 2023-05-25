import '../globals.css'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
export default async function Profile() {
	const session = await getServerSession(authOptions)
	return (
		<>
			<div>profile</div>
			<pre>{JSON.stringify(session)}</pre>
		</>
	)
}
