/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./SingleProduct.scss";
import { useParams, Link } from 'react-router-dom'
import RelatedProducts from './RelatedProducts/RelatedProducts'
import { useState, useEffect, useContext } from 'react';
import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import Newsletter from '../Footer/Newsletter/Newsletter';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faPinterest } from '@fortawesome/free-brands-svg-icons';



import { useNavigate } from "react-router-dom";
// import { FaFacebookCi, FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaPinterestSquare } from 'react-icons/fa';
import { Context } from "../../utils/AppContext";
const SingleProduct = () => {
    const Navigate = useNavigate();
    const { products, setProducts } = useContext(Context);
    const { handleAddToCart } = useContext(Context);
    const { categorytitle, setcategorytitle } = useContext(Context);
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    const [quantity, setQuantity] = useState(1);
    const Increment = () => {
        setQuantity(quantity + 1);
    };
    const Decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const { cid } = useParams();
    const { pid } = useParams();
    useEffect(() => {
        fetch('https://khawarsultan.github.io/Jsdvstore-Api/api')
            .then(response => response.json())
            .then(data => {
                const category = data[cid];
                setcategorytitle(category?.title);
                // console.log("Category Data Single: ", category);

                const product = category?.products[Number(pid)];
                // console.log("Product Data Single: ", product);
                setProducts(product);
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }, [cid, pid]);
   




    return (
        <>

            <div className="container">
                <div className="row py-sm-5 py-0" >
                    <div className="col-md-6 col-12  py-5 text-center " >
                        <img src={products?.img} className="Singleproduct-image " alt="" />

                    </div>
                    <div className="col-md-6 col-12 py-sm-5 py-0 ">
                        <h4  > <b>{products?.title} </b>    </h4>
                        <p className="my-4" style={{ fontSize: '26px' }} > <b> $ {products?.price} </b> </p>
                        <p style={{ fontSize: '18px' }}> {products?.desc}  </p>


                        <div className="product gap-2 d-flex my-4">
                            <div className="quantity-wrapper">
                                <button className="quantity-btn minus " onClick={Decrement}>
                                    <FaMinus style={{ fontSize: '10px' }} />
                                </button>
                                <span className="quantity px-4">{quantity}</span>
                                <button className="quantity-btn plus" onClick={Increment}>
                                    <FaPlus style={{ fontSize: '10px' }} />
                                </button>

                            </div>
                            <button className="Filled-purple-Button rounded-pill gap-2 d-flex align-items-center" onClick={() => {
                                handleAddToCart(products, quantity, products.title)
                                setQuantity(1);

                            }} >
                                <FaShoppingCart />
                                Add to Cart
                            </button>
                        </div>
                        <hr />
                        <div className="my-4">

                            <p> <b>Category: </b > <span className="Filled-Category-Button rounded-pill  align-items-center"
                                onClick={() => { Navigate(`/category/${cid}`) }}> {categorytitle}</span>  </p>
                            <div className="d-flex   align-content-center align-items-center  ">
                                <span className="a"> <b>Share: &nbsp; </b> </span>
                                <span className="social-links gap-2 ">
                                    <FontAwesomeIcon className="pointer rounded-icon" size="1rem" icon={faFacebookF} />
                                    <FontAwesomeIcon className="pointer rounded-icon" size="1rem" icon={faTwitter} />
                                    <FontAwesomeIcon className="pointer rounded-icon" size="1rem" icon={faInstagram} />
                                    <FontAwesomeIcon className="pointer rounded-icon" size="1rem" icon={faLinkedinIn} />
                                    <FontAwesomeIcon className="pointer rounded-icon" size="1rem" icon={faPinterest} />

                                </span>
                            </div>

                        </div>
                    </div>
                </div>
                <RelatedProducts ProductId={pid} CategoryId={cid} />

            </div>


            <Newsletter />
            <Footer />
        </>
    );
};

export default SingleProduct;
