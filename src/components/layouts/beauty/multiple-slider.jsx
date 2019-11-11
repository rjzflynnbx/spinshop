import React, {Component} from 'react';
import Slider from "react-slick"
import {connect} from "react-redux";

// import Custom Components
import Breadcrumb from "../../common/breadcrumb";
import MultiSliderItem from "./multi-slider-item"
import {
    getBestSellerProducts,
    getNewProducts,
} from "../../../services";


class MultipleSlider extends Component {


    render (){
        const {newProducts, featureProducts, bestSeller, onSell, symbol, title} = this.props;
        return (
            <div>
                <section className="">
                    <div className="container">
                        <div className="row multiple-slider">
                            <div className="col-lg-3 col-sm-6">
                                <div className="theme-card">
                                    <h5 className="title-border">{title}</h5>
                                    <MultiSliderItem items={newProducts} NoOfProducts={3} symbol={symbol} />
                                </div>
                            </div>                                                  
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    newProducts: getNewProducts(state.data.products, ownProps.type),
    featureProducts: getNewProducts(state.data.products, ownProps.type).reverse(),
    bestSeller: getBestSellerProducts(state.data.products, ownProps.type),
    onSell: getBestSellerProducts(state.data.products, ownProps.type).reverse(),
    symbol: state.data.symbol,
})

export default connect(
    mapStateToProps
)(MultipleSlider)