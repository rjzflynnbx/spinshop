import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import {Link} from 'react-router-dom'

class DetailsTopTabs extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
            quantity: 1,
            stock: 'InStock',
            nav3: null
        }
    }

    render() {
        const { symbol, item, addToCartClicked, BuynowClicked, addToWishlistClicked } = this.props

        var colorsnav = {
            slidesToShow: 6,
            swipeToSlide: true,
            arrows: false,
            dots: false,
            focusOnSelect: true
        };
        return (
            <section className="tab-product m-0">
                <div className="row">
                    <div className="col-sm-12 col-lg-12">
                        <Tabs className="tab-content nav-material">
                            <TabList className="nav nav-tabs nav-material">
                                <Tab className="nav-item">
                                    <span className="nav-link active">
                                        <i className="icofont icofont-ui-home"></i>Nutritional Value</span>
                                    <div className="material-border"></div>
                                </Tab>
                                <Tab className="nav-item">
                                    <span className="nav-link" ><i className="icofont icofont-man-in-glasses"></i>Preparation</span>
                                    <div className="material-border"></div>
                                </Tab>
                                <Tab className="nav-item">
                                    <span className="nav-link" >
                                        <i className="icofont icofont-contacts"></i>Product Payout</span>
                                    <div className="material-border"></div>
                                </Tab>
                                <Tab className="nav-item">
                                    <span className="nav-link" >
                                        <i className="icofont icofont-contacts"></i>Write Review</span>
                                    <div className="material-border"></div>
                                </Tab>
                            </TabList>
                            <TabPanel className="tab-pane fade mt-4 show active">
                                <table className="table table-striped mb-0">
                                    <tbody>
                                    <tr>
                                        <th>Typical Values 	Per 100g</th>
                                        <td></td>

                                    </tr>
                                    <tr>
                                        <th>Energy :</th>
                                        <td>{item.Energy}</td>
                                    </tr>
                                    <tr>
                                        <th>Fat :</th>
                                        <td>{item.Fat}</td>
                                    </tr>
                                    <tr>
                                        <th>Saturates :</th>
                                        <td>{item.Saturates}</td>
                                    </tr>
                                    <tr>
                                        <th>Carbohydrate :</th>
                                        <td>{item.Carbohydrate}</td>
                                    </tr>
                                    <tr>
                                        <th>Sugars :</th>
                                        <td>{item.Sugars}</td>
                                    </tr>
                                    <tr>
                                        <th>Fibre :</th>
                                        <td>{item.Fibre}</td>
                                    </tr>
                                    <tr>
                                        <th>Protein :</th>
                                        <td>{item.Protein}</td>
                                    </tr> 
                                     <tr>
                                        <th>Salt :</th>
                                        <td>{item.Salt}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </TabPanel>
                            <TabPanel>
                                <p className="mt-4 p-0">
                                {item.preparation}
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <div className="mt-4 text-center">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe
                                            src="https://www.youtube.com/embed/BUWzX78Ye_8"
                                            allow="autoplay; encrypted-media"
                                            allowFullScreen>
                                        </iframe>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <form className="theme-form mt-4">
                                    <div className="form-row">
                                        <div className="col-md-12 ">
                                            <div className="media m-0">
                                                <label>Rating</label>
                                                <div className="media-body ml-3">
                                                    <div className="rating three-star">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className="form-control" id="name" placeholder="Enter Your name" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" id="email" placeholder="Email" required />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="review">Review Title</label>
                                            <input type="text" className="form-control" id="review" placeholder="Enter your Review Subjects" required />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="review">Review Title</label>
                                            <textarea className="form-control" placeholder="Wrire Your Testimonial Here" id="exampleFormControlTextarea1" rows="6"></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-solid" type="submit">Submit YOur Review</button>
                                        </div>
                                    </div>
                                </form>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </section>
        )
    }
}

export default DetailsTopTabs;