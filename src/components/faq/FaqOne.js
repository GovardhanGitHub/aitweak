"use client"
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function FaqOne() {
    return (
        <div>
            <>
                {/* commercial faq area */}
                <div className="professional-faq-area rts-section-gap position-relative">
                    <div className="shape-top">
                        <img
                            loading="lazy"
                            rel="preload"
                            src="assets/images/video/shape/01.png"
                            alt=""
                            className="wow move-right"
                            data-wow-offset={120}
                        />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center-title-bg-white">
                                    <h2 className="title" style={{ fontSize: 40 }}>
                                        Your AI Questions, Answered
                                    </h2>
                                    <p>
                                        From Bengaluru’s tech heart, AiTweak delivers cutting-edge AI solutions to transform your business. Explore how our innovative platform empowers industries with intelligent automation, predictive insights, and seamless integration.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--80">
                            <div className="col-lg-12">
                                <div className="accordion-container-one">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>How long has AiTweak been driving AI innovation?</Accordion.Header>
                                            <Accordion.Body>
                                                Founded in Bengaluru, India’s Silicon Valley, AiTweak has been at the forefront of AI innovation since 2020. Our team of experts has empowered businesses across healthcare, fintech, and manufacturing with transformative AI solutions, delivering measurable impact and future-ready strategies.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>What AI services does AiTweak offer?</Accordion.Header>
                                            <Accordion.Body>
                                                AiTweak provides a comprehensive suite of AI services, including Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Predictive Analytics, Intelligent Automation, AI Model Development, Integration, and Consulting. From predictive insights to autonomous systems, we tailor solutions to industries like retail, transportation, and agriculture.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Does AiTweak support startups, small businesses, or only large enterprises?</Accordion.Header>
                                            <Accordion.Body>
                                                At AiTweak, we believe AI is for everyone. Based in Bengaluru’s vibrant tech ecosystem, we work with startups, small businesses, and large enterprises alike, crafting scalable, budget-friendly AI solutions that drive growth, efficiency, and innovation, no matter your size.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>What technologies power AiTweak’s AI solutions?</Accordion.Header>
                                            <Accordion.Body>
                                                AiTweak specializes in advanced AI technologies, including convolutional neural networks, transformer models, supervised and unsupervised learning, and robotic process automation (RPA). Our Bengaluru-based team leverages these tools to deliver cutting-edge solutions in computer vision, NLP, predictive analytics, and more.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>How does AiTweak stay ahead of AI trends?</Accordion.Header>
                                            <Accordion.Body>
                                                In Bengaluru’s dynamic tech hub, AiTweak thrives on innovation. Our R&D team actively explores emerging AI trends, collaborates with global experts, and integrates the latest advancements in neural networks, automation, and analytics to ensure your business stays ahead of the curve.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>How can I start my AI journey with AiTweak?</Accordion.Header>
                                            <Accordion.Body>
                                                Getting started is simple! Contact our Bengaluru-based team for a free consultation. We’ll assess your needs, design a tailored AI roadmap, and guide you through implementation, ensuring seamless integration and rapid results. Let’s transform your business with AI today.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--80">
                            <div className="col-lg-12 text-center">
                                <p>
                                    Still curious about AI’s potential?{" "}
                                    <a
                                        href="/free-consultation"
                                        style={{ color: "var(--color-primary)" }}
                                    >
                                        Connect with our Bengaluru experts
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* commercial faq area end */}
            </>
        </div>
    )
}

export default FaqOne