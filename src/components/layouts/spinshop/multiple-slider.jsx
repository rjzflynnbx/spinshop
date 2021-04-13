import React, { Component } from 'react';
import Slider from "react-slick"
import { connect } from "react-redux";

// import Custom Components
import Breadcrumb from "../../common/breadcrumb";
import MultiSliderItem from "./multi-slider-item"
import {
    getBestSellerProducts,
    getNewProducts,
    getCollectionProducts,
    bxIsClientKeyOurSpinShop,
    getPersonalizedProducts
} from "../../../services";

 
const axios = require('axios');

// This Component is used for a scripted Amazon Pesonalize Demo Story
class MultipleSlider extends Component {

    
    render() {

        const { newProducts, featureProducts, collectionProducts, personalizedProducts,
            bestSeller, onSell, symbol, title, collectionId, trendingId } = this.props;

        let items = [];
        if (trendingId !== undefined || trendingId == '0') {
            if(bxIsClientKeyOurSpinShop()){
                console.log('Fetched Personalize Recommendations...')
            }
            items = personalizedProducts;
        }
        else if (collectionId !== undefined) {
            items = collectionProducts;
        } else {
            items = newProducts;
        }

        if (items == undefined) {
            items = newProducts;
        }

        if(bxIsClientKeyOurSpinShop()){
            items.forEach((item) => {
                console.log("Item ID: " + item.id + " | Item Category: " + item.primaryCategory
                    + "| Item Name: " + item.name);
            });
        }

        return (
            <div>
                <section className="">
                    <div className="container">
                        <div className="row multiple-slider">
                            <div className="col-lg-3 col-sm-6">
                                <div className="theme-card">
                                    <h5 className="title-border">{title}</h5>
                                    <MultiSliderItem items={items} NoOfProducts={3} symbol={symbol} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}


function mapStateToProps(state, ownProps) {
    return {
        collectionProducts: getCollectionProducts(state.data.products, 1),
        personalizedProducts: getPersonalizedProducts(state.data.products, ownProps.trendingId),
        newProducts: getNewProducts(state.data.products, ownProps.type),
        featureProducts: getNewProducts(state.data.products, ownProps.type).reverse(),
        bestSeller: getBestSellerProducts(state.data.products, ownProps.type),
        onSell: getBestSellerProducts(state.data.products, ownProps.type).reverse(),
        symbol: state.data.symbol,
        axiosDone: false,
    };
}


export default connect(
    mapStateToProps
)(MultipleSlider)