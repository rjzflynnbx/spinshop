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
    getPersonalizedProducts
} from "../../../services";

const axios = require('axios');


class MultipleSlider extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         axiosDone: false
    //     }
    // }


    // componentWillMount() {
    //     var self = this;
    //     axios.get('https://jsonplaceholder.typicode.com/todos/1',)
    //         .then(function (response) {
    //             console.log('componentWillMount');
    //             self.state = {
    //                 axiosDone: true,
    //             };
    //         })
    //         .catch(function (error) {
    //             //console.log(error);
    //         });
    // }



    render() {

        const { newProducts, featureProducts, collectionProducts, personalizedProducts,
            bestSeller, onSell, symbol, title, collectionId, trendingId } = this.props;

        let items = [];
        if (trendingId !== undefined || trendingId == '0') {
            console.log('Fetched Personalize Recommendations...')
            items = personalizedProducts;
        }
        else if (collectionId !== undefined) {
            items = collectionProducts;
        } else {
            items = newProducts;
        }

        items.forEach((item) => {
            console.log("Item ID: " + item.id + " | Item Category: " + item.primaryCategory 
            + "| Item Name: " + item.name );
        });


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
    console.log();
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

// const mapStateToProps = (state, ownProps) => (
//     {
//     collectionProducts: getCollectionProducts(state.data.products, 1),
//     personalizedProducts: getPersonalizedProducts(state.data.products, ownProps.trendingId),
//     newProducts: getNewProducts(state.data.products, ownProps.type),
//     featureProducts: getNewProducts(state.data.products, ownProps.type).reverse(),
//     bestSeller: getBestSellerProducts(state.data.products, ownProps.type),
//     onSell: getBestSellerProducts(state.data.products, ownProps.type).reverse(),
//     symbol: state.data.symbol,
// })

export default connect(
    mapStateToProps
)(MultipleSlider)