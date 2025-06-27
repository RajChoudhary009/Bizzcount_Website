import { Link } from "react-router-dom";
import React, { useState } from "react";
import home12 from "../../Assets/images/home12.jpg"
import home11 from "../../Assets/images/home11.jpg"
import logo from "../../Assets/images/logo.webp"
// import Header from "../../components/Header";
import "./index.css";

const AboutHeader = () => {

    return (
        <>
            {/* <Header /> */}
            {/* <header className="bga-header" style={{ position: "fixed", top: 0, zIndex: 1000 }}> */}
            <header className="bga-header">
                <div className="bga-container">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <div className="bga-logo-section">
                            {/* <img src={logo} alt="Blue Growth Advisors Logo" className="bga-logo" /> */}
                            <img className="logo-image" src={logo} alt="BizzCount Logo" />
                            <div className="bga-brand-text">
                                <h1 className="bga-title">BIZZ<span className="bga-span" style={{ color: " #0a3258" }}>COUNT</span></h1>
                                <h2 className="bga-subtitle" style={{ color: " #0a3258" }}>SOLUTIONS</h2>
                            </div>
                        </div>
                    </Link>

                    <nav className="bga-nav">
                        <ul className="bga-nav-links">
                            {/* <li><a href="#services" onClick={() => scrollToSection(serviceContainerRef)}>Services</a></li> */}
                            {/* <li><a href="#process" onClick={() => scrollToSection(processesContainerRef)}>Process</a></li> */}
                            {/* <li><a href="#values" onClick={() => scrollToSection(valueContainerRef)}>Values</a></li> */}
                            <li><a href="/">Home</a></li>
                            <li><a href="/media">Blogs</a></li>
                            <li><a href="/about">About Us</a></li>
                        </ul>
                        <a href="/descoverycall" className="bga-cta-btn1">Schedule a Discovery Call</a>
                    </nav>
                </div>
                <marquee className="heding-bottom-description">Architects of Success, We transform vision into reality</marquee>
            </header>

            <section className="about-header">
                <div className="overlay">
                    <h1>About us</h1>
                    <div className="breadcrumb">
                        <Link className="navigate-link" to="/">Home</Link> / <Link to="/about" className="navigate-link current">About us</Link>
                    </div>
                </div>
            </section>

            {/* content section */}
            <section className="about-content" >
                <div className="about-text">
                    <h2 style={{ textAlign: "left" }}>About Us</h2>
                    <p>
                        At Bizzcount Solutions, we specialize in Corporate Finance, Financial
                        Management, and Corporate Tax, delivering expert guidance and strategic
                        solutions to meet your unique needs. Our team, composed of leading
                        chartered accountants, seasoned bankers, and strategic management
                        professionals, brings a wealth of experience and a holistic approach to
                        financial challenges.
                    </p>
                    <p>
                        Our strength lies in our integrated services, offering tailored solutions
                        that drive growth, optimize capital allocation, and ensure compliance with
                        complex tax regulations. We provide exclusive opportunities through our
                        extensive network, including relationships with top financial institutions,
                        private equity firms, and major banks, positioning you to capitalize on
                        strategic financial advantages.
                    </p>
                    <p>
                        Partner with us to leverage our expertise and achieve your financial goals
                        with precision. At Bizzcount Solutions, we are committed to excellence,
                        fostering enduring relationships, and driving your business towards
                        sustained success.
                    </p>
                    <button className="read-more">READ MORE</button>
                </div>
                <div className="about-images">
                    <img src={home11} style={{ width: "300px", height: "550px" }} alt="Workplace" />
                    <img src={home12} style={{ width: "300px", height: "550px" }} alt="Teamwork" />
                </div>
            </section>

            {/* profile section */}
            <section className="swati-profile">
                <div className="image-card">
                    <div className="tax-expert-banner">
                        <span>TAX<br />EXPERT</span>
                    </div>
                </div>
                <div className="profile-details">
                    <h2>Swati Mehta | Chief Executive Officer | Tax Expert</h2>
                    <p>
                        Swati is a seasoned professional with over 14 years of extensive experience in the finance and tax domain. Her robust expertise encompasses strategic financial planning, international business operations, and comprehensive tax management.
                    </p>
                    <p>
                        Known for her exceptional leadership and analytical skills, Swati has consistently driven business growth and operational excellence within the organizations she has served.
                    </p>
                    <p>
                        Swati has done MBA in Finance and International Business and IFRS certification. She is an approved Tax Agent.
                    </p>
                    <p><strong>Her skills :</strong></p>
                    <ul>
                        <li>Strategic Financial Planning</li>
                        <li>International Business Development</li>
                        <li>Tax Strategy and Compliance</li>
                        <li>Financial Analysis and Reporting</li>
                        <li>Risk Management</li>
                        <li>Leadership and Team Building</li>
                    </ul>
                    <p><strong>Contact Information</strong></p>
                    <p><strong>Mobile:</strong> +971-563096926</p>
                    <p><strong>Email:</strong> swati.mehta@bizzcountsolutions.com</p>
                </div>
            </section>


            <section className="swati-profile">
                <div className="image-card">
                    <div className="tax-expert-banner">
                        <span>CORPORATE <br />FINANCE<br />EXPERT</span>
                    </div>
                </div>
                <div className="profile-details">
                    <h2>Sayeeda Khan | Chief Operating Officer | Corporate Finance Expert</h2>
                    <p>
                        Sayeeda Khan is a ex-banker and a experienced Business Development expert, dedicated to driving growth and creating value through innovative strategies and strategic partnerships, contributing to the long-term success of the organization.
                    </p>
                    <p>
                        She is dynamic and results-driven Business Development Professional with a proven track record of driving growth and expanding market presence.

                    </p>

                    <p><strong>Her key skills includes, :</strong></p>
                    <ul>
                        <li>Building strategic partnerships,</li>
                        <li>Cross-Functional Collaboration</li>
                        <li> Identifying new business opportunities, and Fostering long-term client relationships.</li>
                    </ul>

                    <p><strong>Contact Information</strong></p>
                    <p><strong>Mobile:</strong>+971- 582618422</p>
                    <p><strong>Email:</strong>Email: msj.khan@bizzcountsolutions.com</p>
                </div>
            </section>

            <section className="swati-profile">
                <div className="image-card">
                    <div className="tax-expert-banner">
                        <span> FUND RAISING
                            <br />EXPERT</span>
                    </div>
                </div>
                <div className="profile-details">
                    <h2>Biju John | Business leader | Fund Raising Expert </h2>
                    <p>
                        Biju John is an experienced Head of Corporate and Commercial Banking with a demonstrated history of working in the financial services industry and Having 28 years of Banking experience, Marketing, Business Development, Client Servicing & Team management.

                    </p>
                    <p>
                        He is strong finance professional with a post-graduate in Banking focused in Corporate Finance & Securities Law from University of Wales, Cardiff.

                    </p>
                    <p>
                        He has done Masters in Advanced Management for Bankers (University Of Wales).
                    </p>
                    <p>Skilled in banking, credit analysis, SME banking, Commercial and Corporate Banking and Wealth Management</p>

                    <p><strong>Contact Information</strong></p>
                    <p><strong>Mobile:</strong>+971- 501983724</p>
                    <p><strong>Email:</strong>biju.John@bizzcountsolutions.com</p>
                </div>
            </section>

            <section className="swati-profile">
                <div className="image-card">
                    <div className="tax-expert-banner">
                        <span>
                            VALUATION AND STRUCTURING<br />EXPERT</span>
                    </div>
                </div>
                <div className="profile-details">
                    <h2>Moiz | Business Leader | Valuation and Strategic Structuring Expert </h2>
                    <p>
                        Moiz is a seasoned finance and tax professional with a proven track record of helping businesses build financial resilience through strategic advisory and sharp financial insights. With over a decade of experience spanning the UAE and India, he brings a multifaceted, hands-on approach to complex financial challenges.
                    </p>
                    <p>
                        He began his journey by securing an All India Rank 38 in Chartered Accountancy, later earning the Company Secretary qualification and the CPA (US) designation with top-tier scores. His career reflects a balance of corporate excellence and entrepreneurial vision—having worked with leading organizations and now heading a boutique financial and management consultancy firm.
                    </p>

                    <p>
                        Currently, Moiz leads a specialized practice offering high-impact taxation, corporate finance, and business valuation services to clients across the UAE, India, USA, and other global markets.
                    </p>

                    <p>His core expertise lies in international taxation, accounting standards, valuation methodologies, and strategic structuring. Beyond his technical capabilities, Moiz is deeply committed to talent development—mentoring the next generation of professionals and building high-performing, growth-focused teams.
                    </p>

                </div>
            </section>

            <section className="swati-profile">
                <div className="image-card">
                    <div className="tax-expert-banner">
                        <span>
                            FORENSIC & INVESTIGATIVE
                            <br />  AUDITS EXPERT</span>
                    </div>
                </div>
                <div className="profile-details">
                    <h2>Naman Kothari | Business Leader | Forensic & Investigative Audits Expert</h2>
                    <p>
                        Naman Kothari is a results-driven Chartered Accountant with over 7 years of specialized experience in forensic audits, investigative reviews, and financial risk management. Known for his sharp analytical acumen and unwavering ethical standards, he brings a solutions-oriented approach rooted in precision, transparency, and strategic thinking.
                    </p>
                    <p>
                        His core expertise includes forensic and investigative audits, AI-enabled automation for audit and compliance, and statutory financial audits aimed at strengthening operational controls and minimizing exposure to financial risks.
                    </p>

                    <p>
                        Naman has successfully led high-impact assignments across UAE, India, Kenya, and Ukraine, delivering measurable results in sectors such as:
                    </p>

                    <ul>
                        <li>Transportation – uncovering revenue leakages and operational inefficiencies</li>
                        <li>Healthcare – detecting fund siphoning and fraud mechanisms</li>
                        <li>Manufacturing (Metals) – tracing complex fund flows routed through layered entities</li>
                        <li>Hospitality & Real Estate – executing risk-based internal audits for hotels, resorts, malls, and serviced apartments to mitigate revenue leakage</li>
                        <li>Public Sector – conducting investigative audits for Anti-Corruption Bureaus and Enforcement Directorates</li>
                        <li>Non-Profit Organizations – leading forensic accounting reviews to identify procedural gaps and ensure compliance and accountability in fund management
                        </li>
                    </ul>

                    <p>
                        With a deep commitment to ethical auditing and operational excellence, Naman is recognized as a trusted advisor in the forensic and risk consulting space, dedicated to driving accountability and value across every engagement.
                    </p>

                </div>
            </section>

        </>
    );
};

export default AboutHeader;
