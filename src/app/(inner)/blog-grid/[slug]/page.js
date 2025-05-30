"use client"
import { useState } from "react";
import { useParams } from "next/navigation";
import HeaderTwo from "@/components/header/HeaderTwo";
import BackToTop from "@/components/common/BackToTop";
import Posts from '@/data/Posts.json';
import FooterOne from "@/components/footer/FooterOne";

export default function BlogDetails() {
  const { slug } = useParams();
  const blogPost = Posts.find((post) => post.slug === slug);

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
              {/* Main blog post area */}
              <div className="col-xl-8 col-md-12 col-sm-12 col-12">
                <div className="blog-single-post-listing details mb--0">
                  <div className="thumbnail">
                    <img 
                      src={blogPost.bannerImg || "assets/images/blog/01.webp"} 
                      alt={blogPost.title} 
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
                    
                    <h3 className="title animated fadeIn mt--30 mb--20">
                      {blogPost.title}
                    </h3>
                    
                    <p className="disc para-1 mb--30">
                      {blogPost.descripTion}
                    </p>
                    
                    {/* Dynamic detailed content */}
                    {blogPost.detailedContent ? (
                      <>
                        {blogPost.detailedContent.introduction && (
                          <p className="disc mb--25">
                            {blogPost.detailedContent.introduction}
                          </p>
                        )}
                        
                        {blogPost.detailedContent.quote && (
                          <div className="rts-quote-area text-center my--50">
                            <h5 className="title mb--20">
                              "{blogPost.detailedContent.quote.text}"
                            </h5>
                            <a href="#" className="name">
                              {blogPost.detailedContent.quote.author}
                            </a>
                            <span className="mt--10">{blogPost.detailedContent.quote.designation}</span>
                          </div>
                        )}
                        
                        {blogPost.detailedContent.mainContent && (
                          <p className="disc mb--30">
                            {blogPost.detailedContent.mainContent}
                          </p>
                        )}
                        
                        <div className="row g-5 my--40">
                          <div className="col-lg-6 col-md-6">
                            <div className="thumbnail details">
                              <img
                                src={blogPost.detailedContent?.images?.[0] || "assets/images/blog/d-lg-01.jpg"}
                                alt={`${blogPost.title} - Image 1`}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="thumbnail details">
                              <img
                                src={blogPost.detailedContent?.images?.[1] || "assets/images/blog/d-lg-02.jpg"}
                                alt={`${blogPost.title} - Image 2`}
                              />
                            </div>
                          </div>
                        </div>
                        
                        {blogPost.detailedContent.sectionTitle && (
                          <h4 className="title mt--50 mb--25">
                            {blogPost.detailedContent.sectionTitle}
                          </h4>
                        )}
                        
                        {blogPost.detailedContent.sectionContent && (
                          <p className="disc mb--30">
                            {blogPost.detailedContent.sectionContent}
                          </p>
                        )}
                        
                        <div className="row align-items-center my--40">
                          <div className="col-lg-5">
                            <div className="thumbnail details mb_sm--30">
                              <img
                                src={blogPost.detailedContent?.images?.[2] || "assets/images/blog/details/03.jpg"}
                                alt={`${blogPost.title} - Detail Image`}
                              />
                            </div>
                          </div>
                          <div className="col-lg-7">
                            <div className="check-area-details">
                              {blogPost.detailedContent.keyPoints?.map((point, index) => (
                                <div key={index} className="single-check mb--15">
                                  <i className="far fa-check-circle" />
                                  <span>{point}</span>
                                </div>
                              )) || (
                                // Fallback key points
                                <>
                                  <div className="single-check mb--15">
                                    <i className="far fa-check-circle" />
                                    <span>Advanced AI algorithms improving efficiency by 40%</span>
                                  </div>
                                  <div className="single-check mb--15">
                                    <i className="far fa-check-circle" />
                                    <span>Real-time data processing and analysis</span>
                                  </div>
                                  <div className="single-check mb--15">
                                    <i className="far fa-check-circle" />
                                    <span>Machine learning models with 95% accuracy</span>
                                  </div>
                                  <div className="single-check mb--15">
                                    <i className="far fa-check-circle" />
                                    <span>Automated decision-making processes</span>
                                  </div>
                                  <div className="single-check mb--15">
                                    <i className="far fa-check-circle" />
                                    <span>Scalable AI solutions for enterprise use</span>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {blogPost.detailedContent.conclusion && (
                          <p className="disc mt--40 mb--30">
                            {blogPost.detailedContent.conclusion}
                          </p>
                        )}
                      </>
                    ) : (
                      // Fallback content if no detailed content is available
                      <>
                        <p className="disc mb--25">
                          This AI solution represents a significant breakthrough in how businesses can leverage artificial intelligence to solve complex challenges. Through innovative machine learning algorithms and advanced data processing capabilities, organizations can now achieve unprecedented levels of efficiency and accuracy in their operations.
                        </p>
                        
                        <div className="rts-quote-area text-center my--50">
                          <h5 className="title mb--20">
                            "The future belongs to organizations that can harness the power of AI to transform their operations and create exceptional value for their customers."
                          </h5>
                          <a href="#" className="name">Dr. AI Expert</a>
                          <span className="mt--10">Chief Technology Officer</span>
                        </div>
                        
                        <p className="disc mb--30">
                          The implementation of AI technologies continues to revolutionize industries worldwide. From predictive analytics to automated decision-making, artificial intelligence is becoming an essential component of modern business strategy. Organizations that embrace these innovations are positioning themselves for sustainable growth and competitive advantage in the digital economy.
                        </p>
                        
                        <div className="row g-5 my--40">
                          <div className="col-lg-6 col-md-6">
                            <div className="thumbnail details">
                              <img src="assets/images/blog/d-lg-01.jpg" alt="AI Technology" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="thumbnail details">
                              <img src="assets/images/blog/d-lg-02.jpg" alt="AI Solutions" />
                            </div>
                          </div>
                        </div>
                        
                        <h4 className="title mt--50 mb--25">Key AI Implementation Benefits</h4>
                        
                        <p className="disc mb--30">
                          The strategic implementation of AI technologies delivers measurable benefits across multiple business dimensions. Organizations report significant improvements in operational efficiency, decision-making accuracy, and customer satisfaction metrics.
                        </p>
                        
                        <div className="row align-items-center my--40">
                          <div className="col-lg-5">
                            <div className="thumbnail details mb_sm--30">
                              <img src="assets/images/blog/details/03.jpg" alt="AI Benefits" />
                            </div>
                          </div>
                          <div className="col-lg-7">
                            <div className="check-area-details">
                              <div className="single-check mb--15">
                                <i className="far fa-check-circle" />
                                <span>Automated processes reducing operational costs by 35%</span>
                              </div>
                              <div className="single-check mb--15">
                                <i className="far fa-check-circle" />
                                <span>Predictive analytics improving decision accuracy</span>
                              </div>
                              <div className="single-check mb--15">
                                <i className="far fa-check-circle" />
                                <span>Real-time monitoring and intelligent alerts</span>
                              </div>
                              <div className="single-check mb--15">
                                <i className="far fa-check-circle" />
                                <span>Enhanced customer experience through personalization</span>
                              </div>
                              <div className="single-check mb--15">
                                <i className="far fa-check-circle" />
                                <span>Scalable AI infrastructure for future growth</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <p className="disc mt--40 mb--30">
                          As AI technology continues to evolve, organizations must remain adaptable and committed to continuous learning. The most successful implementations combine technical excellence with strategic vision, creating sustainable competitive advantages that drive long-term business success.
                        </p>
                      </>
                    )}
                    
                    <div className="row align-items-center mt--50 mb--40">
                      <div className="col-lg-6 col-md-12">
                        <div className="details-tag">
                          <h6 className="mb--15">Tags:</h6>
                          <div className="tag-buttons">
                            {blogPost.tags?.map((tag, index) => (
                              <button key={index} className="tag-btn m-1">{tag}</button>
                            )) || (
                              // Fallback tags
                              <>
                                <button className="tag-btn">AI Solutions</button>
                                <button className="tag-btn">Machine Learning</button>
                                <button className="tag-btn">Technology</button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="details-share">
                          <h6 className="mb--15">Share:</h6>
                          <div className="share-buttons">
                            <button><i className="fab fa-facebook-f" /></button>
                            <button><i className="fab fa-twitter" /></button>
                            <button><i className="fab fa-instagram" /></button>
                            <button><i className="fab fa-linkedin-in" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="author-area mt--50 mb--50">
                      {/* <div className="thumbnail details mb_sm--20">
                        <img
                          src={blogPost.authorImage || "assets/images/blog/details/author.jpg"}
                          alt={blogPost.author || "Author"}
                        />
                      </div> */}
                      <div className="author-details team">
                        <span className="desig mb--10">
                          {blogPost.authorDesignation || "AI Technology Specialist"}
                        </span>
                        <h5 className="mb--15">{blogPost.author || "Govardhan"}</h5>
                        <p className="disc">
                          {blogPost.authorBio || "Expert in artificial intelligence and machine learning solutions, dedicated to transforming businesses through innovative AI implementations and strategic technology consulting."}
                        </p>
                      </div>
                    </div>
                    
                    {/* <div className="comments-area mt--60 mb--40">
                      <h4 className="title mb--30">Comments ({comments.length})</h4>
                      <div id="comments-container">
                        {comments.length > 0 ? (
                          comments.map((comment, index) => (
                            <div key={index} className="single-comment mb--30 p--20 border rounded">
                              <div className="comment-header mb--15">
                                <h6 className="mb--5">{comment.name}</h6>
                                <span className="text-muted">{comment.date}</span>
                              </div>
                              <p className="mb--10">{comment.comment}</p>
                              {comment.topic && (
                                <span className="badge bg-primary">{comment.topic}</span>
                              )}
                            </div>
                          ))
                        ) : (
                          <p className="text-muted">No comments yet. Be the first to share your thoughts!</p>
                        )}
                      </div>
                    </div> */}
                    
                    <div className="replay-area-details mt--50">
                      <h4 className="title mb--30">Leave a Reply</h4>
                      <form onSubmit={handleSubmit}>
                        <div className="row g-4">
                          <div className="col-lg-6">
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your Name"
                              required
                              className="form-control"
                            />
                          </div>
                          <div className="col-lg-6">
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Your Email"
                              required
                              className="form-control"
                            />
                          </div>
                          <div className="col-12">
                            <input
                              type="text"
                              name="topic"
                              value={formData.topic}
                              onChange={handleChange}
                              placeholder="Topic (Optional)"
                              className="form-control mb--20"
                            />
                            <textarea
                              name="comment"
                              value={formData.comment}
                              onChange={handleChange}
                              placeholder="Type your message about this AI solution..."
                              required
                              className="form-control"
                              rows="5"
                            />
                          </div>
                          <div className="col-12">
                            <button className="rts-btn btn-primary mt--20" type="submit">
                              Submit Comment
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="col-xl-4 col-md-12 col-sm-12 col-12 pd-control-bg--40">
                <div className="rts-single-wized search mb--30">
                  <div className="wized-header">
                    <h5 className="title">Search AI Topics</h5>
                  </div>
                  <div className="wized-body">
                    <div className="rts-search-wrapper">
                      <input
                        className="Search"
                        type="text"
                        placeholder="Search AI, ML, Automation..."
                      />
                      <button><i className="fal fa-search" /></button>
                    </div>
                  </div>
                </div>
                
                <div className="rts-single-wized Categories mb--30">
                  <div className="wized-header">
                    <h5 className="title">AI Categories</h5>
                  </div>
                  <div className="wized-body">
                    <ul className="single-categories">
                      <li><a href="#">Machine Learning <i className="far fa-long-arrow-right" /></a></li>
                    </ul>
                    <ul className="single-categories">
                      <li><a href="#">Deep Learning <i className="far fa-long-arrow-right" /></a></li>
                    </ul>
                    <ul className="single-categories">
                      <li><a href="#">Computer Vision <i className="far fa-long-arrow-right" /></a></li>
                    </ul>
                    <ul className="single-categories">
                      <li><a href="#">Natural Language Processing <i className="far fa-long-arrow-right" /></a></li>
                    </ul>
                    <ul className="single-categories">
                      <li><a href="#">AI Ethics & Governance <i className="far fa-long-arrow-right" /></a></li>
                    </ul>
                  </div>
                </div>
                
                <div className="rts-single-wized Recent-post mb--30">
                  <div className="wized-header">
                    <h5 className="title">Recent AI Posts</h5>
                  </div>
                  <div className="wized-body">
                    {Posts.slice(0, 3).map((post, index) => (
                      <div key={index} className="recent-post-single mb--20">
                        <div className="thumbnail">
                          <a href={`/blog-grid/${post.slug}`}>
                            <img 
                              src={`assets/images/blog/${post.image}`} 
                              alt={post.title}
                              onError={(e) => {
                                e.target.src = "assets/images/blog/sm/01.jpg";
                              }}
                            />
                          </a>
                        </div>
                        <div className="content-area">
                          <div className="user mb--10">
                            <i className="fal fa-clock" />
                            <span>{post.publishedDate}</span>
                          </div>
                          <a className="post-title" href={`/blog/${post.slug}`}>
                            <h6 className="title">{post.title}</h6>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* <div className="rts-single-wized Recent-post mb--30">
                  <div className="wized-header">
                    <h5 className="title">AI Gallery</h5>
                  </div>
                  <div className="wized-body">
                    <div className="gallery-inner">
                      <div className="row-1 single-row mb--10">
                        <a href="#"><img src="assets/images/blog/sm/01.jpg" alt="AI Gallery" /></a>
                        <a href="#"><img src="assets/images/blog/sm/02.jpg" alt="AI Gallery" /></a>
                        <a href="#"><img src="assets/images/blog/sm/03.jpg" alt="AI Gallery" /></a>
                      </div>
                      <div className="row-2 single-row">
                        <a href="#"><img src="assets/images/blog/sm/04.jpg" alt="AI Gallery" /></a>
                        <a href="#"><img src="assets/images/blog/sm/05.jpg" alt="AI Gallery" /></a>
                        <a href="#"><img src="assets/images/blog/sm/06.jpg" alt="AI Gallery" /></a>
                      </div>
                    </div>
                  </div>
                </div> */}
                
                <div className="rts-single-wized">
                  <div className="wized-header">
                    <h5 className="title">Popular AI Tags</h5>
                  </div>
                  <div className="wized-body">
                    <div className="tags-wrapper">
                      <a href="#">Machine Learning</a>
                      <a href="#">AI Solutions</a>
                      <a href="#">Automation</a>
                      <a href="#">Deep Learning</a>
                      <a href="#">Computer Vision</a>
                      <a href="#">NLP</a>
                      <a href="#">Predictive Analytics</a>
                      <a href="#">AI Strategy</a>
                      <a href="#">Neural Networks</a>
                      <a href="#">Smart Cities</a>
                      <a href="#">Healthcare AI</a>
                      <a href="#">FinTech</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      <FooterOne />
      <BackToTop />
    </div>
  );
}