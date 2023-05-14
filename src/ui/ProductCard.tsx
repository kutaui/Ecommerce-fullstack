import Image from "next/image";

const ProductCard = (props: any) => {
    return <>
        <div className="w-[20%] ml-2 mb-24 h-96 bg-zinc-50 rounded-2xl border border-black">
            <div className="flex flex-col justify-center items-center">

                <div className=" rounded-xl w-[83%] h-56 mt-5">
                    <Image src={props.image} alt={props.description} width={200} height={200}
                           className="w-full rounded-xl h-full"/>
                </div>
                <h2 className=" ml-7 mr-5 mt-3">{props.title}</h2>
                <h3 className="mt-1">{props.rating}/5</h3>
                <h4 className="mt-1">{props.price} $</h4>
            </div>
        </div>
    </>
};

export default ProductCard;