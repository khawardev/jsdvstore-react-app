/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react-hooks/exhaustive-deps
import { useEffect, useState, useContext } from 'react';
import { Context } from '../../utils/AppContext.jsx';
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import Newsletter from "../Footer/Newsletter/Newsletter";
import Footer from "../Footer/Footer";
import App from '../../App';
import "./Home.scss";
import { useNavigate } from "react-router-dom";


const Home = () => {

    const Navigate = useNavigate();

    //Full stack video
    const { categories, setCategories } = useContext(Context);
    const { products, setProducts } = useContext(Context);
    const { categoryid, setCategoryid } = useContext(Context);
    useEffect(() => {
        getProducts();
    });
    useEffect(() => {
        fetch('https://khawarsultan.github.io/Jsdvstore-Api/api')
            .then(response => response.json())
            .then(data => {
                setCategoryid(data.id)
                setCategories(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

    });


    function getProducts() {
        fetch('https://khawarsultan.github.io/Jsdvstore-Api/api')
            .then(response => response.json())
            .then(data => {
                // const category = data.find(data => data.id === 0);
                const combinedData = [];
                data.map(category => {
                    const products = category?.products;
                    combinedData.push(...products);
                });
                // const data1 = data[0]?.products;
                // const data2 = data[1]?.products;
                // const data3 = data[2]?.products;
                // const data4 = data[3]?.products;

                // const combinedData = [...data1, ...data2, ...data3, ...data4];

                setProducts(combinedData);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            
            <Banner />
            <Category categories={categories} />
            <Products ProductHeading={"Popular Products"} products={products} />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;



//Strapi Crash Course video

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await axios.get(
    //                 process.env.REACT_APP_API_URL + "/categories?populate=*", {
    //                 header: { Authorization: "bearer" + process.env.REACT_APP_API_TOKEN, },
    //             });
    //             console.log(data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     };
    //     fetchData();

    // }, [])