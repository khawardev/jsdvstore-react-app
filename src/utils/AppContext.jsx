/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import { createContext, useEffect } from "react";
import { useState } from "react"
import { useLocation } from 'react-router-dom';
export const Context = createContext();

function Appcontext({ children }) {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [categorytitle, setcategorytitle] = useState();
    const [categoryid, setCategoryid] = useState();
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCarCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])


    useEffect(() => {

        let cartCount = 0;
        cartItems.map(item => cartCount += item.attributes.quantity)
        setCarCount(cartCount);



        let subTotal = 0;
        cartItems.map(item => subTotal += item.attributes.price * item.attributes.quantity)
        setCartSubTotal(subTotal);

    }, [cartItems]);
    const handleAddToCart = (product, quantity) => {

        let items = [...cartItems];
        let index = items.findIndex(p => p.id === product.id)
        if (index !== -1) {
            items[index].attributes.quantity += quantity;
        } else {
            product.attributes.quantity = quantity;
            items = [...items, product];
        }
        setCartItems(items);
    }

    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items.filter(p => p.id !== product.id)
        setCartItems(items);
    }
    const handleCartProductQuantity = (type, product) => {
        let items = [...cartItems];
        let index = items.findIndex(p => p.id === product.id)
        if (type === "inc") {
            items[index].attributes.quantity += 1;

        } else if (type === "dec") {
            if (items[index].attributes.quantity === 1) return;
            items[index].attributes.quantity -= 1;
        }
        setCartItems(items);
    }



    return (

        <Context.Provider value={{
            categories, setCategories,
            products, setProducts,
            categorytitle, setcategorytitle,
            categoryid, setCategoryid,
            cartItems, setCartItems,
            cartCount, setCarCount,
            cartSubTotal, setCartSubTotal,
            handleAddToCart, handleRemoveFromCart, handleCartProductQuantity

        }}
        >
            {children}
        </Context.Provider>
    );
}

export default Appcontext;