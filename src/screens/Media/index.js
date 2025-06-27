import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SERVER_API_URL } from '../../server/server'
// import blogs from "../../Assets/images/blogs.jpg"
import logo from "../../Assets/images/logo.webp"
import axios from "axios"; // ✅ Import axios
import "./index.css"; // link to CSS

const MediaSection = () => {
    const [blogData, setBlogData] = useState([]); // ✅ State to store blogs
    const [sortOption, setSortOption] = useState("Most Recent");


    const getSortedBlogs = () => {
        const sorted = [...blogData];

        if (sortOption === "Most Recent") {
            return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        } else if (sortOption === "Oldest") {
            return sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        } else if (!isNaN(sortOption)) {
            return sorted.filter(
                (item) => new Date(item.createdAt).getFullYear().toString() === sortOption
            );
        }

        return sorted;
    };



    // ✅ Fetch blog data from API
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${SERVER_API_URL}/api/blog/blogs`);
                console.log("response", response.data.data)
                setBlogData(response.data.data);
            } catch (error) {
                console.error("Error fetching blog data:", error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <>
            {/* <Header /> */}
            {/* <header className="bga-header" style={{position: "fixed", top: 0, zIndex: 1000}}> */}
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

            <div className="multinational-banner" style={{marginTop:"88px"}}>
                <section className="media-section">
                    <div className="media-container">
                       
                    </div>
                </section>
            </div>

            <div className="gt-media-section">
                <div className="gt-media-wrapper">
                    <div className="gt-media-header">
                        <h2 className="gt-media-heading">All Media</h2>
                        <div className="gt-media-sort">
                            <span className="gt-media-sort-label">Order by:</span>
                            <select
                                className="gt-media-sort-select"
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}
                            >
                                <option>Most Recent</option>
                                <option>Oldest</option>
                                <option value="2025">2025</option>
                                <option value="2024">2024</option>
                            </select>

                        </div>
                    </div>

                    {/* ✅ Replace hardcoded data with fetched blog data */}
                    <div className="gt-media-cards">
                        {getSortedBlogs().map((item, idx) => (
                            <div className="gt-media-card1" key={idx}>
                                <img
                                    src={`${SERVER_API_URL}/uploads/${item.blog_url}`} // Adjust path based on your API
                                    alt="media"
                                    className="gt-media-img"
                                />
                                <div className="gt-media-info">
                                    {/* <p className="gt-media-date">PRESS RELEASE | {item.blog_date}</p> */}
                                    <p className="gt-media-date">
                                        PRESS RELEASE | {new Date(item.createdAt).toLocaleDateString("en-GB", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric"
                                        })}
                                    </p>
                                    <h3 className="gt-media-title">{item.description}</h3>
                                    <Link to={item.blog_link} target="Blank" className="gt-media-link">
                                        Read the full article <span className="gt-media-arrow">→</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </>
    );
};

export default MediaSection;
