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
import LogoBlock from '../common/logo-block';
import SpecialProducts from '../electronic/special-products';


const axios = require('axios');


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



    componentWillMount() {
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color1.css`);
        bxView('/');

        var self = this;
        axios.post('https://api.boxever.com/v2/callFlows/14501789-c24a-4310-885b-cf237acdb3a8', {
            channel: "WEB",
            browserId: window.Boxever.getID(),
            clientKey: "pqsSIOPAxhMC9zJLJSZNFURPNqALIFwd",
            pointOfSale: "spinshop.com"
        })
            .then(function (response) {
                self.setState({
                    isLoaded: true,
                    bxResponse: {
                        "showBlock": response.data.showSneakerComponent,
                        "mainBanner": response.data.mainBanner,
                        "sections": response.data.sections
                    }
                });
            })
            .catch(function (error) {
                console.log(error);
            });

    }



    render() {

        console.log(this.state.bxResponse);

        // Figure out display from Boxever response

        //dynamic block
        const showBlock = this.state.bxResponse.showBlock;
        let dynamicComponent;
        if (showBlock) {
            dynamicComponent = <TopCollection type={'men'} title={'Best Sellers Near You'} subtitle={'Trainers'} />
           // dynamicComponent = <SpecialProducts type={'men'} />         
        } else {
            dynamicComponent = null;
        }

        //banner
        const bxBanner = this.state.bxResponse.mainBanner;
        let bannerClassName = "home1";
        if (bxBanner === "WINTER_RUNNING_ESENTIALLS") {
            bannerClassName = "home2";
        }


        //sections
        const bxSections = this.state.bxResponse.sections;
        console.log("bxSections", bxSections)
        let dymanicSections =
            <section className="catagories">
                <div className="container category-button">
                    <section className="section-b-space">
                        <div className="row partition1">
                            <div className="col"><a href="/sneaker-sale/collection" className="btn btn-outline btn-block">Men's footwear</a></div>
                            <div className="col"><a href="#" className="btn btn-outline btn-block">Women's footwear</a></div>
                            <div className="col"><a href="#" className="btn btn-outline btn-block">Kids's footwear</a></div>
                            <div className="col"><a href="#" className="btn btn-outline btn-block">Men's Clothing</a></div>
                            <div className="col"><a href="#" className="btn btn-outline btn-block">Women's  Clothing</a></div>
                            <div className="col"><a href="#" className="btn btn-outline btn-block">Kids'sClothing</a></div>
                        </div>
                    </section>
                </div>
            </section>
        if (bxSections === "WOMENS") {
            dymanicSections = <section className="catagories">
                <div className="container category-button">
                    <section className="section-b-space">
                        <div className="row partition1">
                            <div className="col"><a href="/sneaker-sale/collection" className="btn btn-outline btn-block">Women's footwear</a></div>
                            <div className="col"><a href="#" className="btn btn-outline btn-block">Women's Clothing</a></div>
                            <div className="col"><a href="#" className="btn btn-outline btn-block">Women's Accessories</a></div>
                            <div className="col"><a href="#" className="btn btn-outline btn-block">Men's</a></div>
                            <div className="col"><a href="#" className="btn btn-outline btn-block">Kid's </a></div>
                        </div>
                    </section>
                </div>
            </section>
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
                            <div className={'home ' + bannerClassName}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4></h4>
                                                    <h1></h1>
                                                    <Link to={`${process.env.PUBLIC_URL}/sneaker-sale/collection`}>
                                                        <a className="btn btn-solid">shop now</a>
                                                    </Link>
                                                </div>
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

                {/*Logo's*/}
                <LogoBlock />


                {/*Catagories Section*/}
                {dymanicSections}

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