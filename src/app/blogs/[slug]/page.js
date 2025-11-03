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
      <p class="text-gray-300 leading-relaxed mb-6 text-lg">
        In today's rapidly evolving business landscape, AI automation has emerged as a transformative force, revolutionizing how companies operate, compete, and grow. As we navigate through 2024, the integration of artificial intelligence and automation technologies is no longer a luxury but a necessity for businesses aiming to stay ahead.
      </p>

      <h2 class="text-white text-2xl md:text-3xl font-bold mb-4 mt-10 flex items-center gap-3">
        <span class="w-1 h-8 bg-cyan-500 rounded"></span>
        The Rise of AI Automation
      </h2>
      <p class="text-gray-300 leading-relaxed mb-6 text-lg">
        Artificial Intelligence automation combines the power of machine learning, natural language processing, and robotic process automation to create intelligent systems that can perform complex tasks with minimal human intervention. From customer service chatbots to automated data analysis, AI automation is reshaping industries across the board.
      </p>

      <h2 class="text-white text-2xl md:text-3xl font-bold mb-6 mt-10 flex items-center gap-3">
        <span class="w-1 h-8 bg-cyan-500 rounded"></span>
        Key Benefits for Businesses
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div class="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-6 hover:border-cyan-500 transition-all">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <i class="fas fa-rocket text-xl"></i>
            </div>
            <div>
              <h3 class="text-white font-bold mb-2">Increased Efficiency</h3>
              <p class="text-gray-400 text-sm">Automate repetitive tasks, freeing up your team to focus on strategic initiatives</p>
            </div>
          </div>
        </div>
        <div class="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-6 hover:border-cyan-500 transition-all">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <i class="fas fa-chart-line text-xl"></i>
            </div>
            <div>
              <h3 class="text-white font-bold mb-2">Cost Reduction</h3>
              <p class="text-gray-400 text-sm">Reduce operational costs by up to 60% through intelligent automation</p>
            </div>
          </div>
        </div>
        <div class="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-6 hover:border-cyan-500 transition-all">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <i class="fas fa-crosshairs text-xl"></i>
            </div>
            <div>
              <h3 class="text-white font-bold mb-2">Enhanced Accuracy</h3>
              <p class="text-gray-400 text-sm">Minimize human errors and ensure consistent, high-quality outputs</p>
            </div>
          </div>
        </div>
        <div class="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-6 hover:border-cyan-500 transition-all">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <i class="fas fa-clock text-xl"></i>
            </div>
            <div>
              <h3 class="text-white font-bold mb-2">24/7 Operations</h3>
              <p class="text-gray-400 text-sm">Enable round-the-clock operations without additional workforce</p>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-white text-2xl md:text-3xl font-bold mb-4 mt-10 flex items-center gap-3">
        <span class="w-1 h-8 bg-cyan-500 rounded"></span>
        Real-World Applications
      </h2>
      <p class="text-gray-300 leading-relaxed mb-6 text-lg">
        Companies across various sectors are leveraging AI automation to transform their operations. E-commerce platforms use AI for inventory management and personalized recommendations. Healthcare providers automate patient scheduling and administrative tasks. Financial institutions employ AI for fraud detection and risk assessment.
      </p>

      <div class="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-l-4 border-cyan-500 p-6 my-8 rounded-r-lg">
        <p class="text-white italic mb-3 text-lg">
          "Implementing AI automation has reduced our processing time by 75% while improving accuracy. It's been a game-changer for our operations."
        </p>
        <p class="text-gray-400 text-sm font-semibold">— Industry Leader</p>
      </div>

      <h2 class="text-white text-2xl md:text-3xl font-bold mb-4 mt-10 flex items-center gap-3">
        <span class="w-1 h-8 bg-cyan-500 rounded"></span>
        Getting Started with AI Automation
      </h2>
      <p class="text-gray-300 leading-relaxed mb-6 text-lg">
        Starting your AI automation journey requires a strategic approach. Begin by identifying repetitive tasks and processes that can benefit from automation. Work with experienced partners like Insta Biz Web to assess your needs, plan implementation, and ensure seamless integration with your existing systems.
      </p>

      <h2 class="text-white text-2xl md:text-3xl font-bold mb-4 mt-10 flex items-center gap-3">
        <span class="w-1 h-8 bg-cyan-500 rounded"></span>
        The Future is Automated
      </h2>
      <p class="text-gray-300 leading-relaxed mb-6 text-lg">
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
      <p class="text-gray-300 leading-relaxed mb-6 text-lg">
        Customer Relationship Management (CRM) systems have become essential tools for businesses of all sizes. For small businesses, finding the right CRM solution that's both affordable and feature-rich can be challenging. Odoo CRM emerges as an excellent choice, offering comprehensive functionality at a fraction of the cost of enterprise solutions.
      </p>

      <h2 class="text-white text-2xl md:text-3xl font-bold mb-4 mt-10 flex items-center gap-3">
        <span class="w-1 h-8 bg-cyan-500 rounded"></span>
        Why Odoo CRM for Small Businesses?
      </h2>
      <p class="text-gray-300 leading-relaxed mb-6 text-lg">
        Odoo CRM is an open-source, all-in-one business management software that includes CRM functionality along with other business applications. For small businesses, this integrated approach means you can manage customers, sales, inventory, accounting, and more from a single platform.
      </p>

      <h2 class="text-white text-2xl md:text-3xl font-bold mb-6 mt-10 flex items-center gap-3">
        <span class="w-1 h-8 bg-cyan-500 rounded"></span>
        Key Features That Matter
      </h2>
      <div class="space-y-4 mb-8">
        <div class="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-5 hover:border-cyan-500 transition-all">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center text-white flex-shrink-0 font-bold">
              1
            </div>
            <div>
              <h3 class="text-white font-bold mb-1">Lead Management</h3>
              <p class="text-gray-400 text-sm">Track leads from multiple sources and convert them into opportunities</p>
            </div>
          </div>
        </div>
        <div class="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-5 hover:border-cyan-500 transition-all">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center text-white flex-shrink-0 font-bold">
              2
            </div>
            <div>
              <h3 class="text-white font-bold mb-1">Sales Pipeline</h3>
              <p class="text-gray-400 text-sm">Visualize your sales process and identify bottlenecks</p>
            </div>
          </div>
        </div>
        <div class="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-5 hover:border-cyan-500 transition-all">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center text-white flex-shrink-0 font-bold">
              3
            </div>
            <div>
              <h3 class="text-white font-bold mb-1">Customer Communication</h3>
              <p class="text-gray-400 text-sm">Manage all customer interactions in one centralized place</p>
            </div>
          </div>
        </div>
        <div class="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-5 hover:border-cyan-500 transition-all">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center text-white flex-shrink-0 font-bold">
              4
            </div>
            <div>
              <h3 class="text-white font-bold mb-1">Reporting & Analytics</h3>
              <p class="text-gray-400 text-sm">Get insights into your sales performance and customer behavior</p>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-white text-2xl md:text-3xl font-bold mb-6 mt-10 flex items-center gap-3">
        <span class="w-1 h-8 bg-cyan-500 rounded"></span>
        Implementation Steps
      </h2>
      <div class="space-y-4 mb-8">
        <div class="bg-gradient-to-r from-gray-900 to-gray-950 p-6 rounded-lg border border-gray-800">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              1
            </div>
            <div class="flex-1">
              <h3 class="text-white text-xl font-bold mb-2">Planning & Assessment</h3>
              <p class="text-gray-300">Evaluate your current processes, identify requirements, and set clear objectives for your CRM implementation.</p>
            </div>
          </div>
        </div>
        <div class="bg-gradient-to-r from-gray-900 to-gray-950 p-6 rounded-lg border border-gray-800">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              2
            </div>
            <div class="flex-1">
              <h3 class="text-white text-xl font-bold mb-2">Customization</h3>
              <p class="text-gray-300">Customize Odoo CRM to match your business workflows, including fields, stages, and automation rules.</p>
            </div>
          </div>
        </div>
        <div class="bg-gradient-to-r from-gray-900 to-gray-950 p-6 rounded-lg border border-gray-800">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              3
            </div>
            <div class="flex-1">
              <h3 class="text-white text-xl font-bold mb-2">Data Migration</h3>
              <p class="text-gray-300">Safely migrate existing customer data and ensure data integrity throughout the process.</p>
            </div>
          </div>
        </div>
        <div class="bg-gradient-to-r from-gray-900 to-gray-950 p-6 rounded-lg border border-gray-800">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              4
            </div>
            <div class="flex-1">
              <h3 class="text-white text-xl font-bold mb-2">Team Training</h3>
              <p class="text-gray-300">Train your team on using Odoo CRM effectively to maximize adoption and ROI.</p>
            </div>
          </div>
        </div>
        <div class="bg-gradient-to-r from-gray-900 to-gray-950 p-6 rounded-lg border border-gray-800">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              5
            </div>
            <div class="flex-1">
              <h3 class="text-white text-xl font-bold mb-2">Go Live & Support</h3>
              <p class="text-gray-300">Launch your CRM system and provide ongoing support to ensure smooth operations.</p>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-white text-2xl md:text-3xl font-bold mb-4 mt-10 flex items-center gap-3">
        <span class="w-1 h-8 bg-cyan-500 rounded"></span>
        Common Pitfalls to Avoid
      </h2>
      <p class="text-gray-300 leading-relaxed mb-4 text-lg">
        Many small businesses make mistakes during CRM implementation. Avoid these common pitfalls:
      </p>
      <div class="bg-gradient-to-br from-red-500/5 to-orange-500/5 border border-red-500/20 rounded-lg p-6 mb-6">
        <ul class="space-y-3">
          <li class="flex items-start gap-3 text-gray-300">
            <i class="fas fa-times-circle text-red-400 mt-1 flex-shrink-0"></i>
            <span>Not clearly defining business requirements before implementation</span>
          </li>
          <li class="flex items-start gap-3 text-gray-300">
            <i class="fas fa-times-circle text-red-400 mt-1 flex-shrink-0"></i>
            <span>Over-customizing the system, making it complex and difficult to maintain</span>
          </li>
          <li class="flex items-start gap-3 text-gray-300">
            <i class="fas fa-times-circle text-red-400 mt-1 flex-shrink-0"></i>
            <span>Insufficient team training leading to low adoption rates</span>
          </li>
          <li class="flex items-start gap-3 text-gray-300">
            <i class="fas fa-times-circle text-red-400 mt-1 flex-shrink-0"></i>
            <span>Neglecting data quality during migration</span>
          </li>
        </ul>
      </div>

      <h2 class="text-white text-2xl md:text-3xl font-bold mb-4 mt-10 flex items-center gap-3">
        <span class="w-1 h-8 bg-cyan-500 rounded"></span>
        Best Practices for Success
      </h2>
      <div class="bg-gradient-to-br from-green-500/5 to-cyan-500/5 border border-green-500/20 rounded-lg p-6 mb-6">
        <ul class="space-y-3">
          <li class="flex items-start gap-3 text-gray-300">
            <i class="fas fa-check-circle text-green-400 mt-1 flex-shrink-0"></i>
            <span>Start with essential features and expand gradually</span>
          </li>
          <li class="flex items-start gap-3 text-gray-300">
            <i class="fas fa-check-circle text-green-400 mt-1 flex-shrink-0"></i>
            <span>Involve your team in the planning process</span>
          </li>
          <li class="flex items-start gap-3 text-gray-300">
            <i class="fas fa-check-circle text-green-400 mt-1 flex-shrink-0"></i>
            <span>Choose a reliable implementation partner</span>
          </li>
          <li class="flex items-start gap-3 text-gray-300">
            <i class="fas fa-check-circle text-green-400 mt-1 flex-shrink-0"></i>
            <span>Regularly review and optimize your CRM processes</span>
          </li>
        </ul>
      </div>

      <div class="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/30 p-8 my-10 rounded-xl">
        <h3 class="text-white text-xl font-bold mb-3">Need Help with Odoo CRM Implementation?</h3>
        <p class="text-gray-300 mb-5 leading-relaxed">
          Insta Biz Web specializes in Odoo CRM implementation for small and medium businesses. Our expert team can help you plan, customize, and deploy Odoo CRM to transform your business operations.
        </p>
        <Link href="/contact-us" class="inline-flex items-center gap-2 bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50">
          Contact Us Today <i class="fas fa-arrow-right"></i>
        </Link>
      </div>

      <h2 class="text-white text-2xl md:text-3xl font-bold mb-4 mt-10 flex items-center gap-3">
        <span class="w-1 h-8 bg-cyan-500 rounded"></span>
        Conclusion
      </h2>
      <p class="text-gray-300 leading-relaxed mb-6 text-lg">
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
      <div className="bg-black min-h-screen">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-32 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-24 h-24 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-search text-4xl text-gray-600"></i>
            </div>
            <h1 className="text-white text-4xl font-bold mb-4">Blog Not Found</h1>
            <p className="text-gray-400 mb-8 text-lg">The blog post you're looking for doesn't exist or has been removed.</p>
            <Link href="/blogs" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold">
              <i className="fas fa-arrow-left"></i> Back to Blogs
            </Link>
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-black pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-3 text-sm mb-6 flex-wrap">
              <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</Link>
              <i className="fas fa-chevron-right text-gray-600 text-xs"></i>
              <Link href="/blogs" className="text-gray-400 hover:text-cyan-400 transition-colors">Blogs</Link>
              <i className="fas fa-chevron-right text-gray-600 text-xs"></i>
              <span className="text-cyan-400 truncate max-w-xs">{blog.category}</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Blog Detail Content */}
      <article className="bg-black pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-10">
              <div className="mb-5">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg">
                  {blog.category}
                </span>
              </div>
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {blog.title}
              </h1>
              <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-gray-800">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {blog.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">{blog.author}</p>
                    <p className="text-gray-400 text-sm">Content Writer</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <i className="far fa-calendar text-cyan-400"></i>
                    {blog.date}
                  </span>
                  <span className="text-gray-700">•</span>
                  <span className="flex items-center gap-2">
                    <i className="far fa-clock text-cyan-400"></i>
                    {blog.readTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12 rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-72 md:h-[500px] object-cover"
              />
            </div>

            {/* Content */}
            <div 
              className="prose prose-invert prose-lg max-w-none
                [&_h2]:text-white [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 
                [&_p]:text-gray-300 [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-lg
                [&_ul]:mb-6 [&_li]:mb-2 [&_li]:text-gray-300
                [&_a]:text-cyan-400 [&_a]:hover:text-cyan-300 [&_a]:transition-colors"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Share Section */}
            <div className="mt-16 pt-8 border-t border-gray-800">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-6 border border-gray-800">
                <div>
                  <h3 className="text-white font-bold mb-4 text-lg">Share this article</h3>
                  <div className="flex gap-3">
                    <a 
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
                      aria-label="Share on Facebook"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a 
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(blog.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gray-800 hover:bg-cyan-500 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
                      aria-label="Share on Twitter"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gray-800 hover:bg-blue-700 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
                      aria-label="Share on LinkedIn"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a 
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(blog.title + ' ' + (typeof window !== 'undefined' ? window.location.href : ''))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
                      aria-label="Share on WhatsApp"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
                <Link 
                  href="/blogs"
                  className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2 font-semibold text-sm transition-all hover:translate-x-[-4px]"
                >
                  <i className="fas fa-arrow-left"></i> Back to All Blogs
                </Link>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-20 pt-12 border-t border-gray-800">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px bg-cyan-500 w-12"></div>
                <h2 className="text-white text-2xl md:text-3xl font-bold">Related Articles</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.values(blogPosts)
                  .filter(b => b.id !== blog.id)
                  .map((relatedBlog) => (
                    <Link 
                      key={relatedBlog.id}
                      href={`/blogs/${relatedBlog.slug}`}
                      className="block group"
                    >
                      <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500 transition-all duration-500 h-full hover:shadow-xl hover:shadow-cyan-500/20">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={relatedBlog.image} 
                            alt={relatedBlog.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute top-4 left-4">
                            <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold">{relatedBlog.category}</span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
                            <span className="flex items-center gap-1.5">
                              <i className="far fa-calendar text-cyan-400"></i>
                              {relatedBlog.date}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5">
                              <i className="far fa-clock text-cyan-400"></i>
                              {relatedBlog.readTime}
                            </span>
                          </div>
                          <h3 className="text-white text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2 leading-tight">
                            {relatedBlog.title}
                          </h3>
                          <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">{relatedBlog.excerpt}</p>
                          <div className="mt-4 pt-4 border-t border-gray-800">
                            <span className="text-cyan-400 text-sm font-semibold inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                              Read More <i className="fas fa-arrow-right text-xs"></i>
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
  );
};

export default BlogDetailPage;
