"use client"
import Image from 'next/image';

const BlogGridMain = (props) => {
    const { Slug, blogImage, blogTitle } = props;
    return (
        <div>
            <a href={`/blog-grid/${Slug}`} className="thumbnail">
                <img src={`/assets/images/blog/${blogImage}`} alt="blog_iamge" width={400} height={250} />
            </a>
            <div className="inner-content-area">
                <div className="top-area">
                    <span>Cloud Migration</span>
                    <a href={`/blog-grid/${Slug}`}>
                        <h3 className="title animated fadeIn">
                            {blogTitle ? blogTitle : 'How to growing your business'}
                        </h3>
                    </a>
                    <p className="disc">
                        How do you create compelling presentations that wow your
                        colleagues and impress your managers?
                    </p>
                    <div className="bottom-author-area">
                        <img src="/assets/images/testimonials/01.png" alt="author" width={40} height={40} />
                        <div className="author-area-info">
                            <h6 className="title">Marcus Freeman</h6>
                            <span>24 Sept 2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogGridMain