import {useRef} from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import {useStateContext} from "@src/context/StateContext";
import "@src/app/globals.css"
import Image from "next/image";

export default function Cart() {
    const cartRef = useRef();
    const {totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove} = useStateContext();

    return (
        <div className="cart-wrapper" ref={cartRef}>
            <div className="cart-container">
                <button className="cart-heading" onClick={() => setShowCart(false)}>
                    <Image src="/icons/left-arrow.png" alt="Left Arrow" width={20} height={20}/>
                    <span className="heading">Your Cart </span>
                    <span className="cart-num-items"> ({totalQuantities} items)</span>

                </button>

                {cartItems.length < 1 && (
                    <div className="empty-cart ">
                        <Image className="mt-16" src="/icons/shopping-bag.png" alt="Empty Cart" width={150} height={100}/>
                        <h3>Your shopping bag is empty</h3>

                        <button type="button" onClick={() => setShowCart(false)} className="mt-20 rounded-xl  w-52 h-14 font-semibold bg-stone-800 text-xl text-[#F5F5F5] hover:bg-gray-700" >
                            Continue Shopping
                        </button>
                    </div>
                )}
                <div>
                    {cartItems.length >= 1 && cartItems.map((product) => (
                        <div className="relative border border-black m-8 w-[80%]" key={product.id}>
                            <div className="flex mt-5 mb-5 w-[100%] ">
                                <div className="w-[25%]">
                                    <Image className="ml-5" src={product.image} alt={product.name} width={100}
                                           height={100}/>
                                </div>
                                <div className="flex ml-12 w-[80%]">
                                    <h3 className="font-bold w-[60%]">{product.title}</h3>
                                    <h4 className="ml-10 font-extrabold text-red-600">$ {product.price}</h4>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-[30%] absolute bottom-2 left-36 ">
                                <div onClick={() => toggleCartItemQuantity(product.id, "dec")}
                                     className="w-6 h-6 cursor-pointer  relative rounded-full border border-black"><span
                                    className="text-4xl absolute -top-3 left-[5px]">-</span></div>
                                <span className="text-3xl">{product.quantity}</span>
                                <div onClick={() => toggleCartItemQuantity(product.id, "inc")}
                                     className="w-6 h-6 cursor-pointer relative rounded-full border border-black"><span
                                    className="text-3xl absolute  -top-2 left-0.5">+</span></div>
                                <div onClick={() => onRemove(product)} className="cursor-pointer absolute -right-32">
                                    <Image className=" " src="/icons/remove.png" alt="Remove Icon" width={20}
                                           height={20}/>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
                {cartItems.length >= 1 && (
                    <div className="absolute w-full p-10 bottom-0">
                        <div className="flex justify-between text-xl ">
                            <h3>Subtotal:</h3>
                            <h3>${totalPrice.toFixed(2)}</h3>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}