import React from 'react';
import BlogCard from './BlogCard';
import './BlogsGrid.css';

const BlogsGrid = ({ blogs }) => {
  if (!blogs || blogs.length === 0) return null;

  return (
    <div className="blogs-grid">
      {blogs.map((blog, index) => (
        <BlogCard key={blog.id || index} blog={blog} />
      ))}
    </div>
  );
};

export default React.memo(BlogsGrid);
