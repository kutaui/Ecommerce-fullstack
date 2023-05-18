"use client"
import React, {createContext, useState, useContext, useEffect} from 'react';
import {toast} from "react-hot-toast";
// @ts-ignore
const Context = createContext()

export const StateContext = ({children}: any) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState()
    const [totalQuantities, setTotalQuantities] = useState()
    const [qty, setQty] = useState(1)

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item.id === product.id)
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

        if (checkProductInCart) {
            const updatedCartItems = cartItems.map((item) => {
                if (item.id === product.id) {
                    return {...item, quantity: item.quantity + quantity}
                }
            })
            setCartItems(updatedCartItems)
        } else {
            product.quantity = quantity
            setCartItems([...cartItems, {...product}])
        }

        toast.success(`${qty} ${product.title} added to the cart.`)
    }

    const incQty = () => {
        setQty((prev) => prev + 1)
    }
    const decQty = () => {
        setQty((prev) => {
            if (prev - 1 < 1) return 1

            return prev - 1
        })
    }
    return (
        <Context.Provider value={{
            showCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty,
            decQty,
            onAdd,
        }}>
            {children}

        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)