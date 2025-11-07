'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import FooterSection from '../../components/FooterSection';
import { initNavigation } from '../../utils/navigation';
import { initMouseCursor } from '../../utils/mouseCursor';
import { initSmoothScroll } from '../../utils/smoothScroll';
import { safeBodyClass } from '../../utils/safeBodyClass';

const TermsAndConditionsPage = () => {
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
        .terms-wrapper {
          background-color: #000;
          min-height: 100vh;
        }
        .terms-header {
          text-align: center;
          background-color: #000;
          padding-top: 8rem;
          padding-bottom: 4rem;
        }
        .terms-header-container {
          max-width: 80rem;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .terms-header-inner {
          max-width: 56rem;
          margin-left: auto;
          margin-right: auto;
        }
        .terms-title {
          color: #fff;
          margin-bottom: 1rem;
          font-size: 2.25rem;
          font-weight: 700;
        }
        @media (min-width: 768px) {
          .terms-title {
            font-size: 3rem;
          }
        }
        @media (min-width: 1024px) {
          .terms-title {
            font-size: 3.75rem;
          }
        }
        .terms-subtitle {
          color: #9ca3af;
          font-size: 1.125rem;
          margin-bottom: 1.5rem;
          line-height: 1.75;
        }
        .last-updated {
          color: #6b7280;
          font-size: 0.875rem;
          margin-top: 1rem;
        }
        .breadcrumb-nav {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.875rem;
          margin-top: 2rem;
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
        .terms-content {
          background-color: #000;
          padding-top: 2rem;
          padding-bottom: 5rem;
        }
        .content-container {
          max-width: 80rem;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .content-inner {
          max-width: 56rem;
          margin-left: auto;
          margin-right: auto;
        }
        .section {
          margin-bottom: 3rem;
        }
        .section-number {
          color: #22d3ee;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
        }
        .section-title {
          color: #fff;
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        @media (min-width: 768px) {
          .section-title {
            font-size: 2.25rem;
          }
        }
        .section-text {
          color: #d1d5db;
          line-height: 1.75;
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }
        @media (min-width: 768px) {
          .section-text {
            font-size: 1.125rem;
          }
        }
        .list {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0;
        }
        .list-item {
          color: #d1d5db;
          line-height: 1.75;
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;
        }
        .list-item::before {
          content: '•';
          color: #22d3ee;
          font-weight: bold;
          position: absolute;
          left: 0;
        }
        .service-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin: 1.5rem 0;
        }
        @media (min-width: 768px) {
          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .service-item {
          background: linear-gradient(to bottom right, #111827, #030712);
          border: 1px solid #1f2937;
          border-radius: 0.5rem;
          padding: 1rem;
          color: #d1d5db;
          line-height: 1.6;
        }
        .contact-box {
          background: linear-gradient(to bottom right, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1));
          border: 1px solid rgba(6, 182, 212, 0.3);
          border-radius: 0.75rem;
          padding: 2rem;
          margin: 2rem 0;
        }
        .contact-info {
          color: #d1d5db;
          line-height: 1.75;
          margin-bottom: 0.75rem;
        }
        .contact-email {
          color: #22d3ee;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s;
        }
        .contact-email:hover {
          color: #67e8f9;
        }
        .acceptance-box {
          background: linear-gradient(to bottom right, rgba(34, 197, 94, 0.05), rgba(6, 182, 212, 0.05));
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 0.75rem;
          padding: 2rem;
          margin: 3rem 0;
        }
        .acceptance-title {
          color: #fff;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .acceptance-text {
          color: #d1d5db;
          line-height: 1.75;
        }
      `}</style>
      <div className="terms-wrapper">
        <Header />
        
        {/* Header Section */}
        <div className="terms-header">
          <div className="terms-header-container">
            <div className="terms-header-inner">
              <h1 className="terms-title">Terms & Conditions</h1>
              <p className="terms-subtitle">
                Please read these terms and conditions carefully before using our services.
              </p>
              <p className="last-updated">Last updated: July 16, 2025</p>
              <nav className="breadcrumb-nav">
                <Link href="/" className="breadcrumb-link">Home</Link>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-active">Terms & Conditions</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="terms-content">
          <div className="content-container">
            <div className="content-inner">
              
              {/* Section 1 */}
              <section className="section">
                <div className="section-number">1. Introduction</div>
                <p className="section-text">
                  These Terms and Conditions ("Terms") govern your use of InstaBiz Web's services and website. By accessing or using our services, you agree to be bound by these Terms.
                </p>
              </section>

              {/* Section 2 */}
              <section className="section">
                <div className="section-number">2. Our Services</div>
                <p className="section-text">
                  InstaBiz Web provides digital solutions including:
                </p>
                <div className="service-grid">
                  <div className="service-item">Custom Odoo ERP implementation and customization</div>
                  <div className="service-item">Web and mobile application development</div>
                  <div className="service-item">Business automation solutions</div>
                  <div className="service-item">Digital marketing services</div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="section">
                <div className="section-number">3. Payment Terms</div>
                <p className="section-text">
                  Payment terms will be specified in individual service agreements. Generally:
                </p>
                <ul className="list">
                  <li className="list-item">Payments are due as per the agreed schedule in the project contract</li>
                  <li className="list-item">Late payments may incur additional charges</li>
                  <li className="list-item">All payments are processed securely through authorized payment gateways</li>
                  <li className="list-item">Refunds are subject to our Refund Policy</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section className="section">
                <div className="section-number">4. Intellectual Property</div>
                <p className="section-text">
                  Upon full payment, clients receive ownership rights to custom-developed solutions. However, InstaBiz Web retains rights to general methodologies, frameworks, and pre-existing intellectual property used in the development process.
                </p>
              </section>

              {/* Section 5 */}
              <section className="section">
                <div className="section-number">5. Limitation of Liability</div>
                <p className="section-text">
                  InstaBiz Web's liability is limited to the amount paid for the specific service. We are not liable for indirect, incidental, or consequential damages arising from the use of our services.
                </p>
              </section>

              {/* Section 6 */}
              <section className="section">
                <div className="section-number">6. Privacy</div>
                <p className="section-text">
                  Your privacy is important to us. Please review our <Link href="/privacy-policy" className="contact-email">Privacy Policy</Link> to understand how we collect, use, and protect your information.
                </p>
              </section>

              {/* Section 7 */}
              <section className="section">
                <div className="section-number">7. Termination</div>
                <p className="section-text">
                  Either party may terminate services with written notice as specified in the service agreement. Termination does not relieve payment obligations for services already provided.
                </p>
              </section>

              {/* Section 8 */}
              <section className="section">
                <div className="section-number">8. Changes to Terms</div>
                <p className="section-text">
                  We reserve the right to modify these Terms at any time. Updated terms will be posted on our website with the effective date. Continued use of our services constitutes acceptance of the modified terms.
                </p>
              </section>

              {/* Section 9 */}
              <section className="section">
                <div className="section-number">9. Contact Information</div>
                <p className="section-text">
                  If you have any questions about these Terms & Conditions, please contact us:
                </p>
                <div className="contact-box">
                  <div className="contact-info">
                    <a href="mailto:info@instabizweb.com" className="contact-email">info@instabizweb.com</a>
                  </div>
                  <div className="contact-info">
                    <strong>InstaBiz Web</strong><br />
                    Ahmedabad, Gujarat, India
                  </div>
                </div>
              </section>

              {/* Section 10 */}
              <section className="section">
                <div className="section-number">10. Governing Law</div>
                <p className="section-text">
                  These Terms are governed by the laws of India. Any disputes arising from these Terms will be subject to the jurisdiction of courts in Ahmedabad, Gujarat, India.
                </p>
              </section>

              {/* Acceptance Section */}
              <section className="section">
                <div className="acceptance-box">
                  <h3 className="acceptance-title">Acceptance of Terms</h3>
                  <p className="acceptance-text">
                    By using InstaBiz Web's services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
                  </p>
                </div>
              </section>

            </div>
          </div>
        </div>

        <FooterSection />
      </div>
    </>
  );
};

export default TermsAndConditionsPage;

