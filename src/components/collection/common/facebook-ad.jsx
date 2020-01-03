import React, {Component} from 'react';
import { connect } from 'react-redux'
import {getVisibleproducts, bxStartAsRF} from '../../../services';
import { Link, Redirect } from 'react-router-dom';

class FacebookAd extends Component {


    constructor(props) {
        super(props);
        console.log(props)
    }


    render (){

        var handleClick = () => {
            bxStartAsRF();
            this.props.history.push(`/`);
            localStorage.setItem("bxModalDismissed", "false")
            // window.location.href = {`${process.env.PUBLIC_URL}`} 
        }

        return (
            <div >
                    <img onClick={handleClick} src="https://i.imgur.com/yfp0uYf.png" alt="" className="img-fluid" />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    
})

export default connect(mapStateToProps)(FacebookAd);