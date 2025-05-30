"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ReactSVG } from "react-svg";
import aiServicesData from "@/data/AiServices.json";

function Nav() {
  const { aiServices, industries } = aiServicesData;

  // Split services into three columns
  const coreServices = aiServices.filter(
    (service) => service.category === "core"
  );
  const advancedServices = aiServices.filter(
    (service) => service.category === "advanced"
  );
  const specializedServices = aiServices.filter(
    (service) => service.category === "specialized"
  );

  // Split industries into two columns for better presentation
  const industriesColumnOne = industries.slice(0, 4);
  const industriesColumnTwo = industries.slice(4);

  return (
    <div>
      <div className="nav-area">
        <nav>
          <ul>
            <li>
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>

            <li>
              <Link className="nav-link" href="/case-studies">
                Case Studies
              </Link>
            </li>

            <li className="has-dropdown position-static with-megamenu">
              <Link className="nav-link" href="/services">
                AI Services
                <i className="fa-duotone fa-regular fa-chevron-down" />
              </Link>
              <div className="submenu">
                <div className="container">
                  <div className="row">
                    {/* Core AI Services Column */}
                    <div className="col-lg-3">
                      <ul className="single-menu parent-nav">
                        <li className="menu-category-header">
                          <h6>Core AI Services</h6>
                        </li>
                        {coreServices.map((service) => (
                          <li key={service.id}>
                            <Link
                              className="single-service-area-wrapper"
                              href={`/services/${service.slug}`}
                            >
                              <div className="icon">
                                <Image
                                  src={`/${service.icon}`}
                                  alt={service.title}
                                  width={40}
                                  height={40}
                                />
                              </div>
                              <div className="info">
                                <h4 className="title">{service.title}</h4>
                                <p>{service.description}</p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Advanced AI Services Column */}
                    <div className="col-lg-3">
                      <ul className="single-menu parent-nav">
                        <li className="menu-category-header">
                          <h6>Advanced AI Solutions</h6>
                        </li>
                        {advancedServices.map((service) => (
                          <li key={service.id}>
                            <Link
                              className="single-service-area-wrapper"
                              href={`/services/${service.slug}`}
                            >
                              <div className="icon">
                                <Image
                                  src={`/${service.icon}`}
                                  alt={service.title}
                                  width={40}
                                  height={40}
                                />
                              </div>
                              <div className="info">
                                <h4 className="title">{service.title}</h4>
                                <p>{service.description}</p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specialized AI Services Column */}
                    <div className="col-lg-3">
                      <ul className="single-menu parent-nav">
                        <li className="menu-category-header">
                          <h6>Specialized AI Services</h6>
                        </li>
                        {specializedServices.map((service) => (
                          <li key={service.id}>
                            <Link
                              className="single-service-area-wrapper"
                              href={`/services/${service.slug}`}
                            >
                              <div className="icon">
                                <Image
                                  src={`/${service.icon}`}
                                  alt={service.title}
                                  width={40}
                                  height={40}
                                />
                              </div>
                              <div className="info">
                                <h4 className="title">{service.title}</h4>
                                <p>{service.description}</p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Industries Column */}
                    <div className="col-lg-3">
                      <ul className="single-menu parent-nav industry-signle-menu">
                        <li className="parent-top-industry">
                          <p>AI-Powered Industries</p>
                        </li>
                        {industries.map((industry) => (
                          <li key={industry.id}>
                            <Link className="industries" href={industry.slug}>
                              <ReactSVG
                                src={industry.icon}
                                aria-label={industry.title}
                              />
                              {industry.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link href="/blog-grid">
                Blogs
              </Link>
            </li>

            <li>
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
