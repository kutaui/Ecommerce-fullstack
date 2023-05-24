'use client'
import Image from 'next/image'
import Link from 'next/link'
import '../app/globals.css'
import { useStateContext } from '../context/StateContext'
import Cart from '../components/Cart'
import { signIn } from 'next-auth/react'

const Nav = () => {
	const { showCart, setShowCart } = useStateContext()

	return (
		<>
			<nav className="mt-8 flex  h-16 w-[100%] items-center justify-around font-['Wix_Madefor_Text']">
				<Link href="/">
					<h3 className="mb-4  text-4xl font-semibold xl:text-3xl">
						TheSociety
					</h3>
				</Link>
				<div className="w-[40%]">
					<ul className="flex h-16 items-center justify-around text-lg  tracking-wide xl:text-base">
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

				<div className="mt-2 flex w-[30%] justify-around 2xl:w-[35%]">
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
							className="h-10 w-72 rounded-full border border-black bg-transparent pb-1 pl-12 placeholder:text-black 2xl:w-56 xl:w-52"
						/>
					</div>
					<div
						onClick={() => setShowCart(true)}
						className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-3xl bg-black"
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
					<button onClick={() => signIn()}>
						<div className="flex h-11 w-11 items-center justify-center rounded-3xl border border-black">
							<Image
								src="/icons/user.png"
								alt="Cart Icon"
								width={21}
								height={25}
							/>
						</div>
					</button>
				</div>
			</nav>
			<hr className="mt-4 border-black" />
		</>
	)
}

export default Nav
