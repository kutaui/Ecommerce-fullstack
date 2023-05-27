import { getServerSession } from 'next-auth'

export default async function EditProfile() {

	return (
		<>
			<div className=" w-[50%] m-auto mt-10">
				<form className="m-auto flex flex-col w-[70%]">
					<label className='text-3xl' htmlFor="name">Name</label>
					<input className='h-12 p-5  mt-5' type="text" id="name" />
					<label className='text-3xl mt-5'  htmlFor="bio">Bio</label>
                    <textarea id="bio" className="mt-5 p-1"/>
                <button className="mr-10 mt-10  rounded-xl  w-48 h-14 font-semibold bg-stone-800 text-xl text-[#F5F5F5] hover:bg-gray-700">Update Profile</button>
				</form>
			</div>
		</>
	)
}
