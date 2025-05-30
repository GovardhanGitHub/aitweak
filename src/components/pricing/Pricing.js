"use client"
import React from 'react'
import { ReactSVG } from 'react-svg';

function Pricing() {
    return (
        <div>
            {/* pricing area start */}
            <div className="rts-pricing-area rts-section-gapTop bg-gradient-pricing">
                <div className="bg-shape-area">
                    <img
                        loading="lazy"
                        rel="preload"
                        src="assets/images/pricing/01.png"
                        alt="shape"
                    />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center-title-bg-white">
                                <h2 className="title" style={{ fontSize: 64 }}>
                                    Pricing Plans
                                </h2>
                                <p>
                                    From Bengaluru’s tech epicenter, AiTweak offers powerful NLP solutions like ChatGPT, alongside tailored AI services. Whether you’re a small team or an enterprise, our plans empower innovation with seamless AI integration and end-to-end support.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-pricing">
                    <div className="row mt--80 g-0">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="single-pricing-area border-left">
                                <div className="head">
                                    <span className="pre">Small Teams</span>
                                    <h3 className="title">$1555 /yr</h3>
                                    <p>Perfect for startups and teams &lt;10 members. Billed annually.</p>
                                </div>
                                <div className="body">
                                    <a href="/free-consultation" className="rts-btn btn-border">
                                        Get Started
                                        <ReactSVG
                                            className="injectable"
                                            src="assets/images/service/icons/13.svg"
                                            alt="arrow"
                                        />
                                    </a>
                                    <span>No credit card required for consultation!</span>
                                    <ul className="feature-list" style={{ marginTop: '20px', textAlign: 'left' }}>
                                        <li>Advanced NLP for chatbots and text analysis</li>
                                        <li>Context-aware conversational AI</li>
                                        <li>Multilingual support for global reach</li>
                                        <li>Customizable AI responses</li>
                                        <li>Real-time sentiment analysis</li>
                                        <li>Seamless integration with your tools</li>
                                        <li>24/7 priority support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="single-pricing-area">
                                <div className="head">
                                    <span className="pre">Enterprise</span>
                                    <h3 className="title">Contact Us</h3>
                                    <p>Custom AI solutions for large-scale needs.</p>
                                </div>
                                <div className="body">
                                    <a href="/contact-us" className="rts-btn btn-border">
                                        Request a Quote
                                        <ReactSVG
                                            className="injectable"
                                            src="assets/images/service/icons/13.svg"
                                            alt="arrow"
                                        />
                                    </a>
                                    <span>Let’s build your AI vision together!</span>
                                    <p style={{ marginTop: '20px', textAlign: 'left' }}>
                                        We work closely with you, offering not just NLP but a full suite of tailored AI services, including computer vision, predictive analytics, and intelligent automation, designed for your unique challenges.
                                    </p>
                                    <ul className="feature-list" style={{ marginTop: '20px', textAlign: 'left' }}>
                                        <li>Enterprise-grade NLP with ChatGPT-like capabilities</li>
                                        <li>Custom AI model development</li>
                                        <li>Advanced data security and compliance</li>
                                        <li>Scalable automation for complex workflows</li>
                                        <li>Dedicated account manager</li>
                                        <li>Multi-industry AI solutions (healthcare, fintech, etc.)</li>
                                        <li>Continuous model training and optimization</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="moneyback d-block m-auto pt--80">
                    30-day money-back guarantee for Small Teams plan*
                </span>
            </div>
            {/* pricing area end */}
        </div>
    )
}

export default Pricing