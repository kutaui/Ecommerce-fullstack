import Image from 'next/image'
import Link from 'next/link'
import StarRating from '../ui/StarRating'
import '../app/globals.css'
const ProductCard = (props: any) => {
	const truncateTitle = (title: string, words: number) => {
		const wordArray = title.split(' ')
		if (wordArray.length <= words) {
			return title
		}
		const truncatedTitle = wordArray.slice(0, words).join(' ')
		return `${truncatedTitle}...`
	}

	const truncatedTitle = truncateTitle(props.title, 5)

	return (
		<>
			<div
				className={`w-[20%] ml-2 mb-24  rounded-2xl border border-gray-400 h-96`}
			>
				<Link href={`/products/${props.id}`}>
					<div className="flex flex-col justify-center items-center">
						<div className=" rounded-xl w-[83%] overflow-hidden h-56 mt-5">
							<Image
								src={props.image}
								alt={props.description}
								width={200}
								height={200}
								className="w-full rounded-xl h-full"
							/>
						</div>
						<h2 className=" ml-7 mr-5 mt-3 font-bold ">{truncatedTitle}</h2>
						<span className="mt-2">
							<StarRating value={props.rating} />
						</span>
						<h4 className="font-bold text-red-600">{props.price} $</h4>
					</div>
				</Link>
			</div>
		</>
	)
}

export default ProductCard
