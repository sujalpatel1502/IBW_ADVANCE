'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import FooterSection from '../../components/FooterSection';
import { initNavigation } from '../../utils/navigation';
import { initMouseCursor } from '../../utils/mouseCursor';
import { initSmoothScroll } from '../../utils/smoothScroll';
import { safeBodyClass } from '../../utils/safeBodyClass';

// Blog data
const blogPosts = [
  {
    id: 1,
    slug: 'ai-automation-transforming-business-operations',
    title: 'AI Automation: Transforming Business Operations in 2024',
    excerpt: 'Discover how AI automation is revolutionizing business operations, streamlining workflows, and driving unprecedented efficiency across industries. Learn practical implementation strategies and real-world success stories.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    author: 'IBW Team',
    date: 'January 15, 2024',
    readTime: '5 min read',
    category: 'AI & Automation',
    featured: true
  },
  {
    id: 2,
    slug: 'comprehensive-guide-odoo-crm-implementation',
    title: 'A Comprehensive Guide to Odoo CRM Implementation for Small Businesses',
    excerpt: 'Learn how Odoo CRM can transform your small business operations. This comprehensive guide covers everything from planning and implementation to best practices and common pitfalls to avoid.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    author: 'IBW Team',
    date: 'January 10, 2024',
    readTime: '7 min read',
    category: 'IT Services',
    featured: false
  }
];

const BlogsPage = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    initNavigation();
    initMouseCursor();
    initSmoothScroll();
    
    // Hide preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        safeBodyClass.add('loaded');
      }, 1000);
    }
  }, []);

  return (
    <>
      <style jsx>{`
        .ibw-blogs-wrapper {
          background-color: #000;
          min-height: 100vh;
        }
        .breadcrumb-section {
          text-align: center;
          background-color: #000;
          padding-top: 8rem;
          padding-bottom: 4rem;
        }
        .breadcrumb-container {
          max-width: 80rem;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .breadcrumb-inner {
          max-width: 56rem;
          margin-left: auto;
          margin-right: auto;
        }
        .breadcrumb-title {
          color: #fff;
          margin-bottom: 1.5rem;
          font-size: 2.25rem;
          font-weight: 700;
        }
        @media (min-width: 768px) {
          .breadcrumb-title {
            font-size: 3rem;
          }
        }
        @media (min-width: 1024px) {
          .breadcrumb-title {
            font-size: 3.75rem;
          }
        }
        .breadcrumb-nav {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.875rem;
        }
        .breadcrumb-link {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.3s;
        }
        .breadcrumb-link:hover {
          color: #22d3ee;
        }
        .breadcrumb-separator {
          color: #4b5563;
        }
        .breadcrumb-active {
          color: #22d3ee;
        }
        .blogs-section {
          background-color: #000;
          padding-top: 4rem;
          padding-bottom: 4rem;
        }
        @media (min-width: 768px) {
          .blogs-section {
            padding-top: 6rem;
            padding-bottom: 6rem;
          }
        }
        .blogs-container {
          max-width: 80rem;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .blogs-inner {
          max-width: 72rem;
          margin-left: auto;
          margin-right: auto;
        }
        .featured-section {
          margin-bottom: 5rem;
        }
        .section-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }
        .section-divider {
          height: 1px;
          background-color: #06b6d4;
          width: 3rem;
        }
        .section-title {
          color: #fff;
          font-size: 1.5rem;
          font-weight: 700;
        }
        @media (min-width: 768px) {
          .section-title {
            font-size: 1.875rem;
          }
        }
        .blog-card {
          display: block;
          text-decoration: none;
        }
        .featured-card {
          background: linear-gradient(to bottom right, #111827, #030712);
          border-radius: 0.75rem;
          overflow: hidden;
          border: 1px solid #1f2937;
          transition: all 0.5s;
        }
        .featured-card:hover {
          border-color: #06b6d4;
          box-shadow: 0 25px 50px -12px rgba(6, 182, 212, 0.2);
        }
        .featured-card-inner {
          display: flex;
          flex-direction: column;
        }
        @media (min-width: 768px) {
          .featured-card-inner {
            flex-direction: row;
          }
        }
        .featured-image-wrapper {
          width: 100%;
        }
        @media (min-width: 768px) {
          .featured-image-wrapper {
            width: 50%;
          }
        }
        .featured-image-container {
          position: relative;
          height: 18rem;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .featured-image-container {
            height: 100%;
          }
        }
        .featured-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s;
        }
        .blog-card:hover .featured-image {
          transform: scale(1.1);
        }
        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
        }
        .category-badge {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          background-color: #06b6d4;
          color: #fff;
          padding: 0.375rem 1rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        .featured-content {
          width: 100%;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (min-width: 768px) {
          .featured-content {
            width: 50%;
            padding: 3rem;
          }
        }
        .blog-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          font-size: 0.875rem;
          color: #9ca3af;
        }
        .blog-meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .blog-meta-icon {
          color: #22d3ee;
        }
        .blog-meta-separator {
          color: #4b5563;
        }
        .blog-title {
          color: #fff;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.2;
          transition: color 0.3s;
        }
        @media (min-width: 768px) {
          .blog-title {
            font-size: 1.875rem;
          }
        }
        .blog-card:hover .blog-title {
          color: #22d3ee;
        }
        .blog-excerpt {
          color: #9ca3af;
          margin-bottom: 1.5rem;
          line-height: 1.75;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .blog-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid #1f2937;
        }
        .author-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .author-avatar {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 9999px;
          background: linear-gradient(to bottom right, #22d3ee, #3b82f6);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 700;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        .author-name {
          color: #d1d5db;
          font-size: 0.875rem;
          font-weight: 500;
        }
        .read-more {
          color: #22d3ee;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.875rem;
          transition: transform 0.3s;
        }
        .blog-card:hover .read-more {
          transform: translateX(0.5rem);
        }
        .blogs-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .blogs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .blog-card-item {
          background: linear-gradient(to bottom right, #111827, #030712);
          border-radius: 0.75rem;
          overflow: hidden;
          border: 1px solid #1f2937;
          transition: all 0.5s;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .blog-card-item:hover {
          border-color: #06b6d4;
          box-shadow: 0 25px 50px -12px rgba(6, 182, 212, 0.2);
        }
        .blog-image-wrapper {
          position: relative;
          height: 14rem;
          overflow: hidden;
        }
        .blog-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s;
        }
        .blog-card:hover .blog-image {
          transform: scale(1.1);
        }
        .category-badge-small {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background-color: #06b6d4;
          color: #fff;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        .blog-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .blog-title-small {
          color: #fff;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          line-height: 1.2;
          transition: color 0.3s;
        }
        @media (min-width: 768px) {
          .blog-title-small {
            font-size: 1.5rem;
          }
        }
        .blog-excerpt-small {
          color: #9ca3af;
          margin-bottom: 1rem;
          line-height: 1.75;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .author-avatar-small {
          width: 2rem;
          height: 2rem;
          border-radius: 9999px;
          background: linear-gradient(to bottom right, #22d3ee, #3b82f6);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 700;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        }
        .cta-section {
          margin-top: 6rem;
          background: linear-gradient(to bottom right, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1));
          border-radius: 0.75rem;
          padding: 2rem;
          border: 1px solid rgba(6, 182, 212, 0.3);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .cta-section {
            padding: 3rem;
          }
        }
        .cta-content {
          position: relative;
          z-index: 10;
        }
        .cta-title {
          color: #fff;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        @media (min-width: 768px) {
          .cta-title {
            font-size: 1.875rem;
          }
        }
        .cta-text {
          color: #d1d5db;
          margin-bottom: 2rem;
          max-width: 42rem;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.75;
        }
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .cta-button-primary {
          background-color: #06b6d4;
          color: #fff;
          padding: 0.875rem 2rem;
          border-radius: 0.5rem;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s;
          box-shadow: 0 10px 15px -3px rgba(6, 182, 212, 0.3);
        }
        .cta-button-primary:hover {
          background-color: #0891b2;
          box-shadow: 0 10px 15px -3px rgba(6, 182, 212, 0.5);
          transform: translateY(-2px);
        }
        .cta-button-secondary {
          background-color: transparent;
          border: 2px solid #06b6d4;
          color: #22d3ee;
          padding: 0.875rem 2rem;
          border-radius: 0.5rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
        }
        .cta-button-secondary:hover {
          background-color: #06b6d4;
          color: #fff;
          transform: translateY(-2px);
        }
      `}</style>
      <div className="ibw-blogs-wrapper">
        <Header />
        
        {/* Breadcrumb */}
        <div className="breadcrumb-section">
          <div className="breadcrumb-container">
            <div className="breadcrumb-inner">
              <h1 className="breadcrumb-title">Our Blogs</h1>
              <nav className="breadcrumb-nav">
                <Link href="/" className="breadcrumb-link">Home</Link>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-active">Blogs</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Blogs Section */}
        <div className="blogs-section">
          <div className="blogs-container">
            <div className="blogs-inner">
            {/* Featured Blog */}
            {blogPosts.find(blog => blog.featured) && (
              <div className="featured-section">
                <div className="section-header">
                  <div className="section-divider"></div>
                  <h2 className="section-title">Featured Post</h2>
                </div>
                {blogPosts
                  .filter(blog => blog.featured)
                  .map((blog) => (
                    <Link 
                      key={blog.id} 
                      href={`/blogs/${blog.slug}`}
                      className="blog-card"
                    >
                      <div className="featured-card">
                        <div className="featured-card-inner">
                          <div className="featured-image-wrapper">
                            <div className="featured-image-container">
                              <img 
                                src={blog.image} 
                                alt={blog.title}
                                className="featured-image"
                              />
                              <div className="image-overlay"></div>
                              <div className="category-badge">
                                {blog.category}
                              </div>
                            </div>
                          </div>
                          <div className="featured-content">
                            <div className="blog-meta">
                              <span className="blog-meta-item">
                                <i className="far fa-calendar blog-meta-icon"></i>
                                {blog.date}
                              </span>
                              <span className="blog-meta-separator">•</span>
                              <span className="blog-meta-item">
                                <i className="far fa-clock blog-meta-icon"></i>
                                {blog.readTime}
                              </span>
                            </div>
                            <h3 className="blog-title">
                              {blog.title}
                            </h3>
                            <p className="blog-excerpt">
                              {blog.excerpt}
                            </p>
                            <div className="blog-footer">
                              <div className="author-info">
                                <div className="author-avatar">
                                  {blog.author.charAt(0)}
                                </div>
                                <span className="author-name">{blog.author}</span>
                              </div>
                              <span className="read-more">
                                Read More <i className="fas fa-arrow-right"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            )}

            {/* All Blogs Grid */}
            <div>
              <div className="section-header">
                <div className="section-divider"></div>
                <h2 className="section-title">All Posts</h2>
              </div>
              <div className="blogs-grid">
                {blogPosts.map((blog) => (
                  <Link 
                    key={blog.id} 
                    href={`/blogs/${blog.slug}`}
                    className="blog-card"
                  >
                    <div className="blog-card-item">
                      <div className="blog-image-wrapper">
                        <img 
                          src={blog.image} 
                          alt={blog.title}
                          className="blog-image"
                        />
                        <div className="image-overlay"></div>
                        <div className="category-badge-small">
                          {blog.category}
                        </div>
                      </div>
                      <div className="blog-content">
                        <div className="blog-meta">
                          <span className="blog-meta-item">
                            <i className="far fa-calendar blog-meta-icon" style={{fontSize: '0.75rem'}}></i>
                            {blog.date}
                          </span>
                          <span className="blog-meta-separator">•</span>
                          <span className="blog-meta-item">
                            <i className="far fa-clock blog-meta-icon" style={{fontSize: '0.75rem'}}></i>
                            {blog.readTime}
                          </span>
                        </div>
                        <h3 className="blog-title-small">
                          {blog.title}
                        </h3>
                        <p className="blog-excerpt-small">
                          {blog.excerpt}
                        </p>
                        <div className="blog-footer" style={{marginTop: 'auto'}}>
                          <div className="author-info">
                            <div className="author-avatar-small">
                              {blog.author.charAt(0)}
                            </div>
                            <span className="author-name">{blog.author}</span>
                          </div>
                          <span className="read-more" style={{fontSize: '0.875rem'}}>
                            Read <i className="fas fa-arrow-right" style={{fontSize: '0.75rem'}}></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="cta-section">
              <div className="cta-content">
                <h3 className="cta-title">
                  Want to Learn More About Our Services?
                </h3>
                <p className="cta-text">
                  Explore our comprehensive IT solutions, AI automation tools, and digital transformation services that can help your business thrive.
                </p>
                <div className="cta-buttons">
                  <Link 
                    href="/services" 
                    className="cta-button-primary"
                  >
                    View Services <i className="fas fa-arrow-right"></i>
                  </Link>
                  <Link 
                    href="/contact-us" 
                    className="cta-button-secondary"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <FooterSection />
      </div>
    </>
  );
};

export default BlogsPage;
