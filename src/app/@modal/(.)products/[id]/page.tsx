'use client'
import Products from '../../../../products'
import Image from 'next/image'
import { useStateContext } from '../../../../context/StateContext'
import Modal from '../../../../ui/Modal'
import { useParams } from 'next/navigation'

export default function ProductModal() {
	const { id } = useParams()
	const products = Products
	const product = products.find((p) => p.id === Number(id))
	const { decQty, incQty, qty, onAdd } = useStateContext()

	return (
		<Modal>
			{product && (
				<div className="-ml-72 h-[550px] w-[50%] rounded border border-black bg-[#4d4843] ">
					<div className=" flex ">
						<div className="ml-10 mt-[6.8rem] h-[20rem] w-[80%] ">
							<Image
								src={product.image}
								alt={product.description}
								width={500}
								height={500}
								className="h-full w-full rounded  object-contain "
							/>
						</div>
						<div className="ml-10 mt-[6.8rem]">
							<h2 className="mb-10 text-3xl text-white">{product.title}</h2>
							<p className="w-[85%] text-white">{product.description}</p>
						</div>
					</div>
					<div className="-mt-10 ml-[26rem] flex">
						<div className="mr-20 flex w-[25%] items-center justify-items-center rounded-2xl border border-white bg-white">
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
							className="mr-10  h-10  w-36 rounded-xl bg-stone-800 text-xl font-semibold text-[#F5F5F5] hover:bg-gray-700"
						>
							Add to Cart
						</button>
					</div>
				</div>
			)}
		</Modal>
	)
}
