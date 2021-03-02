import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom'

const axios = require('axios');


class MultiSliderItem extends Component {


    

    render() {
        const { items, symbol, NoOfProducts } = this.props;

        const getPStyle = (itemId) => {
            if (itemId % 2 == 0) {
                return redP;
            } else {
                return greenP;
            }
        }

        const getSocialProofMessage = (itemId) => {
            if (itemId % 2 == 0) {
                var randNum = Math.floor(Math.random() * 5) + 1;
                return "Only " + randNum + " left in stock - order soon.";
            } else {
                var randNum = Math.floor(Math.random() * 5) + 1;
                return randNum + " others are looking at this item";
            }
        }


       

        

        const divStyle = {
            marginTop: 30,
            fontSize: 1
        };

        const redP = {
            fontSize: 10,
            color: 'red'
        };

        const greenP = {
            fontSize: 10,
            color: 'green'
        };

        var arrays = [];
        while (items.length > 0) {
            arrays.push(items.splice(0, NoOfProducts));
        }

        return (
            <Slider className="offer-slider slide-1">
                {arrays.map((products, index) =>
                    <div key={index}>
                        {products.map((product, i) =>
                            <div className="media" key={i}>
                                <Link to={`${process.env.PUBLIC_URL}/no-sidebar/product/${product.id}`}>
                                    <img className="img-fluid" src={
                                        product.variants ?
                                            product.variants[0].images
                                            : product.pictures[0]
                                    } alt="" />
                                </Link>
                                <div className="media-body align-self-center">
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <Link to={`${process.env.PUBLIC_URL}/no-sidebar/product/${product.id}`}><h6>{product.name}</h6></Link>
                                    <h4>{symbol}{product.price - (product.price * product.discount / 100)}
                                        <del><span className="money">{symbol}{product.price}</span></del></h4>

                                    {/*  */}

                                    <div style={divStyle}>
                                        <p style={getPStyle(product.id)}>{getSocialProofMessage(product.id)}</p>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                )}
            </Slider>
        )
    }
}

export default MultiSliderItem;
