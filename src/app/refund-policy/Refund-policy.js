'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import FooterSection from '../../components/FooterSection';
import { initNavigation } from '../../utils/navigation';
import { initMouseCursor } from '../../utils/mouseCursor';
import { initSmoothScroll } from '../../utils/smoothScroll';
import { safeBodyClass } from '../../utils/safeBodyClass';

const RefundPolicyPage = () => {
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
        .refund-wrapper {
          background-color: #000;
          min-height: 100vh;
        }
        .refund-header {
          text-align: center;
          background-color: #000;
          padding-top: 8rem;
          padding-bottom: 4rem;
        }
        .refund-header-container {
          max-width: 80rem;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .refund-header-inner {
          max-width: 56rem;
          margin-left: auto;
          margin-right: auto;
        }
        .refund-title {
          color: #fff;
          margin-bottom: 1rem;
          font-size: 2.25rem;
          font-weight: 700;
        }
        @media (min-width: 768px) {
          .refund-title {
            font-size: 3rem;
          }
        }
        @media (min-width: 1024px) {
          .refund-title {
            font-size: 3.75rem;
          }
        }
        .refund-subtitle {
          color: #9ca3af;
          font-size: 1.125rem;
          margin-bottom: 1.5rem;
          line-height: 1.75;
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
        .refund-content {
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
        .subsection-title {
          color: #fff;
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        @media (min-width: 768px) {
          .subsection-title {
            font-size: 1.5rem;
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
        .service-type-box {
          background: linear-gradient(to bottom right, #111827, #030712);
          border: 1px solid #1f2937;
          border-radius: 0.5rem;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .service-type-title {
          color: #fff;
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .timeframe-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin: 1.5rem 0;
        }
        @media (min-width: 768px) {
          .timeframe-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .timeframe-item {
          background: linear-gradient(to bottom right, #111827, #030712);
          border: 1px solid #1f2937;
          border-radius: 0.5rem;
          padding: 1rem;
        }
        .timeframe-label {
          color: #22d3ee;
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
        }
        .timeframe-value {
          color: #d1d5db;
          font-size: 0.875rem;
        }
        .non-refundable-box {
          background: linear-gradient(to bottom right, rgba(239, 68, 68, 0.05), rgba(249, 115, 22, 0.05));
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 0.75rem;
          padding: 2rem;
          margin: 2rem 0;
        }
        .process-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin: 2rem 0;
        }
        @media (min-width: 768px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .process-card {
          background: linear-gradient(to bottom right, #111827, #030712);
          border: 1px solid #1f2937;
          border-radius: 0.5rem;
          padding: 1.5rem;
          transition: all 0.3s;
        }
        .process-card:hover {
          border-color: #06b6d4;
        }
        .process-number {
          color: #22d3ee;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .process-title {
          color: #fff;
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .process-text {
          color: #9ca3af;
          font-size: 0.875rem;
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
        .notice-box {
          background: linear-gradient(to bottom right, rgba(249, 115, 22, 0.05), rgba(234, 179, 8, 0.05));
          border: 1px solid rgba(249, 115, 22, 0.2);
          border-radius: 0.75rem;
          padding: 2rem;
          margin: 3rem 0;
        }
        .notice-title {
          color: #fff;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .notice-text {
          color: #d1d5db;
          line-height: 1.75;
        }
      `}</style>
      <div className="refund-wrapper">
        <Header />
        
        {/* Header Section */}
        <div className="refund-header">
          <div className="refund-header-container">
            <div className="refund-header-inner">
              <h1 className="refund-title">Refund Policy</h1>
              <p className="refund-subtitle">
                Learn about our refund process and eligibility criteria for different services.
              </p>
              <nav className="breadcrumb-nav">
                <Link href="/" className="breadcrumb-link">Home</Link>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-active">Refund Policy</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="refund-content">
          <div className="content-container">
            <div className="content-inner">
              
              {/* Section 1 */}
              <section className="section">
                <div className="section-number">1. Refund Policy Overview</div>
                <p className="section-text">
                  At InstaBiz Web, we are committed to delivering high-quality digital solutions. This refund policy outlines the conditions under which refunds may be requested and processed for our services.
                </p>
              </section>

              {/* Section 2 */}
              <section className="section">
                <div className="section-number">2. Refund Eligibility by Service Type</div>
                
                <div className="service-type-box">
                  <h3 className="service-type-title">Custom Development Services</h3>
                  <ul className="list">
                    <li className="list-item">Odoo ERP Development: Refunds available within 7 days of project initiation if no development work has commenced</li>
                    <li className="list-item">Web/Mobile Development: Refunds available within 5 days if project requirements are not met as agreed</li>
                    <li className="list-item">Business Automation: 30-day satisfaction guarantee after implementation</li>
                  </ul>
                </div>

                <div className="service-type-box">
                  <h3 className="service-type-title">Digital Marketing Services</h3>
                  <ul className="list">
                    <li className="list-item">Campaign Setup: Full refund if campaign is not launched within agreed timeframe</li>
                    <li className="list-item">Monthly Packages: Pro-rated refunds available with 15-day notice</li>
                    <li className="list-item">Consulting Services: Refunds available within 48 hours if unsatisfied with initial consultation</li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section className="section">
                <div className="section-number">3. Refund Timeframes</div>
                <div className="timeframe-grid">
                  <div className="timeframe-item">
                    <div className="timeframe-label">Processing Time</div>
                    <div className="timeframe-value">Refund requests are processed within 5-7 business days after approval</div>
                  </div>
                  <div className="timeframe-item">
                    <div className="timeframe-label">Bank Transfer</div>
                    <div className="timeframe-value">Refunds appear in your account within 7-14 business days depending on your bank</div>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section className="section">
                <div className="section-number">4. Non-Refundable Services</div>
                <p className="section-text">The following services are non-refundable:</p>
                <div className="non-refundable-box">
                  <ul className="list">
                    <li className="list-item">Completed and delivered projects that meet agreed specifications</li>
                    <li className="list-item">Third-party licenses and subscriptions purchased on behalf of clients</li>
                    <li className="list-item">Services where work has been completed and accepted by client</li>
                    <li className="list-item">Custom development work that has been deployed to production</li>
                    <li className="list-item">Training and consultation services after completion</li>
                  </ul>
                </div>
              </section>

              {/* Section 5 */}
              <section className="section">
                <div className="section-number">5. How to Request a Refund</div>
                <div className="process-grid">
                  <div className="process-card">
                    <div className="process-number">1</div>
                    <div className="process-title">Contact Us</div>
                    <div className="process-text">Email us at info@instabizweb.com with your refund request</div>
                  </div>
                  <div className="process-card">
                    <div className="process-number">2</div>
                    <div className="process-title">Provide Details</div>
                    <div className="process-text">Include project details, payment information, and reason for refund</div>
                  </div>
                  <div className="process-card">
                    <div className="process-number">3</div>
                    <div className="process-title">Review Process</div>
                    <div className="process-text">We will review your request within 2-3 business days</div>
                  </div>
                  <div className="process-card">
                    <div className="process-number">4</div>
                    <div className="process-title">Refund Processing</div>
                    <div className="process-text">Approved refunds will be processed to your original payment method</div>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section className="section">
                <div className="section-number">6. Partial Refunds</div>
                <p className="section-text">Partial refunds may be issued in the following circumstances:</p>
                <ul className="list">
                  <li className="list-item">Project scope changes resulting in reduced deliverables</li>
                  <li className="list-item">Early termination of ongoing service contracts</li>
                  <li className="list-item">Unused portions of prepaid service packages</li>
                  <li className="list-item">Mutual agreement between InstaBiz Web and the client</li>
                </ul>
              </section>

              {/* Section 7 */}
              <section className="section">
                <div className="section-number">7. Dispute Resolution</div>
                <p className="section-text">
                  If you disagree with a refund decision, you may request a review by our management team. We are committed to resolving all disputes fairly and will work with you to find a satisfactory solution.
                </p>
              </section>

              {/* Section 8 */}
              <section className="section">
                <div className="section-number">8. Contact for Refund Requests</div>
                <div className="contact-box">
                  <div className="contact-info">
                    <strong>Email:</strong> <a href="mailto:info@instabizweb.com" className="contact-email">info@instabizweb.com</a>
                  </div>
                  <div className="contact-info">
                    <strong>Response Time:</strong> Within 24-48 hours
                  </div>
                  <div className="contact-info">
                    <strong>Subject Line Format:</strong><br />
                    "Refund Request - [Project Name/Invoice Number]"
                  </div>
                </div>
              </section>

              {/* Section 9 */}
              <section className="section">
                <div className="section-number">9. Policy Updates</div>
                <p className="section-text">
                  This refund policy may be updated from time to time. Any changes will be posted on our website with the effective date. Existing projects will be governed by the policy in effect at the time of agreement.
                </p>
              </section>

              {/* Important Notice */}
              <section className="section">
                <div className="notice-box">
                  <h3 className="notice-title">Important Notice</h3>
                  <p className="notice-text">
                    All refund requests are subject to review and approval. This policy does not guarantee refunds but outlines the circumstances under which they may be considered. For specific questions about your project or refund eligibility, please contact our team directly.
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

export default RefundPolicyPage;

