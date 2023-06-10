/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { MdClose } from 'react-icons/md';
import "./Search.scss";
import Singleproduct from '../../../assets/products/headphone-prod-5.webp';
import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Search = ({ setShowSearch, setButtonVisible }) => {

    const Navigate = useNavigate();
    const [data, setData] = useState([])
    const [records, setRecords] = useState([])

    useEffect(() => {
        fetch('https://khawarsultan.github.io/Jsdvstore-Api/api')
            .then(response => response.json())
            .then(data => {
                let combinedData = [];
                data.map(category => {
                    const products = category.products;
                    combinedData.push(...products);
                });

                setData(combinedData);
                setRecords(combinedData);
            })
            .catch(err => console.log(err));
    }, []);

    const Filter = (event) => {
        const searchText = event.target.value.toLowerCase();
        setRecords(data.filter(product => product.title.toLowerCase().includes(searchText)))
    }
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

    return (

        <div className="search-modal ">
            <div className="form-field">
                <input type="text" autoFocus placeholder="Search Products"
                    // value={Query}
                    // onChange={handleSearch}
                    onChange={Filter}
                />
                <MdClose className='pointer' onClick={() => { setShowSearch(false); setButtonVisible(true); }} />
            </div>
            <div className='pointer scrollable-div-search'>

                {records.map((item, index) => (
                    <div key={index} className='container-fluid cart-products '>
                        <div className="container ">
                            <div className="row ">
                                <div className="col-12 d-flex gap-2 align-items-center my-3 " onClick={() => {
                                    findCategoryIdByProductId(item.title);
                                    setShowSearch(false);
                                }}>
                                    <div className="">
                                        <img src={item.img} width={100} style={{ backgroundColor: '#eff4ee' }} alt="" />
                                    </div>
                                    <div className="my-0 ">
                                        <div className='para-dots-desc'>
                                            <span style={{ fontSize: '18px' }}> <b>  {item.title}  </b>    </span>
                                        </div>
                                        <div className='para-dots-desc'>
                                            <span style={{ fontSize: '16px' }}> {item.desc}    </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='m-0' />
                        </div>
                    </div>
                ))}


            </div>

        </div>



    );
};

export default Search;
// Perform search and filter the JSON data based on the search query
    // const searchResults = data.filter((category) =>
    //     category.products.title.toLowerCase().includes(searchQuery.toLowerCase())
    // );
    // let { data } = useFetch(`https://khawarsultan.github.io/Jsdvstore-Api/api/products?populate=*&filters[title][$contains]=${query}`);
    // const [query, setQuery] = useState("");
    // const onChange = (e) => {
    //     setQuery(e.target.value);
    // };
    // let { data } = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`);
    // console.log("Search Data . . . : ", data)
