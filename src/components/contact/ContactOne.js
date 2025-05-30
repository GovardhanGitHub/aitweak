import React from 'react'

function ContactOne() {
    return (
        <div>
            {/* contact area start */}
            <div className="contact-area-start rts-section-gap bg_color-dark-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-center-footer-5">
                                <h2 className="title">Connect with AiTweak</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--80">
                        <div className="col-lg-12">
                            <div className="thumbnail-map">
                                <img src="assets/images/contact/01.webp" alt="banner" />
                                <div className="map-tool-tip-single">
                                    <a
                                        href="#"
                                        className="map-tooltip"
                                        data-tooltip="Yelahanka, Bengaluru, Karnataka"
                                        tabIndex={0}
                                    >
                                        <span />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="map-location-area">
                                <div className="location-single">
                                    <h3 className="title">Bengaluru</h3>
                                    <p className="address">Yelahanka, Bengaluru, Karnataka, India</p>
                                    <a href="tel:+919353843389" className="number">
                                        +91 93538 43389
                                    </a>
                                    <a className="mail" href="mailto:contact@aitweak.ai">
                                        contact@aitweak.ai
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact area end */}
        </div>
    )
}

export default ContactOne