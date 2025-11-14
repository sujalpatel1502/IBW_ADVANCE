'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '../../../components/Header';
import FooterSection from '../../../components/FooterSection';
import { initNavigation } from '../../../utils/navigation';
import { initMouseCursor } from '../../../utils/mouseCursor';
import { initSmoothScroll } from '../../../utils/smoothScroll';
import { safeBodyClass } from '../../../utils/safeBodyClass';

// Blog data
const blogPosts = {
  'ai-automation-transforming-business-operations': {
    id: 1,
    slug: 'ai-automation-transforming-business-operations',
    title: 'AI Automation: Transforming Business Operations in 2024',
    excerpt: 'Discover how AI automation is revolutionizing business operations, streamlining workflows, and driving unprecedented efficiency across industries.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    author: 'IBW Team',
    date: 'January 15, 2024',
    readTime: '5 min read',
    category: 'AI & Automation',
    content: `
      <p>
        In today's rapidly evolving business landscape, AI automation has emerged as a transformative force, revolutionizing how companies operate, compete, and grow. As we navigate through 2024, the integration of artificial intelligence and automation technologies is no longer a luxury but a necessity for businesses aiming to stay ahead.
      </p>

      <h2>
        <span></span>
        The Rise of AI Automation
      </h2>
      <p>
        Artificial Intelligence automation combines the power of machine learning, natural language processing, and robotic process automation to create intelligent systems that can perform complex tasks with minimal human intervention. From customer service chatbots to automated data analysis, AI automation is reshaping industries across the board.
      </p>

      <h2>
        <span></span>
        Key Benefits for Businesses
      </h2>
      <div class="benefit-grid">
        <div class="benefit-card">
          <div class="benefit-header">
            <div class="benefit-icon">
              <i class="fas fa-rocket"></i>
            </div>
            <div>
              <h3 class="benefit-title">Increased Efficiency</h3>
              <p class="benefit-text">Automate repetitive tasks, freeing up your team to focus on strategic initiatives</p>
            </div>
          </div>
        </div>
        <div class="benefit-card">
          <div class="benefit-header">
            <div class="benefit-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <div>
              <h3 class="benefit-title">Cost Reduction</h3>
              <p class="benefit-text">Reduce operational costs by up to 60% through intelligent automation</p>
            </div>
          </div>
        </div>
        <div class="benefit-card">
          <div class="benefit-header">
            <div class="benefit-icon">
              <i class="fas fa-crosshairs"></i>
            </div>
            <div>
              <h3 class="benefit-title">Enhanced Accuracy</h3>
              <p class="benefit-text">Minimize human errors and ensure consistent, high-quality outputs</p>
            </div>
          </div>
        </div>
        <div class="benefit-card">
          <div class="benefit-header">
            <div class="benefit-icon">
              <i class="fas fa-clock"></i>
            </div>
            <div>
              <h3 class="benefit-title">24/7 Operations</h3>
              <p class="benefit-text">Enable round-the-clock operations without additional workforce</p>
            </div>
          </div>
        </div>
      </div>

      <h2>
        <span></span>
        Real-World Applications
      </h2>
      <p>
        Companies across various sectors are leveraging AI automation to transform their operations. E-commerce platforms use AI for inventory management and personalized recommendations. Healthcare providers automate patient scheduling and administrative tasks. Financial institutions employ AI for fraud detection and risk assessment.
      </p>

      <div class="quote-box">
        <p class="quote-text">
          "Implementing AI automation has reduced our processing time by 75% while improving accuracy. It's been a game-changer for our operations."
        </p>
        <p class="quote-author">— Industry Leader</p>
      </div>

      <h2>
        <span></span>
        Getting Started with AI Automation
      </h2>
      <p>
        Starting your AI automation journey requires a strategic approach. Begin by identifying repetitive tasks and processes that can benefit from automation. Work with experienced partners like Insta Biz Web to assess your needs, plan implementation, and ensure seamless integration with your existing systems.
      </p>

      <h2>
        <span></span>
        The Future is Automated
      </h2>
      <p>
        As AI technology continues to advance, the possibilities for automation are virtually limitless. Businesses that embrace AI automation today will be better positioned to adapt, innovate, and thrive in the future. Don't get left behind – start your automation journey today.
      </p>
    `
  },
  'comprehensive-guide-odoo-crm-implementation': {
    id: 2,
    slug: 'comprehensive-guide-odoo-crm-implementation',
    title: 'A Comprehensive Guide to Odoo CRM Implementation for Small Businesses',
    excerpt: 'Learn how Odoo CRM can transform your small business operations. This comprehensive guide covers everything from planning and implementation to best practices.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    author: 'IBW Team',
    date: 'January 10, 2024',
    readTime: '7 min read',
    category: 'IT Services',
    content: `
      <p>
        Customer Relationship Management (CRM) systems have become essential tools for businesses of all sizes. For small businesses, finding the right CRM solution that's both affordable and feature-rich can be challenging. Odoo CRM emerges as an excellent choice, offering comprehensive functionality at a fraction of the cost of enterprise solutions.
      </p>

      <h2>
        <span></span>
        Why Odoo CRM for Small Businesses?
      </h2>
      <p>
        Odoo CRM is an open-source, all-in-one business management software that includes CRM functionality along with other business applications. For small businesses, this integrated approach means you can manage customers, sales, inventory, accounting, and more from a single platform.
      </p>

      <h2>
        <span></span>
        Key Features That Matter
      </h2>
      <div class="step-list">
        <div class="step-item">
          <div class="step-header">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3 class="step-title">Lead Management</h3>
              <p class="step-text">Track leads from multiple sources and convert them into opportunities</p>
            </div>
            </div>
          </div>
        <div class="step-item">
          <div class="step-header">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3 class="step-title">Sales Pipeline</h3>
              <p class="step-text">Visualize your sales process and identify bottlenecks</p>
        </div>
            </div>
            </div>
        <div class="step-item">
          <div class="step-header">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3 class="step-title">Customer Communication</h3>
              <p class="step-text">Manage all customer interactions in one centralized place</p>
          </div>
        </div>
            </div>
        <div class="step-item">
          <div class="step-header">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3 class="step-title">Reporting & Analytics</h3>
              <p class="step-text">Get insights into your sales performance and customer behavior</p>
            </div>
          </div>
        </div>
      </div>

      <h2>
        <span></span>
        Implementation Steps
      </h2>
      <div class="step-list">
        <div class="step-item">
          <div class="step-header">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3 class="step-title">Planning & Assessment</h3>
              <p class="step-text">Evaluate your current processes, identify requirements, and set clear objectives for your CRM implementation.</p>
            </div>
            </div>
          </div>
        <div class="step-item">
          <div class="step-header">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3 class="step-title">Customization</h3>
              <p class="step-text">Customize Odoo CRM to match your business workflows, including fields, stages, and automation rules.</p>
        </div>
            </div>
            </div>
        <div class="step-item">
          <div class="step-header">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3 class="step-title">Data Migration</h3>
              <p class="step-text">Safely migrate existing customer data and ensure data integrity throughout the process.</p>
          </div>
        </div>
            </div>
        <div class="step-item">
          <div class="step-header">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3 class="step-title">Team Training</h3>
              <p class="step-text">Train your team on using Odoo CRM effectively to maximize adoption and ROI.</p>
            </div>
          </div>
        </div>
        <div class="step-item">
          <div class="step-header">
            <div class="step-number">5</div>
            <div class="step-content">
              <h3 class="step-title">Go Live & Support</h3>
              <p class="step-text">Launch your CRM system and provide ongoing support to ensure smooth operations.</p>
            </div>
          </div>
        </div>
      </div>

      <h2>
        <span></span>
        Common Pitfalls to Avoid
      </h2>
      <p>
        Many small businesses make mistakes during CRM implementation. Avoid these common pitfalls:
      </p>
      <div class="warning-box">
        <ul class="feature-list">
          <li class="feature-item">
            <i class="fas fa-times-circle feature-icon cross"></i>
            <span>Not clearly defining business requirements before implementation</span>
          </li>
          <li class="feature-item">
            <i class="fas fa-times-circle feature-icon cross"></i>
            <span>Over-customizing the system, making it complex and difficult to maintain</span>
          </li>
          <li class="feature-item">
            <i class="fas fa-times-circle feature-icon cross"></i>
            <span>Insufficient team training leading to low adoption rates</span>
          </li>
          <li class="feature-item">
            <i class="fas fa-times-circle feature-icon cross"></i>
            <span>Neglecting data quality during migration</span>
          </li>
        </ul>
      </div>

      <h2>
        <span></span>
        Best Practices for Success
      </h2>
      <div class="success-box">
        <ul class="feature-list">
          <li class="feature-item">
            <i class="fas fa-check-circle feature-icon check"></i>
            <span>Start with essential features and expand gradually</span>
          </li>
          <li class="feature-item">
            <i class="fas fa-check-circle feature-icon check"></i>
            <span>Involve your team in the planning process</span>
          </li>
          <li class="feature-item">
            <i class="fas fa-check-circle feature-icon check"></i>
            <span>Choose a reliable implementation partner</span>
          </li>
          <li class="feature-item">
            <i class="fas fa-check-circle feature-icon check"></i>
            <span>Regularly review and optimize your CRM processes</span>
          </li>
        </ul>
      </div>

      <div class="cta-box">
        <h3 class="cta-box-title">Need Help with Odoo CRM Implementation?</h3>
        <p class="cta-box-text">
          Insta Biz Web specializes in Odoo CRM implementation for small and medium businesses. Our expert team can help you plan, customize, and deploy Odoo CRM to transform your business operations.
        </p>
        <a href="/contact-us" class="cta-box-link">
          Contact Us Today <i class="fas fa-arrow-right"></i>
        </a>
      </div>

      <h2>
        <span></span>
        Conclusion
      </h2>
      <p>
        Odoo CRM implementation can significantly improve your small business operations, but success requires careful planning, proper customization, and team commitment. By following best practices and working with experienced partners, you can unlock the full potential of Odoo CRM for your business.
      </p>
    `
  }
};

const BlogDetailPage = () => {
  const params = useParams();
  const slug = params?.slug;
  const blog = slug ? blogPosts[slug] : null;

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

  if (!blog) {
    return (
      <>
        <style jsx>{`
          .not-found-wrapper {
            background-color: #000;
            min-height: 100vh;
          }
          .not-found-container {
            max-width: 80rem;
            margin-left: auto;
            margin-right: auto;
            padding-left: 1rem;
            padding-right: 1rem;
            padding-top: 8rem;
            padding-bottom: 8rem;
            text-align: center;
          }
          .not-found-inner {
            max-width: 42rem;
            margin-left: auto;
            margin-right: auto;
          }
          .not-found-icon {
            width: 6rem;
            height: 6rem;
            border-radius: 9999px;
            background-color: #111827;
            border: 1px solid #1f2937;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 1.5rem;
          }
          .not-found-icon i {
            font-size: 2.25rem;
            color: #4b5563;
          }
          .not-found-title {
            color: #fff;
            font-size: 2.25rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }
          .not-found-text {
            color: #9ca3af;
            margin-bottom: 2rem;
            font-size: 1.125rem;
          }
          .not-found-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: #22d3ee;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s;
          }
          .not-found-link:hover {
            color: #67e8f9;
          }
        `}</style>
        <div className="not-found-wrapper">
        <Header />
          <div className="not-found-container">
            <div className="not-found-inner">
              <div className="not-found-icon">
                <i className="fas fa-search"></i>
            </div>
              <h1 className="not-found-title">Blog Not Found</h1>
              <p className="not-found-text">The blog post you're looking for doesn't exist or has been removed.</p>
              <Link href="/blogs" className="not-found-link">
              <i className="fas fa-arrow-left"></i> Back to Blogs
            </Link>
          </div>
        </div>
        <FooterSection />
      </div>
      </>
    );
  }

  return (
    <>
      <style jsx>{`
        .blog-detail-wrapper {
          background-color: #000;
          min-height: 100vh;
        }
        .breadcrumb-section {
          background-color: #000;
          padding-top: 8rem;
          padding-bottom: 2rem;
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
        .breadcrumb-nav {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
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
        .breadcrumb-active {
          color: #22d3ee;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 12rem;
        }
        .article-section {
          background-color: #000;
          padding-bottom: 5rem;
        }
        .article-container {
          max-width: 80rem;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .article-inner {
          max-width: 56rem;
          margin-left: auto;
          margin-right: auto;
        }
        .blog-header {
          margin-bottom: 2.5rem;
        }
        .blog-header-badge-wrapper {
          margin-bottom: 1.25rem;
        }
        .blog-header-badge {
          background: linear-gradient(to right, #06b6d4, #3b82f6);
          color: #fff;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          display: inline-block;
        }
        .blog-title {
          color: #fff;
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        @media (min-width: 768px) {
          .blog-title {
            font-size: 2.25rem;
          }
        }
        @media (min-width: 1024px) {
          .blog-title {
            font-size: 3rem;
          }
        }
        .blog-meta-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid #1f2937;
        }
        .author-section {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .author-avatar-large {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 9999px;
          background: linear-gradient(to bottom right, #22d3ee, #3b82f6);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 700;
          font-size: 1.25rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        .author-info {
          color: #fff;
          font-weight: 600;
          font-size: 1.125rem;
        }
        .author-role {
          color: #9ca3af;
          font-size: 0.875rem;
        }
        .blog-meta-info {
          display: flex;
          align-items: center;
          gap: 1.25rem;
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
          color: #374151;
        }
        .featured-image-wrapper {
          margin-bottom: 3rem;
          border-radius: 0.75rem;
          overflow: hidden;
          border: 1px solid #1f2937;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        .featured-image {
          width: 100%;
          height: 18rem;
          object-fit: cover;
        }
        @media (min-width: 768px) {
          .featured-image {
            height: 500px;
          }
        }
        .blog-content-wrapper {
          color: #d1d5db;
        }
        .blog-content-wrapper h2 {
          color: #fff;
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        @media (min-width: 768px) {
          .blog-content-wrapper h2 {
            font-size: 1.875rem;
          }
        }
        .blog-content-wrapper p {
          color: #d1d5db;
          line-height: 1.75;
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
        }
        .blog-content-wrapper ul {
          margin-bottom: 1.5rem;
        }
        .blog-content-wrapper li {
          margin-bottom: 0.5rem;
          color: #d1d5db;
        }
        .blog-content-wrapper a {
          color: #22d3ee;
          transition: color 0.3s;
        }
        .blog-content-wrapper a:hover {
          color: #67e8f9;
        }
        .blog-content-wrapper h2 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .blog-content-wrapper h2 span {
          width: 0.25rem;
          height: 2rem;
          background-color: #06b6d4;
          border-radius: 0.25rem;
        }
        .blog-content-wrapper .benefit-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        @media (min-width: 768px) {
          .blog-content-wrapper .benefit-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .blog-content-wrapper .benefit-card {
          background: linear-gradient(to bottom right, #111827, #030712);
          border: 1px solid #1f2937;
          border-radius: 0.5rem;
          padding: 1.5rem;
          transition: all 0.3s;
        }
        .blog-content-wrapper .benefit-card:hover {
          border-color: #06b6d4;
        }
        .blog-content-wrapper .benefit-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .blog-content-wrapper .benefit-icon {
          width: 3rem;
          height: 3rem;
          border-radius: 0.5rem;
          background-color: rgba(6, 182, 212, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #22d3ee;
          flex-shrink: 0;
        }
        .blog-content-wrapper .benefit-icon i {
          font-size: 1.25rem;
        }
        .blog-content-wrapper .benefit-title {
          color: #fff;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .blog-content-wrapper .benefit-text {
          color: #9ca3af;
          font-size: 0.875rem;
        }
        .blog-content-wrapper .quote-box {
          background: linear-gradient(to bottom right, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1));
          border-left: 4px solid #06b6d4;
          padding: 1.5rem;
          margin: 2rem 0;
          border-radius: 0 0.5rem 0.5rem 0;
        }
        .blog-content-wrapper .quote-text {
          color: #fff;
          font-style: italic;
          margin-bottom: 0.75rem;
          font-size: 1.125rem;
        }
        .blog-content-wrapper .quote-author {
          color: #9ca3af;
          font-size: 0.875rem;
          font-weight: 600;
        }
        .blog-content-wrapper .feature-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .blog-content-wrapper .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: #d1d5db;
        }
        .blog-content-wrapper .feature-icon {
          margin-top: 0.25rem;
          flex-shrink: 0;
        }
        .blog-content-wrapper .feature-icon.check {
          color: #4ade80;
        }
        .blog-content-wrapper .feature-icon.cross {
          color: #f87171;
        }
        .blog-content-wrapper .step-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .blog-content-wrapper .step-item {
          background: linear-gradient(to right, #111827, #030712);
          padding: 1.5rem;
          border-radius: 0.5rem;
          border: 1px solid #1f2937;
        }
        .blog-content-wrapper .step-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .blog-content-wrapper .step-number {
          width: 3rem;
          height: 3rem;
          border-radius: 9999px;
          background: linear-gradient(to bottom right, #22d3ee, #3b82f6);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 700;
          font-size: 1.125rem;
          flex-shrink: 0;
        }
        .blog-content-wrapper .step-content {
          flex: 1;
        }
        .blog-content-wrapper .step-title {
          color: #fff;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .blog-content-wrapper .step-text {
          color: #d1d5db;
        }
        .blog-content-wrapper .warning-box {
          background: linear-gradient(to bottom right, rgba(239, 68, 68, 0.05), rgba(249, 115, 22, 0.05));
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 0.5rem;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .blog-content-wrapper .success-box {
          background: linear-gradient(to bottom right, rgba(34, 197, 94, 0.05), rgba(6, 182, 212, 0.05));
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 0.5rem;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .blog-content-wrapper .cta-box {
          background: linear-gradient(to bottom right, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1));
          border: 1px solid rgba(6, 182, 212, 0.3);
          padding: 2rem;
          margin: 2.5rem 0;
          border-radius: 0.75rem;
        }
        .blog-content-wrapper .cta-box-title {
          color: #fff;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }
        .blog-content-wrapper .cta-box-text {
          color: #d1d5db;
          margin-bottom: 1.25rem;
          line-height: 1.75;
        }
        .blog-content-wrapper .cta-box-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: #06b6d4;
          color: #fff;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 10px 15px -3px rgba(6, 182, 212, 0.3);
        }
        .blog-content-wrapper .cta-box-link:hover {
          background-color: #0891b2;
          box-shadow: 0 10px 15px -3px rgba(6, 182, 212, 0.5);
        }
        .share-section {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid #1f2937;
        }
        .share-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem;
          background: linear-gradient(to bottom right, #111827, #030712);
          border-radius: 0.75rem;
          padding: 1.5rem;
          border: 1px solid #1f2937;
        }
        @media (min-width: 768px) {
          .share-card {
            flex-direction: row;
            align-items: center;
          }
        }
        .share-title {
          color: #fff;
          font-weight: 700;
          margin-bottom: 1rem;
          font-size: 1.125rem;
        }
        .share-buttons {
          display: flex;
          gap: 0.75rem;
        }
        .share-button {
          width: 3rem;
          height: 3rem;
          border-radius: 9999px;
          background-color: #1f2937;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        .share-button:hover {
          transform: scale(1.1);
        }
        .share-button-facebook:hover {
          background-color: #2563eb;
        }
        .share-button-twitter:hover {
          background-color: #06b6d4;
        }
        .share-button-linkedin:hover {
          background-color: #1d4ed8;
        }
        .share-button-whatsapp:hover {
          background-color: #16a34a;
        }
        .back-link {
          color: #22d3ee;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.875rem;
          transition: all 0.3s;
        }
        .back-link:hover {
          color: #67e8f9;
          transform: translateX(-4px);
        }
        .related-section {
          margin-top: 5rem;
          padding-top: 3rem;
          border-top: 1px solid #1f2937;
        }
        .related-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .related-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .related-card {
          display: block;
          text-decoration: none;
        }
        .related-card-item {
          background: linear-gradient(to bottom right, #111827, #030712);
          border-radius: 0.75rem;
          overflow: hidden;
          border: 1px solid #1f2937;
          transition: all 0.5s;
          height: 100%;
        }
        .related-card:hover .related-card-item {
          border-color: #06b6d4;
          box-shadow: 0 20px 25px -5px rgba(6, 182, 212, 0.2);
        }
        .related-image-wrapper {
          position: relative;
          height: 12rem;
          overflow: hidden;
        }
        .related-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s;
        }
        .related-card:hover .related-image {
          transform: scale(1.1);
        }
        .related-content {
          padding: 1.5rem;
        }
        .related-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          font-size: 0.75rem;
          color: #9ca3af;
        }
        .related-title {
          color: #fff;
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          line-height: 1.2;
          transition: color 0.3s;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .related-card:hover .related-title {
          color: #22d3ee;
        }
        .related-excerpt {
          color: #9ca3af;
          font-size: 0.875rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.75;
        }
        .related-footer {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #1f2937;
        }
        .related-read-more {
          color: #22d3ee;
          font-size: 0.875rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: transform 0.3s;
        }
        .related-card:hover .related-read-more {
          transform: translateX(0.5rem);
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
        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
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
        }
      `}</style>
      <div className="blog-detail-wrapper">
        <Header />
       
        {/* Breadcrumb */}
        <div className="breadcrumb-section">
        <div className="breadcrumb-container">
          <div className="breadcrumb-inner">
            <nav className="breadcrumb-nav">
              <Link href="/" className="breadcrumb-link">Home</Link>
              <i className="fas fa-chevron-right breadcrumb-icon"></i>
              <Link href="/blogs" className="breadcrumb-link">Blogs</Link>
              <i className="fas fa-chevron-right breadcrumb-icon"></i>
              <span className="breadcrumb-active">{blog.category}</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Blog Detail Content */}
      <article className="article-section">
        <div className="article-container">
          <div className="article-inner">
            {/* Header */}
            <div className="blog-header">
              <div className="blog-header-badge-wrapper">
                <span className="blog-header-badge">
                  {blog.category}
                </span>
              </div>
              <h1 className="blog-title">
                {blog.title}
              </h1>
              <div className="blog-meta-header">
                <div className="author-section">
                  <div className="author-avatar-large">
                    {blog.author.charAt(0)}
                  </div>
                  <div>
                    <p className="author-info">{blog.author}</p>
                    <p className="author-role">Content Writer</p>
                  </div>
                </div>
                <div className="blog-meta-info">
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
              </div>
            </div>

            {/* Featured Image */}
            <div className="featured-image-wrapper">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="featured-image"
              />
            </div>

            {/* Content */}
            <div 
              className="blog-content-wrapper"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Share Section */}
            <div className="share-section">
              <div className="share-card">
                <div>
                  <h3 className="share-title">Share this article</h3>
                  <div className="share-buttons">
                    <a 
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-button share-button-facebook"
                      aria-label="Share on Facebook"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a 
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(blog.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-button share-button-twitter"
                      aria-label="Share on Twitter"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-button share-button-linkedin"
                      aria-label="Share on LinkedIn"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a 
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(blog.title + ' ' + (typeof window !== 'undefined' ? window.location.href : ''))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-button share-button-whatsapp"
                      aria-label="Share on WhatsApp"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
                <Link 
                  href="/blogs"
                  className="back-link"
                >
                  <i className="fas fa-arrow-left"></i> Back to All Blogs
                </Link>
              </div>
            </div>

            {/* Related Posts */}
            <div className="related-section">
              <div className="section-header">
                <div className="section-divider"></div>
                <h2 className="section-title">Related Articles</h2>
              </div>
              <div className="related-grid">
                {Object.values(blogPosts)
                  .filter(b => b.id !== blog.id)
                  .map((relatedBlog) => (
                    <Link 
                      key={relatedBlog.id}
                      href={`/blogs/${relatedBlog.slug}`}
                      className="related-card"
                    >
                      <div className="related-card-item">
                        <div className="related-image-wrapper">
                          <img 
                            src={relatedBlog.image} 
                            alt={relatedBlog.title}
                            className="related-image"
                          />
                          <div className="image-overlay"></div>
                          <div className="category-badge-small">
                            {relatedBlog.category}
                          </div>
                        </div>
                        <div className="related-content">
                          <div className="related-meta">
                            <span className="blog-meta-item">
                              <i className="far fa-calendar blog-meta-icon"></i>
                              {relatedBlog.date}
                            </span>
                            <span>•</span>
                            <span className="blog-meta-item">
                              <i className="far fa-clock blog-meta-icon"></i>
                              {relatedBlog.readTime}
                            </span>
                          </div>
                          <h3 className="related-title">
                            {relatedBlog.title}
                          </h3>
                          <p className="related-excerpt">{relatedBlog.excerpt}</p>
                          <div className="related-footer">
                            <span className="related-read-more">
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
        </div>
      </article>

        <FooterSection />
      </div>
    </>
  );
};

export default BlogDetailPage;
