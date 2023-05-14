"use client"
import {useContext} from "react";
import {Products} from "@src/context/Context";
import ProductCard from "@src/ui/ProductCard";
import Image from "next/image";

const MainPageProducts = () => {
    const {products, setProducts} = useContext(Products);
    return <>

        <div>
            <div className="relative">
                <h1 className=" text-[5.5rem] font-['Almarai'] w-[70%] -mt-28 mb-28 leading-[1] tracking-wide">DISCOVER
                    NEW DROPS AND UNISEX TEES</h1>
                <div
                    className="absolute  bg-black w-[4.3rem] h-[4.3rem] top-24 right-[39rem] flex justify-center items-center  rounded-full">
                    <Image src="/icons/down-right.png" alt="Down Right Arrow Icon" width={58} height={58}/>
                </div>
            </div>
            <div className="w-[100%] flex justify-between flex-wrap">
                {products.map((product) => (

                    <ProductCard key={product.id} image={product.image} rating={product.rating.rate} price={product.price} title={product.title} />

                ))}

            </div>
        </div>
    </>
}


export default MainPageProducts