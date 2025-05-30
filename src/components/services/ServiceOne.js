"use client"
import React from 'react'
import { ReactSVG } from 'react-svg';
import Link from 'next/link';
import AiServicesData from '@/data/AiServices.json';
const { aiServices } = AiServicesData;

function ServiceOne() {
    // Filter core services
    const coreServices = aiServices.filter(service => service.category === "core" || service.category === "advanced");

    return (
        <div>
            {/* solution expertiece */}
            <div className="solution-expertice-area rts-section-gap bg-solution">
                <div className="top-left wow slideInLeft">
                    <img
                        loading="lazy"
                        rel="preload"
                        src="assets/images/service/icons/02.png"
                        alt="service"
                    />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-center-2">
                                <h2 className="title">Innovative solutions from experts!</h2>
                                <p>
                                    Offers a unified platform that fosters innovation while providing
                                    end-to-end data management. See how we help your team solve
                                    today’s biggest challenges.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 mt--70">
                        {coreServices.map((service) => (
                            <div key={service.id} className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="single-solution-style-one border-left">
                                    <div className="right-draw">
                                        <img
                                            loading="lazy"
                                            rel="preload"
                                            src="assets/images/service/icons/01.png"
                                            alt="icons"
                                        />
                                    </div>
                                    <div className="icon">
                                        <img
                                            loading="lazy"
                                            rel="preload"
                                            src={service.icon}
                                            alt={service.title}
                                        />
                                    </div>
                                    <h4 className="title">{service.title}</h4>
                                    <p className="disc">{service.description}</p>
                                    <Link href={`/services/${service.slug}`} className="rts-read-more">
                                        Learn More
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* solution expertiece area end */}
        </div>
    )
}

export default ServiceOne