import BackToTop from "@/components/common/BackToTop";
import Nav from "@/components/header/Nav";
import FooterOne from "@/components/footer/FooterOne";
import CtaOne from "@/components/cta/CtaOne";
import { ReactSVG } from "react-svg";
import Link from "next/link";
import aiServicesData from "@/data/AiServices.json";

export default function IndustryPage() {
    const { industries } = aiServicesData;

    return (
        <>
            <div className="header-two">
                <Nav />
            </div>

            <div className="rts-career-banner-area rts-section-gap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="career-banner-wrapper">
                                <h1 className="title">Tailored Solutions for Every Industry</h1>
                                <p className="disc">
                                    We deliver cutting-edge AI solutions across diverse industries,
                                    empowering businesses with innovation and efficiency.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-industry-thumbnail text-end">
                                <img
                                    src="/assets/images/industry/industry-main.webp"
                                    alt="Industry Solutions Banner"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rts-service-area bg-light rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        {industries.map((industry) => (
                            <div
                                key={industry.id}
                                className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="single-service-area-wrapper service-two">
                                    <div className="icon">
                                        <img src={`/${industry.icon}`} alt={industry.title} />
                                    </div>
                                    <Link href={industry.slug}>
                                        <h5 className="title">{industry.title}</h5>
                                    </Link>
                                    <p className="disc">
                                        {industry.description}
                                    </p>
                                    <Link
                                        className="rts-btn btn-primary rounded-8"
                                        href={industry.slug}
                                    >
                                        Learn More
                                        <ReactSVG
                                            className="ml--5"
                                            src="/assets/images/service/icons/arrow-sm-right.svg"
                                        />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <CtaOne />
            <FooterOne />
            <BackToTop />
        </>
    );
}
