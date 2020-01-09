import React, {Component} from 'react';
import { withTranslate } from 'react-redux-multilingual'

// Custom Components
import HeaderOne from './common/headers/header-one';
import HeaderTwo from './common/headers/header-two';
import HeaderThree from './common/headers/header-three';

import FooterOne from "./common/footers/footer-one";
import FooterTwo from "./common/footers/footer-two";
import FooterThree from "./common/footers/footer-three";

// ThemeSettings
import ThemeSettings from "./common/theme-settings"
import { ToastContainer } from 'react-toastify';



class App extends Component {

    render() {
        return (
            <div>
                <HeaderOne logoName={'logo/spinshop-logo2.png'} />
                {this.props.children}
                <FooterOne logoName={'logo.png'}/>

                <ToastContainer/>
            </div>
        );
    }
}

export default withTranslate(App);
