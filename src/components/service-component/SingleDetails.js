"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import aiServicesData from '@/data/AiServices.json';

function SingleDetails() {
  const params = useParams();
  const { aiServices } = aiServicesData;
  
  // Find the service by slug from params
  const service = aiServices.find(s => s.slug === params?.slug) || aiServices[0];
  
  // Get related services (same category)
  const relatedServices = aiServices
    .filter(s => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  return (
    <>
      {/* Add banner section for proper spacing */}
      <div className="career-single-banner-area ptb--70 blog-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="career-page-single-banner blog-page">
                <h1 className="title">{service.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add background banner */}
      <div className="container-large">
        <div className={`service-single-area-banner ${service.category}-service bg_image jarallax`}></div>
      </div>

      <div className="service-area-details-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
                <div className="top">
                  <p className="disc">{service.description}</p>
                </div>
                <div className="mid-content">
                  <p className="disc">{service.serviceDetails.overview}</p>
                  <p className="disc">{service.serviceDetails.approach}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-image-mid-iamge-jarallax-area">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="thumbnail-area-large-service-detaile-mid jarallax jara-mask-1">
                <Image
                  className="jarallax-img"
                  src="/assets/images/service/07.webp"
                  alt={`${service.title} implementation`}
                  width={600}
                  height={400}
                  priority
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="thumbnail-area-large-service-detaile-mid jarallax jara-mask-1">
                <Image
                  className="jarallax-img"
                  src="/assets/images/service/08.webp"
                  alt={`${service.title} solutions`}
                  width={600}
                  height={400}
                  priority
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
                  <p className="disc">{service.serviceDetails.benefits}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services Section */}
      {relatedServices.length > 0 && (
        <div className="related-services-section rts-section-gap">
          <div className="container">
            <div className="section-title">
              <h2>Related Services</h2>
              <p>Explore other {service.category} services</p>
            </div>
            <div className="row g-5 mt-5">
              {relatedServices.map((relatedService) => (
                <div key={relatedService.id} className="col-lg-4 col-md-6">
                  <div className="service-card">
                    <div className="icon">
                      <Image
                        src={`/${relatedService.icon}`}
                        alt={relatedService.title}
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="content">
                      <h3>{relatedService.title}</h3>
                      <p>{relatedService.description}</p>
                      <Link href={`/services/${relatedService.slug}`} className="rts-btn btn-primary">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleDetails;