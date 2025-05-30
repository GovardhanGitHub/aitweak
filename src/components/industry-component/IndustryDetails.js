"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import BackToTop from "@/components/common/BackToTop";
import aiServicesData from '@/data/AiServices.json';
import '@/styles/industry-details.css';

function IndustryDetails() {
  const params = useParams();
  const { industries } = aiServicesData;
  
  // Find the industry by removing the "-industry" suffix from the slug
  const cleanSlug = params?.slug?.replace('-industry', '');
  const industry = industries.find(i => i.slug.includes(cleanSlug)) || industries[0];
  
  // Get related industries (excluding current one)
  const relatedIndustries = industries
    .filter(i => i.id !== industry.id)
    .slice(0, 3);

  return (
    <>
      {/* Add banner section for proper spacing */}
      <div className="industry-banner-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="industry-page-banner">
                <h1 className="title">{industry.title}</h1>
                <p className="mt-4">{industry.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add background banner */}
      <div className="container-large">
        <div className={`industry-single-area-banner ${params.slug} bg_image jarallax`}></div>
      </div>

      <div className="rts-service-details-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-content-area">
                <div className="thumbnail mb--30">
                  <Image 
                    src={`/assets/images/industry/${cleanSlug}.webp`}
                    alt={`${industry.title} Industry Solutions`}
                    width={800}
                    height={450}
                    priority
                  />
                </div>
                <h3 className="title">{industry.title} Industry Solutions</h3>
                <p>{industry.description}</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-details-right">
                <div className="single-service-sidebar">
                  <div className="title">
                    <h3>All Industries</h3>
                  </div>
                  <ul>
                    {industries.map((ind) => (
                      <li key={ind.id}>
                        <Link href={ind.slug}>{ind.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Industries Section */}
      {relatedIndustries.length > 0 && (
        <div className="related-industries-section rts-section-gap">
          <div className="container">
            <div className="section-title">
              <h2>Related Industries</h2>
              <p>Explore other industry solutions</p>
            </div>
            <div className="row g-5 mt-5">
              {relatedIndustries.map((relatedIndustry) => (
                <div key={relatedIndustry.id} className="col-lg-4 col-md-6">
                  <div className="industry-card">
                    <div className="content">
                      <h3>{relatedIndustry.title}</h3>
                      <p>{relatedIndustry.description}</p>
                      <Link href={relatedIndustry.slug} className="rts-btn btn-primary">
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

      <BackToTop />
    </>
  );
}

export default IndustryDetails;
