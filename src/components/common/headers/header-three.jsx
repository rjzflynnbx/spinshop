import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IntlActions } from 'react-redux-multilingual'
import Pace from 'react-pace-progress'

// Import custom components
import store from '../../../store';
import NavBar from "./common/navbar";
import SideBar from "./common/sidebar";
import CartContainer from "./../../../containers/CartContainer";
import TopBarDark from "./common/topbar-dark";
import { changeCurrency } from '../../../actions'
import { connect } from "react-redux";
import LogoImage from "./common/logo";
import { bxStartAsAnon } from '../../../services';
import { toast } from 'react-toastify';
import { bxStartAsJaneLedger, bxCloseSession } from '../../../services/index';

class HeaderThree extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        }
    }

    /*=====================
         Pre loader
         ==========================*/
    componentDidMount() {
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);
    }

    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        if (number >= 300) {
            if (window.innerWidth < 576) {
                document.getElementById("sticky").classList.remove('fixed');
            } else
                document.getElementById("sticky").classList.add('fixed');
        } else {
            document.getElementById("sticky").classList.remove('fixed');
        }
    }

    changeLanguage(lang) {
        store.dispatch(IntlActions.setLocale(lang))
    }

    openNav() {
        var openmyslide = document.getElementById("mySidenav");
        if (openmyslide) {
            openmyslide.classList.add('open-side')
        }
    }
    openSearch() {
        document.getElementById("search-overlay").style.display = "block";
    }

    closeSearch() {
        document.getElementById("search-overlay").style.display = "none";
    }

    load = () => {
        this.setState({ isLoading: true });
        fetch().then(() => {
            // deal with data fetched
            this.setState({ isLoading: false })
        })
    };

    boxeverStartAsAnon = () => {
        bxStartAsAnon();
        toast.success("Started as Anon");
    }

    boxeverCloseSession = () => {
        bxCloseSession();
        toast.success("Closed Session");
    }

    boxeverStartAsJaneLedger = () => {
        bxStartAsJaneLedger();
    }

    render() {

        return (
            <div>
                <header id="sticky" className="sticky header-2 header-6">
                    {this.state.isLoading ? <Pace color="#27ae60" /> : null}
                    <div className="mobile-fix-option"></div>
                    {/*Top Header Component*/}
                    <TopBarDark />

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="main-menu border-section border-top-0">
                                    <div className="brand-logo layout2-logo">
                                        <LogoImage logo={this.props.logoName} />
                                    </div>
                                    <div>
                                        <form className="form_search" role="form">
                                            <input id="query search-autocomplete" type="search"
                                                placeholder="Find the best for your pet..."
                                                className="nav-search nav-search-field" aria-expanded="true" />
                                            <button type="submit" name="nav-submit-button" className="btn-search">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </form>
                                    </div>
                                    <div className="menu-right pull-right">
                                        <div>
                                            <div className="icon-nav">
                                                <ul>
                                                    <li className="onhover-div mobile-search">
                                                        <div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/search.png`} onClick={this.openSearch} className="img-fluid" alt="" />
                                                            <i className="fa fa-search" onClick={this.openSearch}></i></div>
                                                    </li>
                                                    <li className="onhover-div mobile-setting">
                                                        <div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/setting.png`} className="img-fluid" alt="" />
                                                            <i className="fa fa-cog"></i></div>
                                                        <div className="show-div setting">
                                                            <h6>Shortcuts</h6>
                                                            <ul className="list-inline">
                                                                <Link to={`${process.env.PUBLIC_URL}/facebookAd1`}>
                                                                    <li><a>Facebook Ad 1</a></li>
                                                                </Link>
                                                                <Link to={`${process.env.PUBLIC_URL}/facebookAd2`}>
                                                                    <li><a>Facebook Ad 2</a></li>
                                                                </Link>
                                                                <li><a onClick={this.boxeverStartAsAnon}>Start as anon</a></li>
                                                                <li><a onClick={this.boxeverCloseSession}>Close Session</a> </li>
                                                                <li><a href="" onClick={this.boxeverStartAsJaneLedger}>Start as Jane</a> </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    {/*Header Cart Component */}
                                                    <CartContainer />
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="main-nav-center">
                                    <NavBar />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div id="search-overlay" className="search-overlay">
                    <div>
                        <span className="closebtn" onClick={this.closeSearch} title="Close Overlay">×</span>
                        <div className="overlay-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Search a Product" />
                                            </div>
                                            <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null,
    { changeCurrency }
)(HeaderThree);