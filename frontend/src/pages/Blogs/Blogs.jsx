import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import { Search } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import BlogsHeroSection from '../../components/BlogsPage/BlogsHeroSection';
import FeaturedBlog from '../../components/BlogsPage/FeaturedBlog';
import BlogsGrid from '../../components/BlogsPage/BlogsGrid';
import { FeaturedSkeleton, GridSkeleton } from '../../components/BlogsPage/BlogSkeletons';
import WhyChooseUsSection from '../../components/AboutPage/WhyChooseUsSection';
import './Blogs.css';

const Blogs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const initialPage = parseInt(searchParams.get('page') || '1', 10);

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [debouncedSearch, setDebouncedSearch] = useState(initialSearch);
  
  const [featuredBlog, setFeaturedBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [pagination, setPagination] = useState({ current_page: initialPage, last_page: 1 });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      if (searchTerm !== initialSearch) {
        setSearchParams(params => {
          if (searchTerm) params.set('search', searchTerm);
          else params.delete('search');
          params.set('page', '1'); // Reset to page 1 on new search
          return params;
        });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, initialSearch, setSearchParams]);

  // Fetch blogs
  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const page = searchParams.get('page') || '1';
      const search = searchParams.get('search') || '';
      
      const queryParams = new URLSearchParams({ page });
      if (search) queryParams.append('search', search);

      const response = await fetch(`http://localhost:8000/blogs?${queryParams.toString()}`, {
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }

      const data = await response.json();
      setFeaturedBlog(data.featuredBlog);
      setBlogs(data.blogs.data || []);
      setPagination({
        current_page: data.blogs.current_page,
        last_page: data.blogs.last_page
      });
    } catch (err) {
      console.error(err);
      setError('An error occurred while loading blogs. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [searchParams]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > pagination.last_page) return;
    
    setSearchParams(params => {
      params.set('page', newPage.toString());
      return params;
    });
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="blogs-page-wrapper">
      <SEO title="Our Blogs | Tax Legal Synergy" description="Latest insights, legal updates, tax strategies and expert articles from TaxLegal." url="https://taxlegalsynergy.com/blogs" />

      <Header />

      <main className="blogs-main-content">
        <BlogsHeroSection />

        <div className="container blogs-content-container">
          {/* Search Section */}
          <div className="blogs-search-section" data-aos="fade-up">
            <div className="search-input-wrapper">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="blogs-search-input"
              />
            </div>
          </div>

          {error ? (
            <div className="blogs-error-state">
              <p>{error}</p>
              <button onClick={fetchBlogs} className="retry-btn">Retry</button>
            </div>
          ) : (
            <>
              {loading ? (
                <>
                  <FeaturedSkeleton />
                  <div className="blogs-grid">
                    {[1, 2, 3, 4, 5, 6].map(i => <GridSkeleton key={i} />)}
                  </div>
                </>
              ) : (
                <>
                  {featuredBlog && <FeaturedBlog blog={featuredBlog} />}
                  
                  {blogs.length > 0 ? (
                    <BlogsGrid blogs={blogs} />
                  ) : (
                    !featuredBlog && (
                      <div className="blogs-empty-state" data-aos="fade-up">
                        <img src="/assets/empty-blogs.svg" alt="No blogs found" onError={(e) => e.target.style.display = 'none'} />
                        <h2>No Blogs Found</h2>
                        <p>There are currently no published blog articles matching your criteria.</p>
                        <button onClick={() => { setSearchTerm(''); setSearchParams({}); }} className="return-home-btn">
                          Clear Search
                        </button>
                      </div>
                    )
                  )}

                  {/* Pagination */}
                  {pagination.last_page > 1 && (
                    <div className="blogs-pagination" data-aos="fade-up">
                      <button 
                        className={`pagination-btn ${pagination.current_page === 1 ? 'disabled' : ''}`}
                        onClick={() => handlePageChange(pagination.current_page - 1)}
                        disabled={pagination.current_page === 1}
                      >
                        Previous
                      </button>
                      
                      <div className="pagination-numbers">
                        {[...Array(pagination.last_page)].map((_, i) => {
                          const pageNum = i + 1;
                          return (
                            <button
                              key={pageNum}
                              className={`page-number ${pagination.current_page === pageNum ? 'active' : ''}`}
                              onClick={() => handlePageChange(pageNum)}
                            >
                              {pageNum}
                            </button>
                          );
                        })}
                      </div>

                      <button 
                        className={`pagination-btn ${pagination.current_page === pagination.last_page ? 'disabled' : ''}`}
                        onClick={() => handlePageChange(pagination.current_page + 1)}
                        disabled={pagination.current_page === pagination.last_page}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </main>

      <WhyChooseUsSection />

      <Footer />
    </div>
  );
};

export default Blogs;

