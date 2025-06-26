import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
// import { SERVER_API_URL } from '../../server/server'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FiPlus, FiX } from 'react-icons/fi';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import home1 from "../../Assets/images/home1.jpg"
import home2 from "../../Assets/images/home2.jpg"
import fermimage from "../../Assets/images/fermimage.jpg"
import logo from "../../Assets/images/logo.webp"


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "../../components/Footer";

import "./index.css";


const slide = [
    {
        heading: "Tax Advisory",
        title: "Our Tax Advisory service is focused on helping businesses navigate the complex world of taxation—ensuring compliance while optimizing tax efficiency. We support clients across various industries with tailored strategies that align with their business objectives.",
        img: require('../../Assets/images/slide3.jpg'),
    },
    {
        heading: "Deal Advisory",
        title: "Our Deal Advisory service provides strategic guidance throughout the lifecycle of a transaction or corporate restructuring. We help you navigate complexity, mitigate risks, and unlock value at every stage of the deal process.",
        img: require('../../Assets/images/DealAdvisory.jpg'),
    },
    {
        heading: "Fundraising",
        title: "Our Fundraising Advisory service supports businesses in securing the capital required for growth, expansion, or strategic transformation. We assist at every stage of the fundraising journey—ensuring the right fit between your business goals and capital partners.",
        img: require('../../Assets/images/fundr.jpg'),
    },

];

const services = [
    {
        title: 'Tax Advisory',
        link: 'Tax Advisory:',
        description: [
            // 'Tax Planning & Risk Management',
            'Corporate Tax',
            'Transfer Pricing & Cross Border Taxation',
            // 'Cross-Border Taxation',
            'Indirect Tax',
        ],
        image: require('../../Assets/images/home3.jpg'),
    },
    {
        title: 'Deal Advisory',
        link: 'Deal Advisory',
        description: [
            'Mergers & Acquisitions (M&A)',
            'Valuation Services',
            'Due Diligence',
            'Corporate Restructuring',
            // 'Financial Modelling & Analysis',
        ],
        image: require('../../Assets/images/home9.png'),
    },
    {
        title: 'Fundraising',
        link: 'Fundraising',
        description: [
            'Investor Sourcing',
            'Investor Communication',
            // 'Capital Structuring',
            'Term Sheet & Deal Negotiation',
            // 'Due Diligence & Documentation',
        ],
        image: require('../../Assets/images/home4.jpg'),
    },

    {
        title: 'Private Equity Research & Deal Execution',
        link: 'Private Equity Research &amp; Deal Execution',
        description: [
            'Sector & Market Intelligence',
            'Investment Evaluation',
            'Proprietary Deal Sourcing',
            // 'Due Diligence',
            'Transaction Execution',
        ],
        image: require('../../Assets/images/home5.jpg'),
    },

    {
        title: 'Risk-Based Internal Audit',
        link: 'Risk-Based Internal Audit',
        description: [
            'Forensic Audit',
            'Internal Audit & Risk Advisory',
        ],
        image: require('../../Assets/images/home6.jpg'),
    },

    {
        title: 'Financial Management & Business Entry Advisory',
        link: 'Financial Management & Business Entry Advisory',
        description: [
            'Reporting and Controls',
            'Business Entry Advisory',
        ],
        image: require('../../Assets/images/home10.jpg'),
    },

];

const values = [
    {
        title: 'Client Focus',
        description: `We prioritize the needs and objectives of our clients. We actively listen, understand their unique circumstances, and provide customized solutions that align with their goals. We strive to exceed client expectations by delivering timely, accurate, and reliable services.`,
    },
    {
        title: 'Integrity',
        description: `We uphold the highest standards of ethics, honesty, and transparency in all our professional dealings. We are committed to maintaining the trust and confidence of our clients by consistently acting in their best interests.        `,
    },
    {
        title: 'Professionalism',
        description: `We maintain a professional demeanor and approach in all aspects of our work. We adhere to strict professional standards and continuously seek to enhance our knowledge and expertise to deliver the highest quality service to our customers.`,
    },
    {
        title: 'Long-Term Relationships',
        description: `We value the long-term relationships we build with our customers. We aim to be a trusted advisor, providing guidance and support throughout our their financial journey. We foster enduring relationships based on mutual respect, open communication, and exceptional service.`,
    },
    {
        title: 'Continuous Improvement',
        description: `We are committed to ongoing learning and professional development. We embrace new technologies, industry trends, and best practices to enhance the quality and efficiency of our services. We continually seek ways to improve our processes and deliver value-added solutions to our customers.`,
    }, {
        title: 'Accountability',
        description: `We take full responsibility for our actions and deliver on our commitments. We strive for accuracy, precision, and attention to detail in every aspect of our work. We are accountable to our customers, ensuring that we meet deadlines, provide accurate financial information, and proactively communicate with them.`,
    },

];


const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0); // First one open by default
    const serviceContainerRef = useRef(null);
    const footerContainerRef = useRef(null)
    const valueContainerRef = useRef(null)

    const scrollToSection = (ref) => {
        if (ref.current) {
            setTimeout(() => {
                ref.current.scrollIntoView({ behavior: 'smooth' });
            }, 500); // slight delay adds a smoother visual effect
        }
    };

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <>
            <header className="bga-header" style={{ position: "fixed", top: 0, zIndex: 1000 }}>
                <div className="bga-container">
                    <Link to="/" target="_blank" style={{ textDecoration: "none" }}>
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
                            <li><a href="/about">About Us</a></li>
                            <li><a href="#services" onClick={() => scrollToSection(serviceContainerRef)}>Services</a></li>
                            <li><a href="#values" onClick={() => scrollToSection(valueContainerRef)}>Values</a></li>
                            <li><a href="/media">Blogs</a></li>
                            <li><a href="#" onClick={() => scrollToSection(footerContainerRef)}>Contact Us</a></li>
                            {/* <li><a href="#process" onClick={() => scrollToSection(processesContainerRef)}>Process</a></li> */}
                        </ul>
                        <a href="/descoverycall" className="bga-cta-btn1">Schedule a Discovery Call</a>
                    </nav>
                </div>
                <marquee className="heding-bottom-description">Architects of Success, We transform vision into reality</marquee>
            </header>

            <div className="custom-swiper-wrapper" style={{ marginTop: "88px" }}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3500 }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    loop={true}
                    className="home-swiper"
                >
                    {slide.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="slide-container">
                                <img src={item.img} alt={item.title} className="slide-image" />
                                <div className="slide-overlay">
                                    <h1>{item.heading}</h1>
                                    <h2>{item.title}</h2>
                                    <button className="read-more-btn" onClick={() => scrollToSection(serviceContainerRef)}>Read More</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="swiper-button-prev custom-nav">&#10094;</div>
                <div className="swiper-button-next custom-nav">&#10095;</div>
            </div>

            <section className="bga-hero">
                <div className="bga-hero-content">
                    <h1>
                        Financial Clarity <span className="highlight-blue"> Meets Strategic</span> Growth
                    </h1>
                    <p className="subtext">
                        At Bizzcount Solutions, we help businesses make smarter decisions—whether navigating complex tax regulations or executing high-impact deals.
                        Our team blends technical expertise with commercial insight to deliver tailored solutions across corporate tax, M&A advisory, and financial structuring.
                        We’re not just advisors—we’re your partners in long-term value creation.

                    </p>
                    <a href="/descoverycall" className="bga-cta-btn">Schedule a Discovery Call</a>
                </div>
                <div className="bga-hero-image">
                    <img
                        src={home1}
                        alt="Blue Growth Advisors"
                    />
                </div>
            </section>

            <section className="bga-section">
                <div className="bga-text-block">
                    <h2 style={{ textAlign: "left" }}>When Complexity Clouds Your Next Move,
                        <span className="highlight-blue"> We Bring Clarity</span>.</h2>
                    <p>
                        Running a business in today’s regulatory and economic climate can feel like a constant balancing act.
                        Every decision carries weight—tax burdens, deal risks, compliance pressures—and it’s easy to feel stretched thin, unsure if you're moving forward or simply managing chaos.   <br />You’re not alone in that uncertainty.
                    </p>

                    <p><strong>At Bizzcount Solutions</strong>
                        , we help lift the fog. Whether you're navigating a corporate tax challenge, restructuring your operations, or pursuing a high-stakes deal, we bring the expertise, perspective, and precision you need to move with confidence.

                    </p>
                </div>
            </section>

            <section className="wave-hero">
                <div className="wave-hero-image">
                    <img
                        src={home2}
                        alt="Wave CPA"
                    />
                </div>
                <div className="wave-hero-content">
                    <p className="label">BIZZCOUNT SOLUTIONS</p>
                    <h1>
                        <span>Move Forward with Focus, Strategy, and Control.</span>
                    </h1>
                    <p className="subtext">
                        With Bizzcount by your side, you gain the clarity to make confident decisions—and the freedom to focus on what matters m
                    </p>
                    <a href="/descoverycall" className="cta-button">Schedule a Discovery Call</a>
                </div>
            </section>

            {/* What We Do */}
            <div className="what-we-do-container" ref={serviceContainerRef}>
                <h2 className="section-title">What We Do</h2>
                {services.map((service, index) => (
                    <div key={index} className="service-block">
                        <div className="service-content">
                            <h3 className="service-title" style={{ fontSize: "30px", marginBottom: "40px" }}>{service.title}</h3>

                            {Array.isArray(service.description) && (
                                <ul className={service.title.toLowerCase().includes('1tax') ? 'checklist-style' : 'dotlist-style'}>
                                    {service.description.map((point, pointIndex) => (
                                        <li key={pointIndex} className="list-item-style">
                                            <Link
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                to={`/description/page/${point}`} className="list-link">{point}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <img src={service.image} alt={service.title} className="service-image" />
                    </div>
                ))}
            </div>

            {/* CTA SECTION */}
            <div className="cta-container">
                <div className="cta-text">
                    <h2>Book a consultation with Bizzcount Solutions today</h2>
                    <p>From tax strategy to deal execution, we’re here to guide you through your most critical business moments.</p>
                    <h2>Decisions Matter. Get Them Right.</h2>
                </div>
                <Link to="/descoverycall" className="cta-button">Schedule a Discovery Call</Link>
            </div>

            {/* PERPOSE SECTION */}
            <section className="purpose-section">
                <h2>Our Purpose</h2>
                <p className="purpose-text">
                    To empower businesses within the Blue Economy by providing them with the financial
                    guidance they need to navigate the challenging waters with courage, gain clarity
                    in their financial strategies, and approach every financial decision with confidence. bb
                </p>

                <div className="expect-container">
                    <div className="image-container">
                        <img
                            src={require('../../Assets/images/home7.jpg')}
                            alt="Ocean wave"
                        />
                    </div>
                    <div className="expect-content">
                        <h3>What to Expect</h3>
                        <ul className="expect-list">
                            <li>Modern, Cloud Based Accounting Solutions</li>
                            <li>Accurate Financial Reporting</li>
                            <li>High Level CFO Advisory Services</li>
                            <li>Professional Level Service</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* According Css */}
            <div className="accordion-container" ref={valueContainerRef}>
                <div className="fermimage-container">
                    <h2 className="accordion-heading">Firm Values</h2>
                    <img src={fermimage} className="fermimage" />
                </div>

                <div className="according-collum-container">
                    {values.map((item, index) => (
                        <div className={`accordion-item ${activeIndex === index ? 'open' : ''}`} key={index}>
                            <div className="accordion-title" onClick={() => toggleAccordion(index)}>
                                <span className="accordion-label">{item.title}</span>
                                <span className="accordion-icon">
                                    {activeIndex === index ? <FiX /> : <FiPlus />}
                                </span>
                            </div>
                            {activeIndex === index && (
                                <div className="accordion-content">{item.description}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <FloatingWhatsApp
                phoneNumber="971563096926"
                accountName="BIZZ COUNT SOLUTIONS"
                allowClickAway
                notification
                notificationDelay={30000}
            />


            {/* Footer */}
            <footer className="footer" ref={footerContainerRef}>
                <div className="footer-top">
                    <div className="modified-footer-top-subsection">
                        <Link to="/" target="_blank" style={{ textDecoration: "none" }}>
                            <div className="bga-logo-section">
                                {/* <img src={logo} alt="Blue Growth Advisors Logo" className="bga-logo" /> */}
                                <img className="logo-image" src={logo} alt="BizzCount Logo" />
                                <div className="bga-brand-text">
                                    <h1 className="bga-title">BIZZ<span className="bga-span" style={{ color: " #0a3258" }}>COUNT</span></h1>
                                    <h2 className="bga-subtitle" style={{ color: " #0a3258" }}>SOLUTIONS</h2>
                                </div>
                            </div>
                        </Link>

                        <div className="modified-footer-bottom-subsection">
                            <a href="#" style={{ fontWeight: "700", color: "#1e90ff" }}> Contact Us:</a>
                            <a href="#" style={{ fontWeight: "700" }}> Corporate Office:</a>
                            <a href="#" ><span style={{ fontWeight: "700" }}>Address:</span> Bizzcount Solutions, - Office No. 2523A, Level 25, The H Hotel Office Tower, Trade Centre First, Sheikh Zayed Road, Dubai.</a>
                            <a href="#" > <span style={{ fontWeight: "700" }}>Phone:</span> +971-563096926</a>
                            <a href="#" > <span style={{ fontWeight: "700" }}>Land Line:</span> +971- 43050 829</a>
                            <a href="#" > <span style={{ fontWeight: "700" }}>Email:</span> info@bizzcountsolutions.com</a>
                        </div>

                    </div>


                    <nav className="footer-nav-collum">
                        <div className="office-section">
                            <h3 style={{ textAlign: "left" }}>Our Offices:</h3>
                            <div className="office-links">
                                <a href="#"> Dubai, UAE</a>
                                <a href="#"> Delhi, India</a>
                                {/* <a href="#"> Kerala, India</a> */}
                                <a href="#"> Ahmedabad, India</a>
                                <a href="#"> USA</a>
                                <a href="/descoverycall" className="footer-call" style={{ textDecoration: "none" }}>Schedule a Discovery Call</a>
                            </div>
                        </div>
                    </nav>

                    <nav className="footer-nav-collum">
                        <div className="office-section">
                            <h3>Associate Offices:</h3>
                            <div className="office-links">
                                <a href="#"> KSA</a>
                                <a href="#"> Qatar</a>
                                <a href="#"> Bahrain</a>
                                <a href="#"> Oman</a>
                                {/* <a href="#"> USA</a>
                                <a href="#"> Ahmedabad, India</a> */}
                            </div>
                        </div>
                    </nav>
                </div>

                {/* <nav className="footer-nav">
                    <a href="#services" onClick={() => scrollToSection(serviceContainerRef)}>Services</a>
                    <a href="#process">Process</a>
                    <a href="#values" onClick={() => scrollToSection(valueContainerRef)}>Values</a>
                    <a href="#contact">Contact</a>
                </nav> */}

                <hr />
                <div className="footer-bottom">
                    <span className="alignment-cont">
                        © 2023 Blue Growth Advisors. All rights reserved.
                        <a href="https://www.instagram.com/bizzcount_solutions" target="blank" style={{ marginLeft: "10px" }}>
                            <FaSquareInstagram size={30} color="#E1306C" /> {/* Instagram Pink Gradient */}
                        </a>
                        <a href="https://www.linkedin.com/company/104712788/admin/dashboard/" target="blank" style={{ marginLeft: "10px" }}>
                            <FaLinkedin size={30} color="#0A66C2" /> {/* LinkedIn Blue */}
                        </a>
                    </span>

                    <div className="footer-links">
                        <a href="#credits">Site Credits</a>
                        <a href="#privacy">Privacy Policy</a>
                    </div>
                </div>

            </footer>
        </>
    );
};


export default Home;
