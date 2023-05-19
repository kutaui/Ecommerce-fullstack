"use client"
import React, {createContext, useState, useContext, useEffect} from 'react';
import {toast} from "react-hot-toast";

const Context: React.Context<any> = createContext()


export const StateContext = ({children}: any) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [qty, setQty] = useState(1)

    let foundProduct: string


    // Load cartItems from localStorage
    useEffect(() => {
        const cartFromLocalStorage = localStorage.getItem('cartItems');
        if (cartFromLocalStorage) {
            const {cartItems, totalPrice, totalQuantities} = JSON.parse(cartFromLocalStorage);
            setCartItems(cartItems);
            setTotalPrice(totalPrice);
            setTotalQuantities(totalQuantities);
        }
    }, []);

    // Update localStorage when cartItems, totalPrice, or totalQuantities change
    useEffect(() => {
        localStorage.setItem(
            'cartItems',
            JSON.stringify({cartItems, totalPrice, totalQuantities})
        );
    }, [cartItems, totalPrice, totalQuantities]);

    const onAdd = (product: {id: number; price: number}, quantity: number) => {
        const checkProductInCart = cartItems.find((item: {id:number}) => item.id === product.id)
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)
        setQty(1)

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


    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item.id === product.id);
        const newCartItems = cartItems.filter((item) => item.id !== product.id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
        setCartItems(newCartItems);
    }

    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item.id === id)

        if (value === 'inc') {
            const updatedData = cartItems.map(item => (item.id === id ? {...item, quantity: item.quantity + 1} : item));
            setCartItems(updatedData);
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
        } else if (value === 'dec') {
            if (foundProduct.quantity > 1) {
                const updatedData = cartItems.map(item => (item.id === id ? {
                    ...item,
                    quantity: item.quantity - 1
                } : item));
                setCartItems(updatedData);
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
            }
        }
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
            setShowCart,
            toggleCartItemQuantity,
            onRemove
        }}>
            {children}

        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)