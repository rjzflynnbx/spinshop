import React, {Component} from 'react';
import { connect } from 'react-redux'
import {getVisibleproducts} from '../../../services';
import { Link } from 'react-router-dom';

//TODO delete this and make facebook-ad a proper component with props for ims src and href...
class FacebookAd2 extends Component {


    constructor(props) {
        super(props);
        //console.log(props)
    }


    render (){
        return (
            <div>
                <Link to={`${process.env.PUBLIC_URL}/sneaker-sale/collection`}>  
                    <img src="https://i.imgur.com/hDJspBE.jpg" alt="" className="img-fluid" />
                </Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    
})

export default connect(mapStateToProps)(FacebookAd2);