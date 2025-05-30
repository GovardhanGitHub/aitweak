import React from 'react'
import aiServicesData from '@/data/AiServices.json';

function ServiceList() {
    const { aiServices } = aiServicesData;
    
    // Get services for the list layout (can be different selection)
    const listServices = aiServices // Services 5-8 for variety
    
    // Array of available icons from the original component
    const availableIcons = [
        "assets/images/service/icons/42.svg",
        "assets/images/service/icons/43.svg",
        "assets/images/service/icons/44.svg",
        "assets/images/service/icons/45.svg"
    ];
    
    return (
        <>
            {/* service-we-provice-area start */}
            <div className="rts-service-provide-area rts-section-gap">
                <div className="container-s-float">
                    <div className="row">
                        <div className="col-lg-12">
                            {listServices.map((service, index) => (
                                <div
                                    key={service.id}
                                    className="single-service-list wow fadeInUp"
                                    data-wow-offset={120}
                                    data-wow-delay={`.${(index + 1) * 2}s`}
                                >
                                    <div className="icon">
                                        <img 
                                            src={availableIcons[index % availableIcons.length]} 
                                            alt={`${service.title} service icon`} 
                                        />
                                    </div>
                                    <div className="main-information-area">
                                        <h3 className="title">{service.title}</h3>
                                        <p className="disc">
                                            {service.description}
                                        </p>
                                    </div>
                                    <a href={service.slug} className="arrow-btn">
                                        <img 
                                            src="assets/images/service/icons/13.svg" 
                                            alt="view service details" 
                                        />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* service-we-provice-area end */}
        </>
    )
}

export default ServiceList