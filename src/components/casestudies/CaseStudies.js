"use client"
import React from 'react';
import { ReactSVG } from 'react-svg';
import Image from 'next/image';

function CaseStudies() {
  return (
    <div>
      <div className="case-studies-area rts-section-gap position-relative">
        <div className="shape-left-top">
          <Image
            className="wow move-right"
            src="/assets/images/video/shape/03.png"
            alt="shape"
            width={80}
            height={80}
          />
        </div>
        <div className="shape-bottom">
          <Image
            src="/assets/images/video/shape/02.png"
            alt=""
            className="wow move-left"
            data-wow-offset={120}
            width={80}
            height={80}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center-title-bg-white">
                <h2 className="title">AI Success Stories from India&apos;s Silicon Valley</h2>
                <p>From Bengaluru, India&apos;s tech hub, AiTweak leads innovation in artificial intelligence solutions. As a premier AI company in India, we empower businesses across the nation with cutting-edge NLP, computer vision, and predictive analytics, transforming industries from Karnataka to Mumbai.</p>
              </div>
            </div>
          </div>
          <div className="row mt--10 g-80">
            <div
              className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-aos="fade-up" data-aos-delay="300"
            >
              <div className="single-case-studies">
                <div className="thumbnail">
                  <Image
                    loading="lazy"
                    rel="preload"
                    src="assets/images/case-studies/01.webp"
                    alt="Healthcare AI"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="inner-content">
                  <span>Healthcare AI Solutions in India, Natural Language Processing</span>
                  <h3 className="title">Smart Healthcare AI Platform for Indian Hospitals</h3>
                  <p className="description">
                    AiTweak, a leading AI company in Bengaluru, developed an advanced NLP-powered diagnostics platform for one of India&apos;s premier hospitals. Our made-in-India solution enables doctors across the country to analyze patient records and medical histories in real-time. Our locally-trained transformer models, specifically adapted for Indian healthcare needs, achieved 92% accuracy in identifying potential diagnoses. The solution reduced diagnostic time by 65%, improved patient outcomes across multiple Indian cities, and revolutionized hospital workflows, demonstrating India&apos;s leadership in healthcare AI innovation.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-aos="fade-up" data-aos-delay="600"
            >
              <div className="single-case-studies">
                <div className="thumbnail">
                  <Image
                    loading="lazy"
                    rel="preload"
                    src="assets/images/case-studies/02.webp"
                    alt="Retail AI"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="inner-content">
                  <span>Indian E-commerce, AI-Powered Retail Analytics</span>
                  <h3 className="title">AI Shopping Personalization for Indian Market</h3>
                  <p className="description">
                    For one of India&apos;s leading e-commerce platforms, AiTweak&apos;s Bengaluru team built an AI-powered predictive analytics engine that delivers culturally-aware, hyper-personalized product recommendations. Understanding India&apos;s diverse shopping patterns through machine learning and real-time customer data, our solution increased conversion rates by 40% and reduced cart abandonment by 25%. Our local expertise ensured seamless integration with existing systems, helping Indian retailers thrive in the digital age with data-driven precision.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-aos="fade-up" data-aos-delay="300"
            >
              <div className="single-case-studies">
                <div className="thumbnail">
                  <Image
                    loading="lazy"
                    rel="preload"
                    src="assets/images/case-studies/03.webp"
                    alt="Agriculture AI"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="inner-content">
                  <span>Indian Agriculture AI, Computer Vision</span>
                  <h3 className="title">AI-Powered Farming Solutions for India</h3>
                  <p className="description">
                    AiTweak transformed Indian agriculture, starting with a Karnataka-based agribusiness, through our innovative computer vision system for precision farming. Developed in Bengaluru and optimized for Indian farming conditions, our AI analyzed drone-captured imagery to monitor crop health, detecting issues with 98% accuracy. The solution optimized water usage by 30% and boosted yields by 20%, empowering sustainable agriculture across India. Our local experts delivered a scalable platform that adapts to India&apos;s diverse agricultural landscapes and farming needs, driving efficiency and growth in the Indian agricultural sector.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-aos="fade-up" data-aos-delay="600"
            >
              <div className="single-case-studies">
                <div className="thumbnail">
                  <Image
                    loading="lazy"
                    rel="preload"
                    src="assets/images/case-studies/04.webp"
                    alt="Fintech AI"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="inner-content">
                  <span>Indian Fintech, AI-Powered Security</span>
                  <h3 className="title">AI Fraud Prevention for Indian Fintech</h3>
                  <p className="description">
                    AiTweak&apos;s Bengaluru team crafted an intelligent automation system for a leading Indian fintech startup, combining India-specific NLP models and machine learning to detect fraudulent transactions in real-time. Designed specifically for Indian financial patterns, the solution achieved 95% accuracy, reducing false positives by 50% and saving millions in potential losses. Our local expertise and agile approach ensured rapid deployment, helping Indian financial institutions secure their platforms and build customer trust with made-in-India AI solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt--60">
            <div className="col-lg-12">
              <a
                href="/case-studies"
                className="rts-btn btn-border more-project-btn"
              >
                Explore More AI Solutions
                <Image
                  loading="lazy"
                  src="/assets/images/service/icons/13.svg"
                  alt="arrow"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudies
