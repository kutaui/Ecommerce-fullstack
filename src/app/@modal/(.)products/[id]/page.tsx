"use client"
import Products from "@src/products"
import Modal from "../../../../ui/Modal"
import {useParams, useRouter} from "next/navigation";
import Image from "next/image";
import {useStateContext} from "@src/context/StateContext";


export default function ProductModal() {
    const router = useRouter()
    const {id} = useParams()
    const products = Products;
    const product = products.find((p) => p.id === Number(id))
    const {decQty, incQty, qty,onAdd} = useStateContext()

    return (
        <Modal>
            {product &&
                <div className="-ml-72 rounded border bg-[#4d4843] border-black w-[50%] h-[550px] ">
                    <div className=" flex ">
                        <div className="ml-10 mt-[6.8rem] h-[20rem] w-[80%] ">
                            <Image src={product.image} alt={product.description} width={500} height={500}
                                   className="object-contain w-full h-full  rounded "/>
                        </div>
                        <div className="mt-[6.8rem] ml-10">
                            <h2 className="text-white text-3xl mb-10">{product.title}</h2>
                            <p className="text-white w-[85%]">{product.description}</p>
                        </div>
                    </div>
                    <div className="flex -mt-10 ml-[26rem]">
                        <div
                            className="border bg-white rounded-2xl mr-20 flex justify-items-center items-center border-white w-[25%]">
                            <div className="relative mr-5 ml-3  rounded-3xl bg-black w-6 h-6 text-white text-5xl">
                                <span onClick={decQty} className="cursor-pointer absolute -top-[1.1rem] left-0.5">-</span>
                            </div>
                            <span className=" text-2xl">{qty}</span>
                            <div className="relative ml-5 rounded-3xl bg-black text-white w-6 h-6  text-4xl">
                                <span onClick={incQty} className="cursor-pointer absolute -top-3 ">+</span>
                            </div>
                        </div>
                        <button onClick={() => onAdd(product,qty)}
                            className="mr-10  rounded-xl  w-36 h-10 font-semibold bg-stone-800 text-xl text-[#F5F5F5] hover:bg-gray-700">Add
                            to Cart
                        </button>
                    </div>
                </div>
            }
        </Modal>
    );
}

