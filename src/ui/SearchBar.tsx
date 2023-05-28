"use client"
import Image from "next/image";
import {useState} from "react";
import products from "../products";
import Link from "next/link";

export default function SearchBar() {
    const [search, setSearch] = useState("");

    return <>
        <div className="relative">
            <Image
                className="absolute ml-4 mt-2.5"
                src="/icons/search.png"
                alt="Search Icon"
                width={18}
                height={20}
            />
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search ..."
                className="h-10 w-72 rounded-full border border-black bg-transparent pb-1 pl-12 placeholder:text-black 2xl:w-56 xl:w-52"
            />
            <div className="empty:border-none border h-0 w-72 rounded-2xl border-gray-400 flex flex-col">
                {products.filter(product => {
                    const searchTerm = search.toLowerCase();
                    const title = product.title.toLowerCase();
                    return searchTerm && title.startsWith(searchTerm);
                }).map((product, index) =>


                    <div className="z-10 bg-white border-b border-black" key={index}>
                        <Link href={`/products/${product.id}`}>
                            <div className="mb-2 ml-4 mt-2 flex ">
                                <Image className="mr-2" src={product.image} alt={product.title} width={50}
                                       height={50}></Image>
                                <h1>{product.title}</h1>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    </>
}