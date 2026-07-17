import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './BlogCard.css';

const BlogCard = ({ blog }) => {
  if (!blog) return null;

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  // Strip HTML from excerpt/content
  const stripHtml = (html) => {
    if (!html) return '';
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const getExcerpt = () => {
    if (blog.excerpt) return blog.excerpt;
    const text = stripHtml(blog.content);
    return text.length > 120 ? text.substring(0, 120) + '...' : text;
  };

  const imageUrl = blog.image 
    ? `http://localhost:8000/storage/${blog.image}` 
    : '/assets/placeholder-blog.jpg'; // We will style this if missing

  return (
    <Link 
      to={`/blogs/${blog.slug}`}
      className="blog-card"
      data-aos="fade-up"
      style={{ textDecoration: 'none' }}
    >
      <div className="blog-card-image-wrapper">
        <img 
          src={imageUrl} 
          alt={blog.title} 
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A20pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1%22%3E%3Crect%20width%3D%22400%22%20height%3D%22225%22%20fill%3D%22%23eee%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22152%22%20y%3D%22120.5%22%3ENo%20Image%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
          }}
        />
      </div>
      
      <div className="blog-card-content">
        <div className="blog-card-date">
          {formatDate(blog.published_at || blog.created_at)}
        </div>
        
        <h3 className="blog-card-title">{blog.title}</h3>
        
        <p className="blog-card-excerpt">
          {getExcerpt()}
        </p>
        
        <div className="blog-card-footer">
          <span className="blog-read-more">
            Read More
            <ArrowRight size={16} className="read-more-icon" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default React.memo(BlogCard);
