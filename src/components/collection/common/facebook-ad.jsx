import React, {Component} from 'react';
import { connect } from 'react-redux'
import {getVisibleproducts} from '../../../services';
import { Link } from 'react-router-dom';

class FacebookAd extends Component {


    constructor(props) {
        super(props);
        console.log(props)
    }

    render (){
        return (
            <div>
                <Link to={`${process.env.PUBLIC_URL}`}>  
                    <img src="https://i.imgur.com/yfp0uYf.png" alt="" className="img-fluid" />
                </Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    
})

export default connect(mapStateToProps)(FacebookAd);