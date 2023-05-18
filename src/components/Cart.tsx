import {useRef} from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import {useStateContext} from "@src/context/StateContext";
import "@src/app/globals.css"
import Image from "next/image";

export default function Cart() {
    const cartRef = useRef();
    const {totalPrice, totalQuantities, cartItems, setShowCart} = useStateContext();

    return (
        <div className="cart-wrapper" ref={cartRef}>
            <div className="cart-container">
                <button className="cart-heading" onClick={() => setShowCart(false)}>
                    <Image src="/icons/left-arrow.png" alt="Left Arrow" width={20} height={20}/>
                    <span className="heading">Your Cart </span>
                    <span className="cart-num-items"> ({totalQuantities} items)</span>

                </button>

                {cartItems.length < 1 && (
                    <div className="empty-cart">
                        <Image src="/icons/shopping-bag.png" alt="Empty Cart" width={150} height={100}/>
                        <h3>Your shopping bag is empty</h3>
                        <button type="button" onClick={() => setShowCart(false)}>
                            Continue Shopping
                        </button>
                    </div>
                )}
                <div>
                    {cartItems.length >= 1 && cartItems.map((item) => (
                        <div className="relative border border-black m-8 w-[80%]" key={item.id}>
                            <div className="flex mt-5 mb-5 w-[100%] ">
                                <div className="w-[25%]">
                                    <Image className="ml-5" src={item.image} alt={item.name} width={100}
                                           height={100}/>
                                </div>
                                <div className="flex ml-12 w-[80%]">
                                    <h3 className="font-bold w-[60%]">{item.title}</h3>
                                    <h4 className="ml-10 font-extrabold text-red-600">$ {item.price}</h4>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-[30%] absolute bottom-2 left-36 ">
                                <div className="w-6 h-6 cursor-pointer  relative rounded-full border border-black"><span
                                    className="text-3xl absolute -top-2 left-0.5">+</span></div>
                                <span className="text-3xl">0</span>
                                <div className="w-6 h-6 cursor-pointer relative rounded-full border border-black"><span
                                    className="text-4xl absolute -top-3 left-[5px]">-</span></div>
                                <div className="absolute -right-32">
                                <Image  className=" " src="/icons/remove.png" alt="Remove Icon" width={20} height={20} />
                                </div>
                            </div>
                        </div>
                    ))
                    }

                </div>
            </div>
        </div>
    )
}