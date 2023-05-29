/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from 'react-icons/fi';
import { TbSearch, TbHeart } from "react-icons/tb";
import { AiFillHome } from "react-icons/ai";
import React, { useState } from 'react';
import Cart from '../Cart/Cart'
import "./Header.scss";
import Search from './Search/Search'

import { useContext } from 'react'
import { Context } from "../../utils/AppContext";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Header = () => {
    const { cartCount } = useContext(Context);
    const Navigate = useNavigate();
    const [ShowCart, setShowCart] = useState(false);
    const [ShowSearch, setShowSearch] = useState(false);

    return (
        <>

            <div className="main-header px-3" >
                <div className="container py-3 text-white main-header-child ">
                    <div className=" links ">
                        <span className=" list-unstyled  d-flex ">
                            <li className="bold">
                                <TbSearch className="icon pointer " onClick={() => setShowSearch(true)} />
                            </li>
                           
                        </span>
                    </div>
                    <div className="list-unstyled  ">
                        <li className="text-decoration-none text-white pointer" onClick={() => Navigate("/")} > <span className="center"> <b> JSDVSTORE.</b> </span> </li>
                    </div>
                    <div className="  ">
                        <span className="d-flex list-unstyled gap-4 " >
                            {/* <li>
                                <TbHeart className="icon" />
                            </li> */}
                            <li className=" position-relative pointer" onClick={() => setShowCart(true)}>
                                <FiShoppingCart className="cart-icon" />
                                {!!cartCount && <span className="cart-popup">{cartCount}</span>}
                            </li>
                        </span>
                    </div>
                </div>
            </div>
            {ShowCart && <Cart setShowCart={setShowCart} />}
            {ShowSearch && <Search setShowSearch={setShowSearch} />}
        </>



    );
};

export default Header;
