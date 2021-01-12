import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import Breadcrumb from "../common/breadcrumb";
import NewProduct from "../common/new-product";
import Filter from "./common/filter";
import FilterBar from "./common/filter-bar";
import ProductListing from "./common/product-listing";
import StickyBox from "react-sticky-box";
import Modal from 'react-responsive-modal';
import { toast } from 'react-toastify';
import { bxIdenfify } from '../../services';


class CollectionSneakerSale extends Component {

    constructor(props) {
        super(props);
        this.state = {
            layoutColumns: 3,
            open: false,
            value: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }



    componentDidMount() {
        //console.log("pageview here", window.Boxever.getID());
        // console.log("CONSTRUCTOR", this.state.rejected)
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color1.css`);
        setTimeout(() => this.setState({ open: true }), 5000)
    }




    LayoutViewClicked(colums) {
        this.setState({
            layoutColumns: colums
        })
    }

    openFilter = () => {
        document.querySelector(".collection-filter").style = "left: -15px";
    }

    onOpenModal = () => {
        //("OPEN MODAL");
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState(
            {
                open: false,
                rejected: true
            }
        );
        //TODO: remove
        localStorage.setItem("bxModalDismissed", "true");
    };


    handleSubmit(event) {
        this.onCloseModal();
        toast.success("We'll keep you up do date on new releases!");
        localStorage.setItem("bxModalDismissed", false);
        bxIdenfify(this.state.value, "Jane", "Ledger");
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        let modalTitle = "SIGN UP AND GET 15% OFF";
        let modalSubTitle = "Never Miss Anything From SpinShop By Signing Up To Our Newsletter.";

        if (localStorage.getItem("bxModalDismissed") === "true") {
            modalTitle = "ALERT ME ABOUT NEW RELEASES";
            modalSubTitle = "Get alerts about new releases so you don't miss out!";
        }

        return (
            <div >

                <Helmet>
                    <title>SpinShop | A Boxever Demo</title>
                </Helmet>



                <section className="section-b-space">
                    <div className="collection-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-3 collection-filter">



                                    <StickyBox offsetTop={20} offsetBottom={20}>
                                        <div>
                                            <Filter init={"trainers"} />
                                            <NewProduct />
                                            <div className="collection-sidebar-banner">
                                                <a href="#">
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/side-banner.png`} className="img-fluid" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </StickyBox>
                                    {/*side-bar banner end here*/}
                                </div>
                                <div className="collection-content col">
                                    <div className="page-main-content ">
                                        <div className="">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="collection-product-wrapper" >
                                                        <div className="product-top-filter">
                                                            <div className="container-fluid p-0">
                                                                <div className="row">
                                                                    <div className="col-xl-12">
                                                                        <div className="filter-main-btn">
                                                                            <span onClick={this.openFilter}
                                                                                className="filter-btn btn btn-theme"><i
                                                                                    className="fa fa-filter"
                                                                                    aria-hidden="true"></i> Filter</span>

                                                                        </div>



                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <FilterBar onLayoutViewClicked={(colmuns) => this.LayoutViewClicked(colmuns)} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/*Products Listing Component*/}
                                                        <ProductListing colSize={this.state.layoutColumns} />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel"></h5>
                            </div>
                            <div className="modal-body">
                                <div className="light-layout">
                                    <div className="container">
                                        <section className="small-section border-section border-top-0">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="subscribe">
                                                        <div>
                                                            <h4> {modalTitle} </h4>
                                                            <p> {modalSubTitle} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <form onSubmit={this.handleSubmit} className="form-inline subscribe-form">
                                                        <div className="form-group mx-sm-6">
                                                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                                                placeholder="Enter your email" value={this.state.value} onChange={this.handleChange} />
                                                        </div>
                                                        <button type="submit" className="btn btn-solid">subscribe</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>


            </div>
        )
    }
}

export default CollectionSneakerSale;





