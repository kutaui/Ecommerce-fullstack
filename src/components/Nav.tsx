'use client'
import Image from 'next/image'
import Link from 'next/link'
import '../app/globals.css'
import { useStateContext } from '../context/StateContext'
import Cart from '../components/Cart'

const Nav = () => {
	const { showCart, setShowCart } = useStateContext()

	return (
		<>
			<nav className="flex w-[100%]  font-['Wix_Madefor_Text'] justify-around h-16 mt-8 items-center">
				<Link href="/">
					<h3 className="text-4xl  font-semibold xl:text-3xl mb-4">
						TheSociety
					</h3>
				</Link>
				<div className="w-[40%]">
					<ul className="flex tracking-wide justify-around h-16 items-center  text-lg xl:text-base">
						<li>
							<Link className="hover:font-bold" href="/about">
								{' '}
								About us
							</Link>
						</li>
						<li>
							<Link className="hover:font-bold" href="/products">
								Our products
							</Link>
						</li>
						<li>
							<Link className="hover:font-bold" href="/products">
								New items
							</Link>
						</li>
						<li>
							<Link className="hover:font-bold" href="/contact">
								Contacts
							</Link>
						</li>
					</ul>
				</div>

				<div className="flex justify-around w-[30%] 2xl:w-[35%] mt-2">
					<div className="relative">
						<Image
							className="absolute ml-4 mt-2.5"
							src="/icons/search.png"
							alt="Search Icon"
							width={18}
							height={20}
						/>
						<input
							type="text"
							placeholder="Search ..."
							className="rounded-full border border-black h-10 pl-12 pb-1 w-72 placeholder:text-black xl:w-52 2xl:w-56 bg-transparent"
						/>
					</div>
					<div
						onClick={() => setShowCart(true)}
						className="cursor-pointer bg-black rounded-3xl w-11 h-11 flex items-center justify-center"
					>
						<Image
							src="/icons/shopping-cart1.png"
							alt="Cart Icon"
							width={21}
							height={25}
							className="-ml-1"
						/>
					</div>
					{showCart && <Cart />}
					<Link href="/login">
						<div className="border-black border rounded-3xl w-11 h-11 flex items-center justify-center">
							<Image
								src="/icons/user.png"
								alt="Cart Icon"
								width={21}
								height={25}
							/>
						</div>
					</Link>
				</div>
			</nav>
			<hr className="border-black mt-4" />
		</>
	)
}

export default Nav
