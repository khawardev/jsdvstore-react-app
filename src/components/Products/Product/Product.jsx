/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Product.scss";
import "../Products.scss";

const Product = ({ products }) => {
    const Navigate = useNavigate();



    const findCategoryIdByProductId = (producttitle) => {
        console.log("product title: ", producttitle);
        fetch('https://khawarsultan.github.io/Jsdvstore-Api/api')
            .then(response => response.json())
            .then(data => {
                data.map((data) => {
                    data.products.forEach(product => {
                        if (product.title === producttitle) {
                            Navigate("/category/" + data.id + "/Single-Product/" + product.id);
                        }
                    });
                });
            });
    };



    if (!Array.isArray(products)) {
        // Handle the case when products is not an array
        return null; // or show an error message, placeholder, or loading state
    }

    return (
        <>
            {

                products?.map((product) => {
                    return (
                        <div key={product?.id} className="col-lg-3 col-md-4 col-sm-6 col-6 py-3 Parent-Col-Hover"
                            onClick={() => { findCategoryIdByProductId(product.title) }}>
                            <div className="Parent-product-Image-Hover">
                                <img src={product?.img} />
                            </div>
                            <div className="my-2 product-description">
                                <span>{product?.title}</span><br />
                                <span className="my-2" style={{ fontSize: '20px' }}><b>$ {product?.price}</b></span>
                            </div>
                        </div>
                    );
                })

            }

        </>

    );
};

export default Product;
