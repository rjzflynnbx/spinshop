import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IntlActions } from 'react-redux-multilingual'
import Pace from 'react-pace-progress'

// Import custom components
import store from '../../../store';
import NavBar from "./common/navbar";
import SideBar from "./common/sidebar";
import CartContainer from "./../../../containers/CartContainer";
import TopBar from "./common/topbar";
import LogoImage from "./common/logo";
import { changeCurrency } from '../../../actions'
import { connect } from "react-redux";
import { bxStartAsAnon, bxStartAsJaneLedger } from '../../../services';
import { bxCloseSession, bxView } from '../../../services/index';
import { toast } from 'react-toastify';

class HeaderOne extends Component {

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

		this.setState({ open: true });
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

	sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

	boxeverStartAsAnon = () => {
		localStorage.setItem('bxLastProductView', 0)
		bxStartAsAnon();
		toast.success("Started as Anon");
		alert('Hit OK and the page with be automatically reloaded in 3 seconds after that');
		this.sleep(3000).then(() => {
			window.location.reload(false); 
        })
	}

	boxeverCloseSession = () => {
		bxCloseSession();
		toast.success("Closed Session");
	}

	boxeverStartAsJaneLedger = () => {
		bxStartAsJaneLedger();
	}

	render() {

		const ulStyle = {
			fontSize: 170
		};

		return (
			<div>
				<header id="sticky" className="sticky">
					{this.state.isLoading ? <Pace color="#27ae60" /> : null}
					<div className="mobile-fix-option"></div>
					{/*Top Header Component*/}
					<TopBar />

					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<div className="main-menu">
									<div className="menu-left">
										<div className="navbar">
											<a href="javascript:void(0)" onClick={this.openNav}>
												<div className="bar-style"> <i className="fa fa-bars sidebar-bar" aria-hidden="true"></i></div>
											</a>
											{/*SideBar Navigation Component*/}
											<SideBar />
										</div>
										<div className="brand-logo">
											<LogoImage logo={this.props.logoName} />
										</div>
									</div>
									<div className="menu-right pull-right">
										{/*Top Navigation Bar Component*/}
										{/* <NavBar /> */}

										<div>
											<div className="icon-nav">
												<ul style={ulStyle} >
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
																{/* <li><a href="" onClick={this.boxeverStartAsJaneLedger}>Start as Jane</a> </li> */}
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
)(HeaderOne);