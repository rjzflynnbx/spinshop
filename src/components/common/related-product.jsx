import React, {Component} from 'react';
import Slider from 'react-slick';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import {getBestSeller} from "../../services";
import {addToCart, addToWishlist, addToCompare} from "../../actions";
import ProductItem from '../layouts/common/product-item';
import { getCollectionProducts, getRelatedItems, getRelatedProducts } from '../../services/index';


class RelatedProduct extends Component {
    render (){
        const {items, symbol, addToCart, addToWishlist, addToCompare, itemId} = this.props;


        return (
            <section className="section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-12 product-related">
                            <h2>related products</h2>
                        </div>
                    </div>
                    <div className="row search-product">
                        { items.slice(0, 6).map((product, index ) =>
                            <div key={index} className="col-xl-2 col-md-4 col-sm-6">
                                <ProductItem product={product} symbol={symbol}
                                             onAddToCompareClicked={() => addToCompare(product)}
                                             onAddToWishlistClicked={() => addToWishlist(product)}
                                             onAddToCartClicked={() => addToCart(product, 1)} key={index} />
                            </div>)
                        }
                    </div>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
         //items: getCollectionProducts(state.data.products,1),
        items: getRelatedProducts(state.data.products,42),
        symbol: state.data.symbol
    }
}

export default connect(mapStateToProps, {addToCart, addToWishlist, addToCompare})(RelatedProduct);
