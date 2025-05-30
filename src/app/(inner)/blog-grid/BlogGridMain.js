"use client"

const BlogGridMain = (props) => {
    const { 
        Slug, 
        blogImage, 
        blogTitle, 
        blogCategory, 
        blogDescription, 
        blogAuthor, 
        blogDate, 
        authorImage,
        authorDesignation 
    } = props;

    return (
        <div>
            <a href={`/blog/${Slug}`} className="thumbnail">
                <img 
                    src={blogImage ? `assets/images/blog/${blogImage}` : "assets/images/blog/01.webp"} 
                    alt={blogTitle || "AI Blog Post"} 
                    onError={(e) => {
                        e.target.src = "assets/images/blog/01.webp";
                    }}
                />
            </a>
            <div className="inner-content-area">
                <div className="top-area">
                    <span className="category">
                        {blogCategory || "AI Technology"}
                    </span>
                    <a href={`/blog-grid/${Slug}`}>
                        <h3 className="title animated fadeIn">
                            {blogTitle || 'How AI is Transforming Modern Business'}
                        </h3>
                    </a>
                    <p className="disc">
                        {blogDescription || 'Discover how artificial intelligence is revolutionizing industries and creating new opportunities for innovation and growth in the digital era.'}
                    </p>
                    <div className="bottom-author-area">
                        {/* <img 
                            src={authorImage || "assets/images/testimonials/01.png"} 
                            alt={blogAuthor || "Author"}
                            onError={(e) => {
                                e.target.src = "assets/images/testimonials/01.png";
                            }}
                        /> */}
                        <div className="author-area-info">
                            <h6 className="title">{blogAuthor || "Govardhan"}</h6>
                            <span>{blogDate || "28 May, 2025"}</span>
                            {/* {authorDesignation && (
                                <div className="designation">
                                    <small>{authorDesignation}</small>
                                </div>
                            )} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogGridMain