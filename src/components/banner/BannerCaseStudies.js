"use client";
import { useEffect } from "react";
import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function BannerCaseStudies() {
    useEffect(() => {
        AOS.init({
            disableMutationObserver: true,
            once: true,
        });
    }, []);

    return (
        <div>
            {/* rts case studies banner area start */}
            <div className="rts-case-studies-banner-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="case-studies-banner-top">
                                <h1 className="title">AI Success Stories</h1>
                                <p>From Bengaluru’s tech epicenter, AiTweak empowers businesses with transformative AI solutions. Discover how our innovative NLP, computer vision, and predictive analytics are revolutionizing industries.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-left-top">
                    <img src="assets/images/case-studies/01.png" alt="case" />
                </div>
            </div>
            {/* rts case studies banner area end */}
            {/* case studies area start */}
            <div className="single-large-case-studies-area">
                <div className="container">
                    <div className="row g-80">
                        <div className="col-lg-12">
                            <div className="single-case-studies">
                                <div className="thumbnail">
                                    <img src="assets/images/case-studies/18.webp" alt="Healthcare AI" />
                                </div>
                                <div className="inner-content">
                                    <span>Healthcare, Natural Language Processing</span>
                                    <h3 className="title animated fadeIn">AI-Powered Patient Care</h3>
                                    <p className="description">
                                        AiTweak revolutionized patient care for a Bengaluru hospital with an NLP-driven platform. Our transformer models analyzed medical records in real-time, achieving 93% accuracy in identifying diagnoses. The solution reduced consultation times by 60%, enhanced patient outcomes, and streamlined hospital operations, showcasing AI’s potential in healthcare innovation.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"
                        >
                            <div className="single-case-studies">
                                <div className="thumbnail">
                                    <img src="assets/images/case-studies/01.webp" alt="Retail AI" />
                                </div>
                                <div className="inner-content">
                                    <span>Retail, Predictive Analytics</span>
                                    <h3 className="title animated fadeIn">Smart Retail Analytics</h3>
                                    <p className="description">
                                        For a leading e-commerce platform, AiTweak developed a predictive analytics engine that delivers personalized shopping experiences. Our machine learning models boosted conversion rates by 45% and reduced cart abandonment by 30%. Seamlessly integrated, this solution empowers retailers to thrive in competitive markets with data-driven insights.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
                        >
                            <div className="single-case-studies">
                                <div className="thumbnail">
                                    <img src="assets/images/case-studies/03.webp" alt="Agriculture AI" />
                                </div>
                                <div className="inner-content">
                                    <span>Agriculture, Computer Vision</span>
                                    <h3 className="title animated fadeIn">Precision Crop Monitoring</h3>
                                    <p className="description">
                                        AiTweak transformed a Karnataka agribusiness with a computer vision system for crop monitoring. Analyzing drone imagery, our AI detected crop health issues with 97% accuracy, optimizing water usage by 35% and increasing yields by 25%. This scalable solution drives sustainable farming with precision.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"
                        >
                            <div className="single-case-studies">
                                <div className="thumbnail">
                                    <img src="assets/images/case-studies/02.webp" alt="Fintech AI" />
                                </div>
                                <div className="inner-content">
                                    <span>Fintech, Intelligent Automation</span>
                                    <h3 className="title animated fadeIn">Real-Time Fraud Detection</h3>
                                    <p className="description">
                                        AiTweak built an intelligent automation system for a fintech startup, combining NLP and ML to detect fraudulent transactions. Achieving 96% accuracy, it reduced false positives by 55% and saved significant losses. Our agile deployment ensured rapid, secure, and trustworthy financial operations.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
                        >
                            <div className="single-case-studies">
                                <div className="thumbnail">
                                    <img src="assets/images/case-studies/04.webp" alt="Manufacturing AI" />
                                </div>
                                <div className="inner-content">
                                    <span>Manufacturing, Predictive Maintenance</span>
                                    <h3 className="title animated fadeIn">Smart Factory Optimization</h3>
                                    <p className="description">
                                        AiTweak enhanced a manufacturing plant with predictive maintenance AI. Our models analyzed equipment data to predict failures with 90% accuracy, reducing downtime by 40% and maintenance costs by 30%. This solution drives efficiency and scalability in smart manufacturing.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-12"
                        >
                            <div className="single-case-studies">
                                <div className="thumbnail">
                                    <img src="assets/images/case-studies/19.webp" alt="Transportation AI" />
                                </div>
                                <div className="inner-content">
                                    <span>Transportation, Computer Vision</span>
                                    <h3 className="title animated fadeIn">Autonomous Fleet Management</h3>
                                    <p className="description">
                                        AiTweak empowered a logistics company with a computer vision system for autonomous fleet management. Our AI optimized routes and monitored vehicle conditions with 95% accuracy, cutting fuel costs by 20% and improving delivery times by 30%. This solution redefines transportation efficiency.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"
                        >
                            <div className="single-case-studies">
                                <div className="thumbnail">
                                    <img src="assets/images/case-studies/01.webp" alt="Healthcare AI" />
                                </div>
                                <div className="inner-content">
                                    <span>Healthcare, Predictive Analytics</span>
                                    <h3 className="title animated fadeIn">Patient Readmission Prediction</h3>
                                    <p className="description">
                                        AiTweak developed a predictive analytics model for a hospital chain to forecast patient readmissions. With 88% accuracy, it reduced readmissions by 25% and saved significant costs. Our solution enhances patient care and operational efficiency in healthcare.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
                        >
                            <div className="single-case-studies">
                                <div className="thumbnail">
                                    <img src="assets/images/case-studies/03.webp" alt="Retail AI" />
                                </div>
                                <div className="inner-content">
                                    <span>Retail, Natural Language Processing</span>
                                    <h3 className="title animated fadeIn">AI-Driven Customer Support</h3>
                                    <p className="description">
                                        AiTweak created an NLP-powered chatbot for a retail giant, handling 85% of customer queries automatically. It reduced response times by 70% and boosted satisfaction by 40%. Our solution delivers seamless, scalable customer experiences in retail.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"
                        >
                            <div className="single-case-studies">
                                <div className="thumbnail">
                                    <img src="assets/images/case-studies/02.webp" alt="Agriculture AI" />
                                </div>
                                <div className="inner-content">
                                    <span>Agriculture, Predictive Analytics</span>
                                    <h3 className="title animated fadeIn">Yield Forecasting System</h3>
                                    <p className="description">
                                        AiTweak’s predictive analytics system for an agribusiness forecasted crop yields with 90% accuracy. It optimized resource allocation, reducing costs by 20% and increasing profits by 15%. This solution empowers data-driven farming for sustainability.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
                        >
                            <div className="single-case-studies">
                                <div className="thumbnail">
                                    <img src="assets/images/case-studies/04.webp" alt="Fintech AI" />
                                </div>
                                <div className="inner-content">
                                    <span>Fintech, Computer Vision</span>
                                    <h3 className="title animated fadeIn">Document Verification AI</h3>
                                    <p className="description">
                                        AiTweak built a computer vision system for a fintech firm to verify documents in real-time. With 98% accuracy, it reduced processing times by 80% and enhanced security. Our solution streamlines onboarding and compliance in fintech.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* case studies area end */}
        </div>
    )
}

export default BannerCaseStudies