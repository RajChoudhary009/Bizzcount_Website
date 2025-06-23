import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import logo from "../../Assets/images/logo.webp"
import './index.css';

const servicesData = [
  {
    title: 'Tax Advisory',
    description: `Our Tax Advisory service is focused on helping businesses navigate the complex world of taxation—ensuring compliance while optimizing tax efficiency. We support clients across various industries with tailored strategies that align with their business objectives.`,
    subSections: [
      {
        title: 'Tax Planning & Risk Management',
        description: `Our approach:`,
        bulletPoints: [
          'Identifying and managing potential tax risks',
          'Advising on dispute avoidance and resolution',
          'Ensuring alignment with regulatory changes and business growth plans',
        ],
      },
      {
        title: 'Corporate Tax',
        description: `Our services include:`,
        bulletPoints: [
          'Corporate Tax (CT) advisory and compliance',
          'Transfer Pricing (TP) compliance',
          'International Tax advisory',
          'FATCA Compliance',
          'Tax Residency Certificate (TRC) support',
        ],
      },
      {
        title: 'Transfer Pricing & Cross-Border Taxation',
        description: `Transfer pricing documentation including local file and master file preparation:`,
        bulletPoints: [
          // 'Transfer pricing policy design and documentation',
          // 'Local file and master file preparation',
          'Benchmarking and economic analysis',
          'Drafting and reviewing intercompany agreements',
          'Double Tax Treaty Advisory',
          'Permanent Establishment (PE) Risk Assessment',
        ],
      },

      {
        title: 'Indirect Tax',
        description: `Our services include:`,
        bulletPoints: [
          'VAT advisory and compliance assistance',
          'VAT health checkup and audit readiness review',
          'VAT refund assistance',
          'VAT penalty waiver assessment and reconsideration application support',
          'Registered Tax Agent services',
        ],
      },

    ],
  },

  {
    title: 'Deal Advisory',
    description: `Our Deal Advisory service provides strategic guidance throughout the lifecycle of a transaction or
    corporate restructuring. We help you navigate complexity, mitigate risks, and unlock value at every
    stage of the deal process.`,

    subSections: [
      {
        title: 'Mergers & Acquisitions (M&A)',
        description: `Assist businesses to identify, evaluate, and execute strategic mergers and acquisitions to ensure the transaction(s) supports long-term vision, delivers value to shareholders, and is executed with precision and confidence.`,
      },
      {
        title: 'Valuation Services',
        description: `Accurate and reliable valuation is critical to any successful deal. We deliver detailed financial analysis
        and fair value assessments to strengthen negotiations and support sound decision-making.`,
      },
      {
        title: 'Due Diligence',
        description: `Due diligence process uncovers hidden risks and identifies value drivers to provide actionable insights through clear, comprehensive reports—helping to make informed, risk-aware decisions.`,
      },
      {
        title: 'Corporate Restructuring',
        description: `Restructuring services are designed to stabilize operations, preserve value, and enhance long-term performance to organizations undergoing transformation—whether due to financial stress or strategic realignment`,
      },
    ],
  },

  {
    title: 'Fundraising',
    description: `Our Fundraising Advisory service supports businesses in securing the capital required for growth,
    expansion, or strategic transformation. We assist at every stage of the fundraising journey—ensuring
    the right fit between your business goals and capital partners.`,

    subSections: [
      {
        title: 'Investor Sourcing',
        description: `Connecting with the right investors—across equity, debt, or hybrid instruments—ensuring alignment with your long-term strategy and capital needs. Our strong investor network includes venture capital, private equity, family offices, and institutional lenders.`,
      },
      {
        title: 'Investor Communication',
        description: `We help craft compelling investment materials—including pitch decks, financial projections, and business narratives—that clearly communicate your value proposition. We also support ongoing investor relations and stakeholder engagement.`,
      },
      {
        title: 'Term Sheet & Deal Negotiation',
        description: `Guidance throughout the negotiation processes—reviewing term sheets, protecting founder and shareholder interests, and ensuring the deal structure supports your strategic objectives.`,
      },
    ],
  },

  {
    title: 'Private Equity Research & Deal Execution',
    description: `Our Private Equity Research and Deal Execution services are designed to help investors navigate complex transactions with confidence. We provide end-to-end support—from sourcing and evaluating opportunities to closing high-quality deals—grounded in data-driven insights and industry expertise.`,

    subSections: [
      {
        title: 'Sector & Market Intelligence',
        description: `Assist with deep market research to uncover emerging trends, sector dynamics, and investment themes—identifying opportunities that align with your investment thesis.`,
      },
      {
        title: 'Investment Evaluation',
        description: `Performs detailed financial, operational, and strategic analysis of potential targets—assessing business fundamentals, market position, scalability, and risk factors to support sound decision-making.`,
      },
      {
        title: 'Proprietary Deal Sourcing',
        description: `Leveraging our network and market access, we identify and assess proprietary or off-market opportunities that fit your investment criteria—enhancing deal quality and competitiveness.`,
      },
      {
        title: 'Transaction Execution',
        description: `Support the full deal process, including structuring, valuation, negotiation, and closing—ensuring alignment with your strategic objectives while safeguarding key commercial terms.`,
      },
    ],
  },

  {
    title: 'Risk-Based Internal Audit',
    description: `Risk-Based Internal Audit services are designed to enhance organizational resilience by proactively identifying and addressing internal control vulnerabilities. We conduct comprehensive risk assessments, gap analyses, and impact support informed decision-audit.`,

    subSections: [
      {
        title: 'Forensic Accounting',
        description: `We specialize in uncovering financial discrepancies, misappropriations, and fraudulent activities. Our forensic accounting team conducts detailed analyses to:`,
        bulletPoints: [
          'Identify the individuals or processes involved',
          'Assess the methodologies used',
          'Quantify financial losses',
          'Compile admissible evidence for legal or internal action',
        ],
      },
    ],
  },

  {
    title: 'Financial Management and Business Entry Advisory',
    description: `Our Financial Management services are tailored to help businesses optimize financial performance,
    strengthen decision-making, and achieve strategic objectives. We provide end-to-end financial
    support that enhances control, visibility, and value creation across your operations.`,

    subSections: [
      {
        title: 'Reports and Control',
        bulletPoints: [
          'Budgeting & Forecasting',
          'Cash Flow Management',
          'Financial Strategy, Planning & Reporting',
          'Cost Control Structures',
          // 'Strategic Planning',
          'Risk Management ',
        ],
      },
      {
        title: 'Business Entry Advisory',
        description: `Entering a new market presents major growth opportunities—but also regulatory, financial, and operational challenges. We offer comprehensive entry support, including:`,
        bulletPoints: [
          'Market Research & Entry Strategy – Identifying viable opportunities and risks through in-depth analysis.',
          'Regulatory Guidance – Ensuring full compliance with local legal frameworks.          ',
          'Local Partnering – Connecting you with trusted partners and stakeholders.          ',
          'Operational Setup – Assisting with legal structuring, financial setup, and licensing.',
        ],
      },
    ],
  },
];

const ServiceDescription = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { heading } = useParams();
  const sectionRefs = useRef([]); // store section refs for scrolling

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const formatText = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const normalizedHeading = heading ? formatText(heading) : '';

  useEffect(() => {
    if (!normalizedHeading) return;
    const targetIndex = servicesData.findIndex((service) =>
      service.subSections.some(sub => formatText(sub.title) === normalizedHeading)
    );
    if (targetIndex !== -1 && sectionRefs.current[targetIndex]) {
      sectionRefs.current[targetIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [normalizedHeading]);

  console.log("Normalized heading:", normalizedHeading);

  return (
    <>
      {/* <Header /> */}
      <header className="bga-header" style={{ position: "fixed", top: 0, zIndex: 1000 }}>
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

      {/* description page */}
      <div className="description-main-container" style={{ marginTop: "88px" }}>
        <div className="service-container">
          {servicesData.map((service, index) => {
            const isActive = service.subSections.some(
              (sub) => formatText(sub.title) === normalizedHeading
            );

            return (
              <div
                key={index}
                ref={(el) => (sectionRefs.current[index] = el)}
                className={`service-card ${isActive ? 'highlighted-section' : ''}`}
              >
                <h2 className="service-title">
                  <span className="service-number"></span> {service.title}
                </h2>

                {service.description && (
                  <p className="service-description">{service.description}</p>
                )}

                {service.subSections.map((sub, subIndex) => {
                  const subIsActive = formatText(sub.title) === normalizedHeading;

                  return (
                    <div
                      key={subIndex}
                      className={`service-subsection ${subIsActive ? 'highlighted-subsection' : ''}`}
                    >
                      <h3 className="subsection-title">{sub.title}</h3>
                      {sub.description && <p className="subsection-description">{sub.description}</p>}
                      {sub.bulletPoints && (
                        <ul className={sub.title.toLowerCase().includes('tax') ? 'tick-list' : 'bullet-list'}>
                          {sub.bulletPoints.map((point, pointIndex) => (
                            <li key={pointIndex}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

    </>
  );
};

export default ServiceDescription;
