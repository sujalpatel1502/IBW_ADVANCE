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
    <div className="bg-black min-h-screen">
      <Header />
      
      {/* Breadcrumb */}
      <div className="text-center bg-black pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">Our Blogs</h1>
            <nav className="flex justify-center items-center gap-3 text-sm">
              <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</Link>
              <span className="text-gray-600">/</span>
              <span className="text-cyan-400">Blogs</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Blogs Section */}
      <div className="bg-black py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Featured Blog */}
            {blogPosts.find(blog => blog.featured) && (
              <div className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px bg-cyan-500 w-12"></div>
                  <h2 className="text-white text-2xl md:text-3xl font-bold">Featured Post</h2>
                </div>
                {blogPosts
                  .filter(blog => blog.featured)
                  .map((blog) => (
                    <Link 
                      key={blog.id} 
                      href={`/blogs/${blog.slug}`}
                      className="block group"
                    >
                      <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                        <div className="md:flex">
                          <div className="md:w-1/2">
                            <div className="relative h-72 md:h-full overflow-hidden">
                              <img 
                                src={blog.image} 
                                alt={blog.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div className="absolute top-6 left-6">
                                <span className="bg-cyan-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg">
                                  {blog.category}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                              <span className="flex items-center gap-2">
                                <i className="far fa-calendar text-cyan-400"></i>
                                {blog.date}
                              </span>
                              <span className="text-gray-600">•</span>
                              <span className="flex items-center gap-2">
                                <i className="far fa-clock text-cyan-400"></i>
                                {blog.readTime}
                              </span>
                            </div>
                            <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 group-hover:text-cyan-400 transition-colors leading-tight">
                              {blog.title}
                            </h3>
                            <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                              {blog.excerpt}
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg">
                                  {blog.author.charAt(0)}
                                </div>
                                <span className="text-gray-300 text-sm font-medium">{blog.author}</span>
                              </div>
                              <span className="text-cyan-400 group-hover:translate-x-2 transition-transform inline-flex items-center gap-2 font-semibold text-sm">
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
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px bg-cyan-500 w-12"></div>
                <h2 className="text-white text-2xl md:text-3xl font-bold">All Posts</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((blog) => (
                  <Link 
                    key={blog.id} 
                    href={`/blogs/${blog.slug}`}
                    className="block group"
                  >
                    <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 h-full flex flex-col">
                      <div className="relative h-56 overflow-hidden">
                        <img 
                          src={blog.image} 
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg">
                            {blog.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                          <span className="flex items-center gap-1.5">
                            <i className="far fa-calendar text-cyan-400 text-xs"></i>
                            {blog.date}
                          </span>
                          <span className="text-gray-600">•</span>
                          <span className="flex items-center gap-1.5">
                            <i className="far fa-clock text-cyan-400 text-xs"></i>
                            {blog.readTime}
                          </span>
                        </div>
                        <h3 className="text-white text-xl md:text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
                          {blog.title}
                        </h3>
                        <p className="text-gray-400 mb-4 leading-relaxed flex-1 line-clamp-3">
                          {blog.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-800 mt-auto">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold shadow">
                              {blog.author.charAt(0)}
                            </div>
                            <span className="text-gray-300 text-sm font-medium">{blog.author}</span>
                          </div>
                          <span className="text-cyan-400 group-hover:translate-x-2 transition-transform inline-flex items-center gap-2 text-sm font-semibold">
                            Read <i className="fas fa-arrow-right text-xs"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-24 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-xl p-8 md:p-12 border border-cyan-500/30 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              <div className="relative z-10">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                  Want to Learn More About Our Services?
                </h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Explore our comprehensive IT solutions, AI automation tools, and digital transformation services that can help your business thrive.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Link 
                    href="/services" 
                    className="bg-cyan-500 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-cyan-600 transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:translate-y-[-2px]"
                  >
                    View Services <i className="fas fa-arrow-right"></i>
                  </Link>
                  <Link 
                    href="/contact-us" 
                    className="bg-transparent border-2 border-cyan-500 text-cyan-400 px-8 py-3.5 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:translate-y-[-2px]"
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
  );
};

export default BlogsPage;
