"use client"
import React from 'react'
import { ReactSVG } from 'react-svg';
import Image from 'next/image';

function CtaTwo() {
    return (
        <div>
            {/* rts cta area start */}
            <div className="rts-cta-area-two rts-section-gap position-relative bg_cta-one bg_iamge">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main-area-wrapper-cta">
                                <span className="pre-title">Need a hand ?</span>
                                <h2 className="title">
                                    Encourages scheduling a no-obligation consultation
                                </h2>
                                <p>Offers a 30-day free trial of AITweak Managed IT Services.</p>
                                <a href="contact.html" className="rts-btn btn-bold btn-border">
                                    Begin Free Trials
                                    <ReactSVG
                                        src="assets/images/service/icons/13.svg"
                                        alt="arrow"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-iamge">
                    <Image
                        src="/assets/images/cta/03.png"
                        width={120}
                        height={120}
                        alt="cta"
                        className="one wow toBottomLeft"
                        data-wow-offset={150}
                    />
                    <Image
                        src="/assets/images/cta/04.png"
                        width={120}
                        height={120}
                        alt="cta"
                        className="two wow toTopRight"
                        data-wow-offset={150}
                    />
                </div>
                <div className="bg-cta-area-two">
                    <Image 
                        src="/assets/images/cta/01.webp" 
                        width={400} 
                        height={300} 
                        alt="cta background"
                    />
                </div>
            </div>
            {/* rts cta area s */}

        </div>
    )
}

export default CtaTwo