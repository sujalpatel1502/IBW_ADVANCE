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
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          font-size: 0.875rem;
          color: #9ca3af;
          flex-wrap: wrap;
        }
        .breadcrumb-link {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.3s;
        }
        .breadcrumb-link:hover {
          color: #22d3ee;
        }
        .breadcrumb-icon {
          color: #4b5563;
          font-size: 0.75rem;
        }
        .blogs-section {
          background-color: #000;
          padding-bottom: 5rem;
        }
        .blogs-container {
          max-width: 80rem;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
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
        @media (min-width: 1024px) {
          .blogs-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .blog-card {
          display: block;
          text-decoration: none;
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
        .blog-card:hover .blog-card-item {
          border-color: #06b6d4;
          box-shadow: 0 20px 25px -5px rgba(6, 182, 212, 0.2);
        }
        .blog-image-wrapper {
          position: relative;
          height: 12rem;
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
        .blog-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .blog-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          font-size: 0.75rem;
          color: #9ca3af;
        }
        .blog-category {
          background: linear-gradient(to right, #06b6d4, #3b82f6);
          color: #fff;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.75rem;
        }
        .blog-title {
          color: #fff;
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          line-height: 1.2;
          transition: color 0.3s;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .blog-card:hover .blog-title {
          color: #22d3ee;
        }
        .blog-excerpt {
          color: #9ca3af;
          font-size: 0.875rem;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.75;
          flex: 1;
        }
        .blog-footer {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid #1f2937;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .blog-author {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #9ca3af;
          font-size: 0.875rem;
        }
        .blog-read-more {
          color: #22d3ee;
          font-size: 0.875rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: transform 0.3s;
        }
        .blog-card:hover .blog-read-more {
          transform: translateX(0.5rem);
        }
      `}</style>
      <div className="ibw-blogs-wrapper">
        <Header />
        
        {/* Breadcrumb */}
        <div className="breadcrumb-section">
          <div className="breadcrumb-container">
            <div className="breadcrumb-inner">
              <h1 className="breadcrumb-title">Our Blog</h1>
              <nav className="breadcrumb-nav">
                <Link href="/" className="breadcrumb-link">Home</Link>
                <i className="fas fa-chevron-right breadcrumb-icon"></i>
                <span className="breadcrumb-link">Blogs</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Blogs Grid */}
        <div className="blogs-section">
          <div className="blogs-container">
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
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="blog-category">{blog.category}</span>
                        <span>•</span>
                        <span>{blog.date}</span>
                      </div>
                      <h2 className="blog-title">{blog.title}</h2>
                      <p className="blog-excerpt">{blog.excerpt}</p>
                      <div className="blog-footer">
                        <div className="blog-author">
                          <i className="far fa-user"></i>
                          <span>{blog.author}</span>
                        </div>
                        <span className="blog-read-more">
                          Read More <i className="fas fa-arrow-right" style={{fontSize: '0.75rem'}}></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <FooterSection />
      </div>
    </>
  );
};

export default BlogsPage;

