"use client";
import React from 'react';
import Link from "next/link";

export default function IndustriesPage() {
  // Hardcoded industry data to avoid JSON import issues
  const industries = [
    {
      id: 1,
      title: "Healthcare",
      slug: "/industries/healthcare-industry",
      description: "Transform lives with AI-powered diagnostics, drug discovery, and personalized patient care."
    },
    {
      id: 2,
      title: "Financial Services",
      slug: "/industries/fintech-industry",
      description: "Secure and grow wealth with AI for fraud detection, algorithmic trading, and risk management."
    },
    {
      id: 3,
      title: "Manufacturing",
      slug: "/industries/manufacturing-industry",
      description: "Build smarter factories with AI for predictive maintenance, quality automation, and efficiency."
    },
    {
      id: 4,
      title: "Retail & E-Commerce",
      slug: "/industries/ecommerce-industry",
      description: "Skyrocket sales with AI-driven personalization, inventory optimization, and customer insights."
    }
  ];

  return (
    <div className="container py-5">
      <h1 className="mb-4">Industry Solutions</h1>

      <div className="row">
        {industries.map((industry) => (
          <div key={industry.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{industry.title}</h5>
                <p className="card-text">{industry.description}</p>
                <Link href={industry.slug} className="btn btn-primary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
