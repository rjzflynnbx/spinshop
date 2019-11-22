import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import ThemeSettings from "../../common/theme-settings"

// Import custom components
import {
    svgFreeShipping,
    svgservice,
    svgoffer,
    svgpayment
} from "../../../services/script"
import TopCollection from "../common/collection"
import NewProduct from "../../common/new-product"
import Instagram from "../common/instagram"
import HeaderOne from "../../common/headers/header-one"
import HeaderTwo from "../../common/headers/header-two"
import HeaderThree from "../../common/headers/header-three"
import HeaderFour from "../../common/headers/header-four"
import HeaderFive from "../../common/headers/header-five"

import FooterOne from "../../common/footers/footer-one"
import BlogSection from "../common/blogsection";
import MultiSlider from "./multiple-slider";
import { bxView } from '../../../services/index';

class SpinShop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            error: null,
            isLoaded: false,
            bxResponse: {}
        }
    }
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    componentDidMount() {
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color1.css`);
        bxView('/');
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        bxResponse: {
                            "showBlock": true
                        }
                    });
                    console.log(this.state.bxResponse);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {

        const showBlock = this.state.bxResponse.showBlock;
        let dynamicComponent;
        if(showBlock){
            dynamicComponent = <TopCollection type={'men'} title={'Best Sellers'} subtitle={'Trainers'} />
        } else {
            dynamicComponent = null;
        }

        return (
            <div>
                <Helmet>
                    <title>SpinShop | Boxever Demo</title>
                </Helmet>
                <HeaderThree logoName={'logo/logo2.png'} />

                {/*Slider Promo Area 1*/}
                <section className="p-0">
                    <Slider className="slide-1 home-slider">
                        <div>
                            <div className="home home1">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>Nike Air Force 1 GORE-TEX</h4>
                                                    <h1>waterproof technology</h1><a href="#" className="btn btn-solid">shop now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home2">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>Project Rock 2</h4>
                                                    <h1>Built to break through</h1><a href="#" className="btn btn-solid">shop now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </section>

                {/*Catagories Section*/}
                <section className="catagories">
                    <div className="container category-button">
                        <section className="section-b-space">
                            <div className="row partition1">
                                <div className="col"><a href="#" className="btn btn-outline btn-block">Men's footwear</a></div>
                                <div className="col"><a href="#" className="btn btn-outline btn-block">Women's footwear</a></div>
                                <div className="col"><a href="#" className="btn btn-outline btn-block">Kids's footwear</a></div>
                                <div className="col"><a href="#" className="btn btn-outline btn-block">Men's Clothing</a></div>
                                <div className="col"><a href="#" className="btn btn-outline btn-block">Women's  Clothing</a></div>
                                <div className="col"><a href="#" className="btn btn-outline btn-block">Kids'sClothing</a></div>
                            </div>
                        </section>
                    </div>
                </section>

                {/*Dynamic Product slider*/}
                {dynamicComponent}
  
                {/*Trending Products Section*/}
                <MultiSlider type={'men'} title={'Trending Products'} />


                {/*Promo Aera 2 Section*/}
                <section className=" ratio2_1">
                    <div className="container">
                        <div className="row partition4">
                            <div className="col-lg-3 col-md-6">
                                <a href="#">
                                    <div className="collection-banner p-left">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/1.jpg`}
                                                className="img-fluid blur-up lazyload bg-img" />
                                        </div>
                                        <div className="contain-banner banner-1">
                                            <div>
                                                <h4>ADIDAS</h4>
                                                <h2>UEFA EURO2020™ collection</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </section>
                <MultiSlider type={'men'} title={'Shop The Collection'} collectionId={1} />


                <FooterOne logoName={'logo/logo2.png'} />
            </div>
        )
    }
}


export default SpinShop;