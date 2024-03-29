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
        var lastProductViewId = localStorage.getItem('bxLastProductView');
        this.state = {
            open: false,
            error: null,
            isLoaded: false,
            bxResponse: {},
            lastProductViewId: lastProductViewId
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

        var rq = {
            "channel": "WEB",
            "language": "en",
            "currencyCode": "EUR",
            "pointOfSale": "spinshop.com",
            "browserId": window.Boxever.getID(),
            "clientKey": window._boxever_settings.client_key,
            "friendlyId": "home_page"
        };

        window.Boxever.callFlows(rq, function (response) {
            self.setState({
                isLoaded: true,
                bxResponse: {
                    "showBlock": response.showSneakerComponent,
                    "mainBanner": response.mainBanner,
                    "sections": response.sections
                }
            });
        }, 'json');
    }



    render() {

        let header;
        if (window.screen.width > 600) {
            header = <HeaderThree logoName={'logo/rsz_spinshop-logo2.png'} />
        } else {
            header = <HeaderOne logoName={'logo/rsz_spinshop-logo2.png'} />
        }

        //dynamic block
        const showBlock = this.state.bxResponse.showBlock;
        let dynamicComponent;
        if (showBlock) {
            dynamicComponent = <TopCollection type={'men'} title={'Best Sellers Near You'} subtitle={'Trainers'} />
        } else {
            dynamicComponent = null;
        }

        //hero banner
        const bxBanner = this.state.bxResponse.mainBanner;
        let bannerClassName = "home1";
        if (bxBanner === "WINTER_RUNNING_ESENTIALLS") {
            bannerClassName = "home2";
        }


        //sections
        const bxSections = this.state.bxResponse.sections;
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



        const mobileBtnStyle = {
            marginTop: 260,
            marginLeft: 220
        };

        const tabletBtnStyle = {
            marginTop: 550,
            marginLeft: 380,
            fontSize: 40
        };

        const getBtnStyle = () => {
            if (window.screen.width > 600) {
                return tabletBtnStyle;
            } else {
                return mobileBtnStyle;
            }
        }


        return (
            <div>
                <Helmet>
                    <title>SpinShop | Boxever Demo</title>
                </Helmet>

                {header}

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
                                                        <a className="btn btn-solid" style={getBtnStyle()}>shop now</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home8">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    {/* <h4>Project Rock 2</h4>
                                                    <h1>Built to break through</h1> */}
                                                    <Link to={`${process.env.PUBLIC_URL}/sneaker-sale/collection`}>
                                                        <a className="btn btn-solid" style={getBtnStyle()}>shop now</a>
                                                    </Link>
                                                </div>
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
                <MultiSlider type={'men'} title={'Trending Products'} trendingId={this.state.lastProductViewId} />


                {/*Promo Aera 2 Section*/}
                {/* <section className=" ratio2_1">
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
                <MultiSlider type={'men'} title={'Shop The Collection'} collectionId={1} /> } */}


                <FooterOne logoName={'logo/rsz_spinshop-logo2.png'} />
            </div>
        )
    }
}


export default SpinShop;