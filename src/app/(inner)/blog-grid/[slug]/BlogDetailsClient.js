"use client";
import { useState } from "react";
import HeaderTwo from "@/components/header/HeaderTwo";
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import Image from "next/image";
import Posts from '@/data/Posts.json';

export default function BlogDetailsClient({ blogPost }) {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    comment: "",
  });

  if (!blogPost) {
    return (
      <div className="error-page">
        <HeaderTwo />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center py-5">
              <h1>AI Blog Post Not Found!</h1>
              <p>The requested blog post could not be found.</p>
            </div>
          </div>
        </div>
        <FooterOne />
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([{ ...formData, date: new Date().toLocaleDateString() }, ...comments]);
    setFormData({ name: "", email: "", topic: "", comment: "" });
  };

  return (
    <div className="">
      <HeaderTwo />
      {/* Blog Content Start */}
      {blogPost && (
        <>
        <div className="career-single-banner-area ptb--70 blog-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="career-page-single-banner blog-page">
                  <h1 className="title">{blogPost.title}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rts-blog-list-area rts-section-gapTop">
          <div className="container">
            <div className="row g-5">
              <div className="col-xl-8 col-md-12 col-sm-12 col-12">
                <div className="blog-single-post-listing details mb--0">
                  <div className="thumbnail">
                    <Image 
                      src={blogPost.bannerImg || "/assets/images/blog/01.webp"}
                      alt={blogPost.title}
                      width={900}
                      height={400}
                      priority
                    />
                  </div>
                  <div className="blog-listing-content">
                    <div className="user-info">
                      <div className="single">
                        <i className="far fa-user-circle" />
                        <span>by {blogPost.author || "Govardhan"}</span>
                      </div>
                      <div className="single">
                        <i className="far fa-clock" />
                        <span>{blogPost.publishedDate || "28 May, 2025"}</span>
                      </div>
                      <div className="single">
                        <i className="far fa-tags" />
                        <span>{blogPost.category || "AI Technology"}</span>
                      </div>
                    </div>
                    <h3 className="title animated fadeIn mt--30 mb--20">{blogPost.title}</h3>
                    <p className="disc para-1 mb--30">{blogPost.descripTion}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
      )}
      {/* Blog Content End */}
      <FooterOne />
      <BackToTop />
    </div>
  );
}
