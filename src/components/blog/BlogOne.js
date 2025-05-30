"use client"
import React from 'react'
import { ReactSVG } from 'react-svg';
import Link from 'next/link';
import Posts from '@/data/Posts.json';

function BlogOne() {
    // Get the latest 3 posts
    const latestPosts = Posts.slice(0, 3);

    return (
        <div>
            {/* rts blog area strart */}
            <div className="rts-blog-area rts-section-gap position-relative">
                <div className="shape-bottom">
                    <img
                        loading="lazy"
                        rel="preload"
                        src="assets/images/video/shape/02.png"
                        alt=""
                        className="wow move-left"
                        data-wow-offset={120}
                    />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center-title-bg-white">
                                <h2 className="title" style={{ fontSize: 64 }}>
                                    Latest insights
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt--50">
                    <div className="row g-0 wow fadeInUp" data-wow-offset={120}>
                        {latestPosts.map((post) => (
                            <div key={post.id} className="col-lg-4 p-1">
                                <div className="single-blog-area-start border-left">
                                    <Link href={`/blog-grid/${post.slug}`} className="thumbnail">
                                        <img
                                            loading="lazy"
                                            rel="preload"
                                            src={`assets/images/blog/${post.image}`}
                                            alt={post.title}
                                        />
                                    </Link>
                                    <div className="inner-content-area">
                                        <div className="top-area">
                                            <span>{post.category}</span>
                                            <Link href={`/blog-grid/${post.slug}`}>
                                                <h3 className="title">{post.title}</h3>
                                            </Link>
                                            <p className="disc">{post.descripTion}</p>
                                        </div>
                                        {/* <div className="bottom-area">
                                            <div className="publisher-area">
                                                <Link href="#">
                                                    <img src={post.authorImage} alt={post.author} />
                                                </Link>
                                                <div className="content">
                                                    <Link href="#">{post.author}</Link>
                                                    <span className="time">{post.publishedDate}</span>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* rts blog area end */}
        </div>
    )
}

export default BlogOne