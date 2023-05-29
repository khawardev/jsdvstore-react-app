/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
import "./Category.scss";
import { useNavigate } from "react-router-dom";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Category = ({ categories }) => {
    const Navigate = useNavigate();
    return (

        <>
            <div className="container">
                <div className="py-4">
                    <span className="sec-heading text-capitalize"> <b>Categories</b>
                    </span>
                </div>
                <div className="row">
                    {categories?.map((category) => (
                        <div key={category?.id} className="col-lg-3 col-md-4 col-sm-6 col-12 py-3 " onClick={() => Navigate(`category/${category.id}`)} >
                            <div class="Parent-category-Image-Hover bottom-top">
                                <img src={category?.img} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Category;
