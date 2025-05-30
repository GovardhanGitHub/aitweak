"use client";
import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { ReactSVG } from "react-svg";
import aiServicesData from "@/data/AiServices.json";

function SideBar({ isSidebarOpen, toggleSidebar }) {
  const { aiServices, industries } = aiServicesData;

  // Split services into categories
  const coreServices = aiServices.filter((service) => service.category === "core");
  const advancedServices = aiServices.filter((service) => service.category === "advanced");
  const specializedServices = aiServices.filter((service) => service.category === "specialized");

  return (
    <div>
      <div id="side-bar" className={`side-bar header-two ${isSidebarOpen ? 'show' : ''}`}>
        <button className="close-icon-menu" aria-label="Close Menu" onClick={toggleSidebar}>
          <i className="far fa-times"></i>
        </button>
        <div className="mobile-menu-main">
          <nav className="nav-main mainmenu-nav mt--30">
            <ul className="mainmenu" id="mobile-menu-active">
              <li>
                <Link href="/" className="main" onClick={toggleSidebar}>
                  Home
                </Link>
              </li>
              
              <li>
                <Link href="/case-studies" className="main" onClick={toggleSidebar}>
                  Case Studies
                </Link>
              </li>

              <li className="has-droupdown">
                <Link href="/services" className="main">
                  AI Services
                </Link>
                <ul className="submenu">
                  <li>
                    <a className="tag">Core AI Services</a>
                    {coreServices.map((service) => (
                      <Link 
                        key={service.id}
                        href={`/services/${service.slug}`}
                        onClick={toggleSidebar}
                        className="mobile-service-item"
                      >
                        <Image
                          src={`/${service.icon}`}
                          alt={service.title}
                          width={24}
                          height={24}
                        />
                        <span>{service.title}</span>
                      </Link>
                    ))}
                  </li>
                  
                  <li>
                    <a className="tag">Advanced AI Solutions</a>
                    {advancedServices.map((service) => (
                      <Link 
                        key={service.id}
                        href={`/services/${service.slug}`}
                        onClick={toggleSidebar}
                        className="mobile-service-item"
                      >
                        <Image
                          src={`/${service.icon}`}
                          alt={service.title}
                          width={24}
                          height={24}
                        />
                        <span>{service.title}</span>
                      </Link>
                    ))}
                  </li>

                  <li>
                    <a className="tag">Specialized AI Services</a>
                    {specializedServices.map((service) => (
                      <Link 
                        key={service.id}
                        href={`/services/${service.slug}`}
                        onClick={toggleSidebar}
                        className="mobile-service-item"
                      >
                        <Image
                          src={`/${service.icon}`}
                          alt={service.title}
                          width={24}
                          height={24}
                        />
                        <span>{service.title}</span>
                      </Link>
                    ))}
                  </li>

                  <li>
                    <a className="tag">AI-Powered Industries</a>
                    {industries.map((industry) => (
                      <Link 
                        key={industry.id}
                        href={industry.slug}
                        onClick={toggleSidebar}
                        className="mobile-service-item"
                      >
                        <ReactSVG
                          src={industry.icon}
                          aria-label={industry.title}
                        />
                        <span>{industry.title}</span>
                      </Link>
                    ))}
                  </li>
                </ul>
              </li>

              <li>
                <Link href="/blog-grid" className="main" onClick={toggleSidebar}>
                  Blogs
                </Link>
              </li>

              <li>
                <Link href="/contact" className="main" onClick={toggleSidebar}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default SideBar;