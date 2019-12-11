import React, { Component } from 'react';
import Slider from 'react-slick';

import {Slider6} from "../../../services/script";

class LogoBlock extends Component {

    render (){
        return (
            <section className="section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Slider {...Slider6} className="slide-6 slider-arrow">
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/adidas.png`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/nike.png`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/champion.png`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/underarmour.png`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/asics.png`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/converse.png`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/ellesse.png`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/asics.png`} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default LogoBlock;