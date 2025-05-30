"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import { ReactSVG } from 'react-svg';

function LargeVideo() {
    const [isOpen, setIsOpen] = useState(false);
    const videoLink = 'https://www.youtube.com/watch?v=7xTGNNLPyMI&t=12082s'; // Define the video link here
    const [videoId, setVideoId] = useState(null);

    useEffect(() => {
        // Extract the video ID from the video link
        if (videoLink) {
            const urlParts = videoLink.split('v='); // Assuming YouTube URL with 'v=' param
            const id = urlParts.length > 1 ? urlParts[1].split('&')[0] : null;
            setVideoId(id);
        }
    }, [videoLink]);

    return (
        <div>
            {/* large video area start */}
            <div className="alrge-video-area rts-section-gap">
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
                <div className="shape-bottom">
                    <img
                        loading="lazy"
                        rel="preload"
                        src="assets/images/video/shape/02.png"
                        alt=""
                        className="wow move-left"
                        data-wow-offset={120}
                    />
                </div>
                <div className="container-large">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-video-top">
                                <p className="large">
                                    From Bengaluru’s tech heart, we deliver{" "}
                                    <span className="move-right" data-aos="move-right">
                                        AI-driven
                                    </span>
                                    solutions to empower businesses and{" "}
                                    <span data-aos="move-left">
                                        transform
                                    </span>{" "}
                                    industries.
                                </p>
                                <p className="disc">
                                    AiTweak’s cutting-edge NLP, computer vision, and predictive analytics solutions drive innovation, streamline operations, and unlock new opportunities for businesses worldwide.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-12 mt--70">
                            <div className="image--large-video jarallax">
                                <img
                                    className="jarallax-img"
                                    src="assets/images/gimages/pexels-googledeepmind-17483874.jpg"
                                    alt="AI Innovation"
                                />
                                <div className="vedio-icone">
                                    <Link href={'#'} className="vedio-icone">
                                        <span id="play-video" className="video-play-button" onClick={() => setIsOpen(true)}>
                                            <span />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="large-video-bottom">
                                <h2 className="title wow fadeInUp" data-wow-delay=".1s">
                                    Download Our AI Transformation Guide
                                </h2>
                                <p className="disc wow fadeInUp" data-wow-delay=".3s">
                                    Discover how AiTweak’s AI solutions can revolutionize your business with best practices, real-world use cases, and strategies to maximize ROI in NLP, automation, and analytics.
                                </p>
                              
                                <a
                                    href="/services"
                                    className="rts-btn btn-primary wow fadeInUp"
                                    data-wow-delay=".5s"
                                    style={{
                                        visibility: "visible",
                                        animationDelay: "0.7s",
                                        animationName: "fadeInUp"
                                    }}
                                >
                                    Explore AI Solutions
                                    <ReactSVG
                                        src="assets/images/service/icons/13.svg"
                                        alt="arrow"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* large video area end */}
            {videoId && (
                <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId={videoId}
                    onClose={() => setIsOpen(false)}
                />
            )}
        </div>
    )
}

export default LargeVideo