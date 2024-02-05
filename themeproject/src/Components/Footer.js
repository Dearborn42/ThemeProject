import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useContext} from 'react'
import {ThemeContextWrapper} from './ThemeContext';

const Footer = () => {
    const {theme} = useContext(ThemeContextWrapper);
    return (
        <footer className={`site-footer footer-${theme}`}>
            <div className="container">
                <div className="row">
                <div className="col-sm-12 col-md-6">
                    <h6 className={`h6-${theme}`}>About</h6>
                    <p className="text-justify">Apollo Landing Mission</p>
                </div>

                <div className="col-xs-6 col-md-3">
                    <h6 className={`h6-${theme}`}>Categories</h6>
                    <ul className="footer-links">
                    </ul>
                </div>

                <div className="col-xs-6 col-md-3">
                    <h6 className={`h6-${theme}`}>Quick Links</h6>
                    <ul className="footer-links">
                    </ul>
                </div>
                </div>
                <hr/>
            </div>
            <div className="container">
                <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                    <p className="copyright-text">Andrew Murphy
                    </p>
                </div>

                <div className="col-md-4 col-sm-6 col-xs-12">
                    <ul className="social-icons"> 
                    </ul>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer