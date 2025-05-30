"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Testimonials() {
    return (
        <div className="mySwiper-testimonials-4">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation={true}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="swiper-testimonials"
            >
                <SwiperSlide>
                    <div className="single-testimonials-4">
                        <p className="disc">
                            “The data analytics solution provided by AITweak has
                            revolutionized our research capabilities. Their team
                            expertise in handling large datasets and creating
                            insightful visualizations has accelerated our drug
                            discovery process.”
                        </p>
                        <div className="user-area">
                            <img
                                src="assets/images/testimonials/09.png"
                                alt="testimonials"
                            />
                            <div className="info-area">
                                <h6 className="title">Deon Kar</h6>
                                <span>Operations Manager at CloudNine</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-testimonials-4">
                        <p className="disc">
                            “The data analytics solution provided by AITweak has
                            revolutionized our research capabilities. Their team
                            expertise in handling large datasets and creating
                            insightful visualizations has accelerated our drug
                            discovery process.”
                        </p>
                        <div className="user-area">
                            <img
                                src="assets/images/testimonials/08.png"
                                alt="testimonials"
                            />
                            <div className="info-area">
                                <h6 className="title">Marry Knowles</h6>
                                <span>Operations Manager at CloudNine</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-testimonials-4">
                        <p className="disc">
                            “The data analytics solution provided by AITweak has
                            revolutionized our research capabilities. Their team
                            expertise in handling large datasets and creating
                            insightful visualizations has accelerated our drug
                            discovery process.”
                        </p>
                        <div className="user-area">
                            <img
                                src="assets/images/testimonials/07.png"
                                alt="testimonials"
                            />
                            <div className="info-area">
                                <h6 className="title">Mark Joe</h6>
                                <span>Operations Manager at CloudNine</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-testimonials-4">
                        <p className="disc">
                            “The data analytics solution provided by AITweak has
                            revolutionized our research capabilities. Their team
                            expertise in handling large datasets and creating
                            insightful visualizations has accelerated our drug
                            discovery process.”
                        </p>
                        <div className="user-area">
                            <img
                                src="assets/images/testimonials/01.png"
                                alt="testimonials"
                            />
                            <div className="info-area">
                                <h6 className="title">Jarry Kew</h6>
                                <span>Operations Manager at CloudNine</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-testimonials-4">
                        <p className="disc">
                            “The data analytics solution provided by AITweak has
                            revolutionized our research capabilities. Their team
                            expertise in handling large datasets and creating
                            insightful visualizations has accelerated our drug
                            discovery process.”
                        </p>
                        <div className="user-area">
                            <img
                                src="assets/images/testimonials/02.png"
                                alt="testimonials"
                            />
                            <div className="info-area">
                                <h6 className="title">Krunal Panday</h6>
                                <span>Operations Manager at CloudNine</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Testimonials;