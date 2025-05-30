"use client"
import React from 'react'
import Link from 'next/link';
import AiServicesData from '@/data/AiServices.json';

const { aiServices } = AiServicesData;
const industries = [
    { name: "Construction", slug: "construction-industry" },
    { name: "Healthcare", slug: "healthcare-industry" },
    { name: "Ecommerce", slug: "ecommerce-industry" },
    { name: "Fintech", slug: "fintech-industry" },
    { name: "Logistic", slug: "logistic-industry" },
    { name: "Travel Industry", slug: "travel-industry" }
];

function FooterOne() {
    // Filter core services for footer
    const footerServices = aiServices.filter(service => service.category === "core");

    return (
        <div>
            {/* rts footer area start */}
            <div className="rts-footer-area rts-section-gapTop pb--80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="logo-area">
                                <Link href="/#" className="logo">
                                    <img src="/assets/images/logo/logo-1.svg" alt="logo" />
                                </Link>
                                <p className="disc">
                             AiTweak empowers businesses with transformative AI solutions. Explore how our innovative NLP, computer vision, and predictive analytics are revolutionizing industries.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="row g-5">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="single-nav-area-footer">
                                        <p className="parent">Services</p>
                                        <ul>
                                            {footerServices.map((service) => (
                                                <li key={service.id}>
                                                    <Link href={`/services/${service.slug}`}>{service.title}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="single-nav-area-footer">
                                        <p className="parent">Company</p>
                                        <ul>
                                            <li>
                                                <Link href="/about">About us</Link>
                                            </li>
                                            <li>
                                                <Link href="/career">Careers</Link>
                                            </li>
                                            <li>
                                                <Link href="/team">Our Team</Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-grid">News</Link>
                                            </li>
                                            <li>
                                                <Link href="/partner">Partner</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="single-nav-area-footer">
                                        <p className="parent">Industries</p>
                                        <ul>
                                            {industries.map((industry, index) => (
                                                <li key={index}>
                                                    <Link href={`/industries/${industry.slug}`}>{industry.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="single-nav-area-footer">
                                        <p className="parent">Legal</p>
                                        <ul>
                                            <li>
                                                <Link href="/terms-of-use">Terms</Link>
                                            </li>
                                            <li>
                                                <Link href="/privacy-policy">Privacy</Link>
                                            </li>
                                            <li>
                                                <Link href="/cookies-policy">Cookies</Link>
                                            </li>
                                            <li>
                                                <Link href="/faq">Faq</Link>
                                            </li>
                                            <li>
                                                <Link href="/free-consultation">Consultation</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts footer area end */}
            {/* rts copyright area start */}
            <div className="rts-copyright-area-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright-wrapper">
                                <p>© 2024 AiTweak. All rights reserved.</p>
                                <div className="social-copyright-area">
                                    <ul>
                                        <li aria-label="Visit our Facebook page">
                                            <Link href="/#">
                                                <i className="fa-brands fa-facebook-f" />
                                            </Link>
                                        </li>
                                        <li aria-label="Visit our Twitter page">
                                            <Link href="/#">
                                                <i className="fa-brands fa-twitter" />
                                            </Link>
                                        </li>
                                        <li aria-label="Visit our Youtube page">
                                            <Link href="/#">
                                                <i className="fa-brands fa-youtube" />
                                            </Link>
                                        </li>
                                        <li aria-label="Visit our Linkedin page">
                                            <Link href="/#">
                                                <i className="fa-brands fa-linkedin" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts copyright area end */}
        </div>
    )
}

export default FooterOne
