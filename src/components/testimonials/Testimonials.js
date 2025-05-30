"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import required modules
import { Autoplay } from "swiper/modules";

function Testimonials() {
    return (
        <div>
            {/* testimonials area start */}
            <div className="testimonials-area-start rts-section-gapTop bg-primary position-relative">
                <div className="shape-top-right wow slideInLeft" data-wow-offset={160}>
                    <img
                        loading="lazy"
                        rel="preload"
                        src="assets/images/testimonials/03.png"
                        alt="testimonials"
                    />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-between-wrapper">
                                <h2 className="title">Client Success Stories</h2>
                                <p className="disc">
                                    From Bengaluru’s tech heart, AiTweak empowers businesses with transformative AI solutions. Discover how our clients, including Astute Software Solutions and 3Engines Cloud, achieved remarkable results with our innovative NLP, computer vision, and predictive analytics.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--80">
                        <div className="col-lg-12 ">
                            <div className="swiper mySwiper-Testimonials" dir="ltr">
                                <Swiper
                                    slidesPerView={2}
                                    spaceBetween={0}
                                    loop={true}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        240: {
                                            slidesPerView: 1,
                                            spaceBetween: 0,
                                        },
                                        768: {
                                            slidesPerView: 1,
                                            spaceBetween: 0,
                                        },
                                        1024: {
                                            slidesPerView: 2,
                                            spaceBetween: 0,
                                        },
                                    }}
                                    speed={1000}
                                    modules={[Autoplay]}
                                >
                                    <SwiperSlide>
                                        <div className="single-testimonials-area-one">
                                            <p className="disc">
                                                “AiTweak revolutionized our fintech platform with their NLP-powered chatbot. The solution handles 90% of customer inquiries automatically, reducing response times by 70%. Their Bengaluru-based team provided seamless integration and ongoing support, making our customer experience world-class.”
                                            </p>
                                            <div className="author-wrapper">
                                                <div className="avatar">
                                                    <img
                                                        src="assets/images/testimonials/01.webp"
                                                        alt="testimonials-avatar"
                                                    />
                                                </div>
                                                <div className="information">
                                                    <h6 className="title">Priya Sharma</h6>
                                                    <span className="desig">CEO of Astute Software Solutions</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-testimonials-area-one">
                                            <p className="disc">
                                                “AiTweak’s predictive analytics transformed our supply chain at Astute Software Solutions. Their AI models optimized inventory forecasting, cutting costs by 30% and improving delivery times by 25%. The team’s expertise and collaborative approach made all the difference.”
                                            </p>
                                            <div className="author-wrapper">
                                                <div className="avatar">
                                                    <img
                                                        src="assets/images/testimonials/02.webp"
                                                        alt="testimonials-avatar"
                                                    />
                                                </div>
                                                <div className="information">
                                                    <h6 className="title">Rahul Menon</h6>
                                                    <span className="desig">COO of Astute Software Solutions</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-testimonials-area-one">
                                            <p className="disc">
                                                “Partnering with AiTweak elevated 3Engines Cloud’s infrastructure management. Their computer vision solution automated server monitoring, achieving 99% accuracy in anomaly detection and reducing downtime by 40%. AiTweak’s Bengaluru team delivered a tailored, scalable solution that drives our efficiency.”
                                            </p>
                                            <div className="author-wrapper">
                                                <div className="avatar">
                                                    <img
                                                        src="assets/images/testimonials/01.webp"
                                                        alt="testimonials-avatar"
                                                    />
                                                </div>
                                                <div className="information">
                                                    <h6 className="title">Anita Desai</h6>
                                                    <span className="desig">CTO of 3Engines Cloud</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* testimonials area end */}
        </div>
    )
}

export default Testimonials