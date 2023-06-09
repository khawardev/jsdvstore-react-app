/* eslint-disable no-extra-semi */
import "./Banner.scss";
import Heroimage from "../../../assets/banner-img.png"
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
function Banner() {

    const scrollBelowToLimit = (limit) => {
        const targetPosition = limit > 0 ? limit : 0;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
        });
    }
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    }
    return (
        <>
            <div className="gradient py-sm-5 py-0" >
                <div className="container content">
                    <div className="row d-flex align-items-center ">
                        <div className="col-12 col-sm-6 text-white   py-5 left text-align ">
                            <span className="Banner-heading">SALES</span>
                            <p>An online store catering to all electronic gadget lovers.Our wide variety of products comes from top-notch brands and offers high quality at competitive prices, Order Now !! </p>
                            <div className=" d-flex align-items-sm-start justify-content-sm-start align-items-center justify-content-center gap-2">
                                <button className="Holo-Button" onClick={scrollToBottom}>READ MORE</button>
                                <button className="Filled-Button " onClick={() => scrollBelowToLimit(750)}>SHOP NOW</button>
                            </div>

                        </div>
                        <div className="col-12 col-sm-6 pt-sm-0 pt-5  right">
                            <div className="d-flex justify-content-center py-sm-3 py-0 ">
                                <img src={Heroimage} className="Banner-img " alt="" />
                            </div>

                        </div>
                    </div>
                </div>

            </div>



        </>


    );
};

export default Banner;
