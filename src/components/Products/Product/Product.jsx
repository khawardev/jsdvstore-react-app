/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Product.scss";
import "../Products.scss";
const Product = ({ products, categoryid }) => {
    console.log("Type of products:", typeof products);
    const Navigate = useNavigate();

    if (!Array.isArray(products)) {
        // Handle the case when products is not an array
        return null; // or show an error message, placeholder, or loading state
    }

    return (
        <>
            {
                products?.map((products) => (
                    <div key={products?.id} className="col-lg-3 col-md-4 col-sm-6 col-6 py-3 Parent-Col-Hover " onClick={() => Navigate("/category/" + categoryid + "/Single-Product/" + products.id)}>
                        <div className="Parent-product-Image-Hover">
                            <img src={products?.img} />
                        </div>
                        <div className="my-2 product-description">
                            <span>{products?.title}</span><br />
                            <span className="my-2" style={{ fontSize: '20px' }}><b>$ {products?.price}</b></span>
                        </div>
                    </div>
                ))
            }

        </>

    );
};

export default Product;
