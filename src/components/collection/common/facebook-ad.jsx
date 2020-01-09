import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getVisibleproducts, bxStartAsRF } from '../../../services';
import { Link, Redirect } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


class FacebookAd extends Component {


    constructor(props) {
        super(props);
        console.log(props)
    }

    sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }


    render() {


        var handleClick = () => {
            bxStartAsRF();
            this.LoadingBar.continuousStart();
            this.sleep(3000).then(() => {
                this.LoadingBar.complete();
                this.props.history.push(`/`);
            })
            localStorage.setItem("bxModalDismissed", "false");
        }

        return (
            <div>

                <LoadingBar
                    height={3}
                    color='#f11946'
                    onRef={ref => (this.LoadingBar = ref)}
                />

                <img onClick={handleClick} src="https://i.imgur.com/yfp0uYf.png" alt="" className="img-fluid" />
            </div>
        )
    }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(FacebookAd);