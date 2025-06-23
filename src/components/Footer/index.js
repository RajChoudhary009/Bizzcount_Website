import React from 'react';
import './index.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="bga-logo-section">
                    {/* <img src={logo} alt="Blue Growth Advisors Logo" className="bga-logo" /> */}
                    <img className="logo-image" src="https://bizzcountsolutions.com/images/logo.png" alt="BizzCount Logo" />
                    <div className="bga-brand-text">
                        <h1 className="bga-title">BIZZ<span className="bga-span" style={{ color: " #0a3258" }}>COUNT</span></h1>
                        <h2 className="bga-subtitle" style={{ color: " #0a3258" }}>SOLUTIONS</h2>
                    </div>
                </div>

                <nav className="footer-nav-collum">
                    <div className="office-section">
                        <h3>Our Offices:</h3>
                        <div className="office-links">
                            <a href="#">1. Dubai, UAE</a>
                            <a href="#">2. Delhi, India</a>
                            <a href="#">3. Kerala, India</a>
                        </div>
                    </div>
                </nav>

                <nav className="footer-nav-collum">
                    <div className="office-section">
                        <h3>Associate Offices:</h3>
                        <div className="office-links">
                            <a href="#">1. KSA</a>
                            <a href="#">2. Qatar</a>
                            <a href="#">3. Bahrain</a>
                            <a href="#">4. Oman</a>
                            <a href="#">5. USA</a>
                            <a href="#">6. Ahmedabad, India</a>
                        </div>
                    </div>
                </nav>
            </div>

            <nav className="footer-nav">
                <a href="#services">Services</a>
                <a href="#process">Process</a>
                <a href="#values">Values</a>
                <a href="#contact">Contact</a>
            </nav>

            <hr />
            <div className="footer-bottom">
                <span>© 2023 Blue Growth Advisors. All rights reserved.</span>
                <div className="footer-links">
                    <a href="#credits">Site Credits</a>
                    <a href="#privacy">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
