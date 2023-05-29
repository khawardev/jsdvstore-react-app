/* eslint-disable react-hooks/exhaustive-deps */
import "./Category.scss";
import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../Products/Products';
import Newsletter from '../Footer/Newsletter/Newsletter';
import Footer from '../Footer/Footer'
import { Context } from '../../utils/AppContext';
const Category = () => {

    useEffect(() => {
        window.scrollTo({ top: 0 });
        getCateoryProduct();
    }, []);


    const { id } = useParams();
    const { products, setProducts } = useContext(Context);
    const { categorytitle, setcategorytitle } = useContext(Context);

    function getCateoryProduct() {

        fetch('https://khawarsultan.github.io/Jsdvstore-Api/api')
            .then(response => response.json())
            .then(data => {

                const categorydata = data[id];
                setcategorytitle(categorydata?.title);
                const products = categorydata?.products;
                setProducts(products);

            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <>

            <div className="container">
                <div className="py-4">
                    <span className="sec-heading text-capitalize"> <b>{categorytitle}</b>
                    </span>
                </div>
                <div className="row ">
                    <Products innerpage={true} products={products} categoryid={id} />
                </div>
            </div>
            <Newsletter />
            <Footer />
        </>
    );
};

export default Category;
