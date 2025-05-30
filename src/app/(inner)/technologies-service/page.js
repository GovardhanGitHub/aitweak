import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import FeatureTwo from "@/components/feature/FeatureTwo";
import TestimonialsFive from "@/components/testimonials/TestimonialsFive";
import MoreSolutions from "@/components/service-component/MoreSolution";

export default function Home() {
    return (
        <div className='#'>
            <HeaderTwo />
            <div>
                <div className="container-large">
                    {/* service area start */}
                    <div className="service-single-area-banner ai-service bg_image jarallax"></div>
                    {/* service area end */}
                </div>

            </div>
            <div>

                <div className="service-area-details-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner-content">
                                    <div className="top">
                                        <h1 className="title">AI Technologies Service</h1>
                                        <p className="disc">
                                            AI Technologies Service delivers cutting-edge artificial intelligence solutions, automating complex processes, enhancing decision-making, driving innovation, and transforming businesses across industries.
                                        </p>
                                    </div>
                                    <div className="mid-content">
                                        <p className="disc">
                                            We are your strategic partners in AI-driven transformation. With
                                            extensive expertise in machine learning, deep learning, and AI implementation, we
                                            deliver intelligent solutions that revolutionize operations, boost
                                            productivity, and unlock new possibilities for your business.
                                        </p>
                                        <p className="disc">
                                            AITweak AI works with organizations of all scales, from innovative startups
                                            to Fortune 500 enterprises. We develop custom AI models tailored to your
                                            specific industry challenges and business objectives, offering comprehensive
                                            artificial intelligence services including predictive analytics, computer vision,
                                            natural language processing, and intelligent automation systems.
                                        </p>
                                        <p className="disc">
                                            Our team of AI specialists and data scientists continuously advance their
                                            expertise through cutting-edge research, collaboration with leading AI institutes,
                                            partnerships with major technology providers like NVIDIA, Google Cloud AI, and AWS,
                                            while conducting breakthrough research in emerging AI technologies and
                                            responsible AI development practices.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service-image-mid-iamge-jarallax-area">
                    <div className="container-large">
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="thumbnail-area-large-service-detaile-mid jarallax jara-mask-1">
                                    <img
                                        className="jarallax-img"
                                        src="assets/images/service/07.webp"
                                        alt="AI machine learning visualization"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="thumbnail-area-large-service-detaile-mid jarallax jara-mask-1">
                                    <img
                                        className="jarallax-img"
                                        src="assets/images/service/08.webp"
                                        alt="AI neural network architecture"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service-area-details-wrapper border-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner-content">
                                    <div className="mid-content">
                                        <p className="disc">
                                            We are your trusted AI transformation partners. With
                                            proven track record in deploying enterprise-grade AI solutions, our team of certified
                                            AI engineers and data scientists deliver intelligent systems that drive exponential
                                            growth, optimize operations, and secure your competitive advantage.
                                        </p>
                                        <p className="disc">
                                            AITweak AI specializes in end-to-end AI implementation across diverse industries
                                            including healthcare, finance, manufacturing, and retail. We design bespoke AI
                                            architectures that scale with your business, from proof-of-concept to production
                                            deployment, ensuring seamless integration with existing systems while maintaining
                                            the highest standards of AI ethics and data privacy.
                                        </p>
                                        <p className="disc">
                                            Our unified AI platform accelerates innovation while providing comprehensive
                                            data intelligence and automated insights. Discover how we empower your organization
                                            to solve complex challenges with AI-driven solutions that deliver measurable results.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <MoreSolutions />


            <FeatureTwo />
            <TestimonialsFive />
            <>
                {/* rts call to action area start */}
                <div className="rts-call-to-action-area-about rts-section-gapTop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="title">Book a Free AI Consultation</h2>
                                <p className="disc">
                                    Schedule a complimentary AI strategy session to explore how artificial intelligence
                                    can transform your business operations and unlock new growth opportunities.
                                </p>
                                <a
                                    href="#"
                                    className="rts-btn btn-primary wow fadeInUp"
                                    data-wow-delay=".5s"
                                >
                                    Explore AI Solutions
                                    <img
                                        className="injectable"
                                        src="assets/images/service/icons/13.svg"
                                        alt="arrow"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>

            <FooterOne />
            <BackToTop />
        </div>
    );
}