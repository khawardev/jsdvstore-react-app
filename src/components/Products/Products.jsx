/* eslint-disable react/prop-types */
import "./Products.scss";
import Product from './Product/Product'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Products = ({ innerpage, ProductHeading, products, PaddingX, categoryid }) => {

    return (
        <>
            <div className={`container ${PaddingX}`}  >
                {!innerpage && <div className="py-4">
                    <span className="sec-heading text-capitalize"> <b>{ProductHeading}</b></span>
                </div>}
                <div className="row">
                    <Product products={products} categoryid={categoryid} />
                </div>
            </div>
        </>

    );
};

export default Products;
