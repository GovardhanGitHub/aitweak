import React from 'react'
import aiServicesData from '@/data/AiServices.json';

function ServiceSeven() {
    const { aiServices } = aiServicesData;
    
    // Get first 4 services for the 4-column layout
    const displayServices = aiServices.slice(0, 4);
    
    return (
        <div>
            {/* banner bottom service area start */}
            <div className="service-main-wrapper-area-service pb--80">
                <div className="container">
                    <div className="row">
                        <div className="row g-5 mt--0">
                            {displayServices.map((service, index) => (
                                <div
                                    key={service.id}
                                    className="col-lg-3 mt--0 wow fadeInUp"
                                    data-wow-offset={120}
                                    data-wow-delay={`.${(index + 1) * 2}s`}
                                >
                                    <div className="single-service-border-top">
                                        <div className="icon">
                                            <img 
                                                src={service.icon} 
                                                alt={`${service.title} icon`} 
                                            />
                                        </div>
                                        <p className="disc">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* banner bottom service area end */}
        </div>
    )
}

export default ServiceSeven