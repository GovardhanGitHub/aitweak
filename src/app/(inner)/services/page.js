"use client"
import React from 'react';
import Link from 'next/link';
import { aiServices } from '@/data/AiServices.json';

export default function ServicesPage() {
    return (
        <div className="rts-service-area rts-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center-title-area">
                            <h2 className="title">Our Services</h2>
                            <p className="disc">
                                Explore our comprehensive range of innovative solutions designed to transform your business through cutting-edge technology.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--30">
                    {aiServices.map((service) => (
                        <div key={service.id} className="col-lg-4 col-md-6 col-sm-12">
                            <div className="service-card-alpha">
                                <div className="icon">
                                    <img src={service.icon} alt={service.title} />
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href={`/services/${service.slug}`}>{service.title}</Link>
                                    </h4>
                                    <p className="disc">{service.description}</p>
                                    <Link href={`/services/${service.slug}`} className="rts-read-more">
                                        Learn More <i className="fa-regular fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
