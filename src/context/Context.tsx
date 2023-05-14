"use client"
import React, {createContext, useState, useEffect} from "react";
import axios from "axios";

interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}


export const Products = createContext<{
    products: IProduct[],
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
}>({
    products: [],
    setProducts: () => {
    },
});

function Context({children}: any) {
    const [products, setProducts] = useState<IProduct[]>([]);


    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Products.Provider value={{products, setProducts}}>
            {children}
        </Products.Provider>
    );
}

export default Context;