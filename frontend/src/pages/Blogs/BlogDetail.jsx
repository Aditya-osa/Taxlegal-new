import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import './BlogDetail.css';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/blogs/${slug}`, {
          headers: {
            'Accept': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Blog not found');
        }

        const data = await response.json();
        setBlog(data.blog);
      } catch (err) {
        console.error(err);
        setError('Failed to load blog post. It may have been removed or unpublished.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="blog-detail-wrapper">
        <Header />
        <main className="blog-detail-main">
          <div className="container blog-detail-container">
            <div className="blog-detail-skeleton">
              <div className="skeleton-breadcrumbs"></div>
              <div className="skeleton-title"></div>
              <div className="skeleton-meta"></div>
              <div className="skeleton-image"></div>
              <div className="skeleton-content-line"></div>
              <div className="skeleton-content-line"></div>
              <div className="skeleton-content-line"></div>
              <div className="skeleton-content-line short"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="blog-detail-wrapper">
        <Header />
        <main className="blog-detail-main">
          <div className="container">
            <div className="blog-detail-error">
              <h2>Blog Not Found</h2>
              <p>{error}</p>
              <button onClick={() => navigate('/blogs')} className="return-btn">
                <ArrowLeft size={16} /> Back to Blogs
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const imageUrl = blog.image 
    ? `http://localhost:8000/storage/${blog.image}` 
    : '/assets/placeholder-blog.jpg';

  return (
    <div className="blog-detail-wrapper">
      <SEO title={blog.seo_title || blog.title} description={blog.seo_description || blog.excerpt || ''} image={imageUrl} url={"https://taxlegalsynergy.com/blogs/${blog.slug}"} type="article" publishedAt={blog.published_at || blog.created_at} />

      <Header />

      <main className="blog-detail-main">
        <div className="container blog-detail-container">
          
          <nav className="blog-detail-breadcrumb" aria-label="Breadcrumb" data-aos="fade-down">
            <Link to="/blogs" className="back-link">
              <ArrowLeft size={16} />
              Back to Blogs
            </Link>
          </nav>

          <article className="blog-detail-article" data-aos="fade-up">
            <header className="blog-detail-header">
              <h1 className="blog-detail-title">{blog.title}</h1>
              
              <div className="blog-detail-meta">
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>{formatDate(blog.published_at || blog.created_at)}</span>
                </div>
                {/* We don't have author name right now in the public endpoint, but placeholder layout is good */}
                <div className="meta-item">
                  <User size={16} />
                  <span>TaxLegal </span>
                </div>
              </div>
            </header>

            <div className="blog-detail-hero-image">
              <img 
                src={imageUrl} 
                alt={blog.title} 
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22450%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20450%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1%22%3E%3Crect%20width%3D%22800%22%20height%3D%22450%22%20fill%3D%22%23eee%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22305%22%20y%3D%22240.5%22%3ENo%20Image%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
                }}
              />
            </div>

            <div 
              className="blog-detail-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            <footer className="blog-detail-footer">
              <div className="share-section">
                <h3>Share this article:</h3>
                <div className="share-buttons">
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
                    LinkedIn
                  </a>
                  <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog.title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
                    X (Twitter)
                  </a>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
                    Facebook
                  </a>
                </div>
              </div>
            </footer>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;


