/* eslint-disable react/prop-types */
import Products from '../../Products/Products';
import { useEffect, useContext } from 'react';
import { Context } from '../../../utils/AppContext';

const RelatedProducts = ({ ProductId, CategoryId }) => {
    console.log("Product id: ", ProductId);
    console.log("Category id: ", CategoryId);
    
    // const { data } = useFetch`/api/products?populate=*&[filters][id][$ne]=${ProductId}&[filters][categories][id]=${CategoryId}&pagination[start]=0&pagination[limit]=4`;
    // const { data } = useFetch(`/api/products?populate=*&[filters][id][$ne]=${ProductId}&[filters][categories][id]=${CategoryId}&pagination[start]=0&pagination[limit]=4`);
    // console.log("Single-item : " , data);

    const { categories, setCategories } = useContext(Context);

    useEffect(() => {
        getCateoryProduct();
    });


    function getCateoryProduct() {

        fetch('https://khawarsultan.github.io/Jsdvstore-Api/api')
            .then(response => response.json())
            .then(data => {

                const categorydata = data[CategoryId];
                const products = categorydata?.products;
                setCategories(products);

            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (

        <div>
            <Products ProductHeading={"Related Products"} categoryid={CategoryId} products={categories} PaddingX={'px-0'} />
        </div>
    );
};

export default RelatedProducts;
