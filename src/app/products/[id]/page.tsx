'use client'
import Image from 'next/image'
import Products from '../../../products'
import { useStateContext } from '../../../context/StateContext'

import { useParams, useRouter } from 'next/navigation'

const ProductsPage = () => {
	const router = useRouter()
	const { id } = useParams()
	const { decQty, incQty, qty, onAdd } = useStateContext()

	const products = Products
	const product = products.find((p) => p.id === Number(id))

	console.log(product)

	return (
		<>
			<div className="mt-16 h-[600px] m-auto  w-[70%] border border-black bg-[#2E2E2E]">
				<div className="ml-20 mt-16 flex">
					<div className="w-[30%]">
						<Image
							src={product.image}
							alt={product.title}
							width={350}
							height={350}
							className="h-[400px] w-full rounded object-contain "
						/>
					</div>
					<div className="ml-16 w-[65%]">
						<h1 className="mb-10 w-[80%] text-3xl text-white">
							{product.title}
						</h1>
						<p className="h-[190px] w-[80%] overflow-hidden text-clip  text-white">
							{product.description}
						</p>
					</div>

				</div>
				<div className="-mt-10 ml-[27.5rem] flex">
						<div className="mr-20 flex w-[20%] items-center justify-items-center rounded-2xl border border-white bg-white">
							<div className="relative ml-3 mr-5  h-6 w-6 rounded-3xl bg-black text-5xl text-white">
								<span
									onClick={decQty}
									className="absolute -top-[1.1rem] left-0.5 cursor-pointer"
								>
									-
								</span>
							</div>
							<span className=" text-2xl">{qty}</span>
							<div className="relative ml-5 h-6 w-6 rounded-3xl bg-black text-4xl  text-white">
								<span
									onClick={incQty}
									className="absolute -top-3 cursor-pointer "
								>
									+
								</span>
							</div>
						</div>
						<button
							onClick={() => onAdd(product, qty)}
							className="mr-10  h-10  w-36 rounded-xl bg-white text-xl font-semibold  hover:bg-gray-300"
						>
							Add to Cart
						</button>
					</div>
			</div>
		</>
	)
}

export default ProductsPage
